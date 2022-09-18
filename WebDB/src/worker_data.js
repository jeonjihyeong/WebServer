// 워커스레드 사용을 위해 필요한 라이브러리를 정의한다.
const {
    Worker, isMainThread, parentPort, workerData,
}=require('worker_threads');

// 반복문을 통하여 메인스레드일때와 워커스레드일때를 구분한다.
if (isMainThread){
    const threads = new Set();
// 쓰레드 두개를 추가한다.
    threads.add(new Worker(__filename,{
        workerData:{start:1},
    }));
    threads.add(new Worker(__filename,{
        workerData:{start:2},
    }));
    //쓰레드의 갯수만큼 반복문을 돌린다.
    for (let worker of threads){
        worker.on('message',message=>console.log('from worker',message));
        worker.on('exit',()=>{
            threads.delete(worker);
            // if 문을 이용하여 threads 의 사이즈가 0이 되었을때 job done을 찍어준다.
            if(threads.size===0){
                console.log('job done');
            }
        });
    }
} else {
    // 워커스레드에서 메인스레드로 메시지를 보내는 동작이다.
    const data = workerData;
    parentPort.postMessage(data.start+100);
}