const token = localStorage.getItem('accessToken')

const writeBoard= async()=>{
    let res;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    try{
        res = await axios.post('http://localhost:3000/board/write',{
            title: title,
            content: content
        },
        {
            headers: {
                Authorization: token
            }
        });
        console.log(res)
    }catch(err){
        console.log(err)
        return;
    }
    return res;
}
    
    


