

const newPromise = (success)=> {

    return new Promise((resolve, reject)=> {
        $get('url', {})
        if(success === true){
            resolve("aaaaaa");
        }
        reject("sssssssssssssss");
    })
}

// 3가지 형태 resolve, reject, pending

let s = true;

newPromise(s).then((data)=> {

}).catch(err => {
    console.log(err) // ssssssssssssss
})

const newAsync = async ()=> {
    return await {message: 'aa'};    

}


let result = new Promise((res, rej)=> {
    res = $get('url', {payload});
    if(res) resolve();
    reject();
})

let result1 = async ()=> {
    const res = await  $get('url', {payload});
    return res;
}