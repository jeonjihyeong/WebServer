const {
    Worker, isMainThread, parentPort,
}=require('worker_threads');

if (isMainThread){
    const Worker = new Worker(__filename); 
}