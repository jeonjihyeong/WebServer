const {
    Worker, isMainThread, parentPort, workerData
} =require('worker_threads');

const min = 2;
let primes = [];

// 소수를 판별하는 함수이다.
function findPrimes(start, range){
    let isPrime = true;
    let end = start + range;
    for(let i = start;i<end;i++){
        for (let j = min;j<Math.sqrt(end);j++){
            if(i!=j && i%j===0){
                isPrime = false;
                break;
            }
        }
        if (isPrime){
            primes.push(i);
        }
        isPrime=true;
    }
}
// 메인 스레드일때 실행할 조건문
if (isMainThread){
    const max = 10000000;
    const threadCount = 8;
    const threads = new Set();
    const range = Math.ceil((max-min)/threadCount)
    let start = min;
    console.time('prime');
    for (let i=0;i<threadCount-1;i++){
        const wstart = start;
        // threads.add 작업을 추가하여 새로운 워커쓰레드를 추가하여 사용할 수 있다.
        threads.add(new Worker(__filename,{workerData:{start, range:range+((max-min+1)%threadCount)}}));
    }for(let worker of threads){
        worker.on('error',(err)=>{
            throw err;
        });
        worker.on('exit',()=>{
            threads.delete(worker);
            if (threads.size ===0){
                // 걸리는 시간을 출력한다.
                console.timeEnd('prime');
                // 범위에서 소수의 갯수를 출력함
                console.log(primes.length);
            }
        });
        worker.on('message',(msg)=>{
            primes=primes.concat(msg);
        });
    }
}
// 워커스레드를 호출했을때 해야할 작업
else{
    // 소수판별 함수를 호출한다.
    findPrimes(workerData.start,workerData.range);
    parentPort.postMessage(primes);
}