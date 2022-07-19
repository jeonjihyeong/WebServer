

function writeBoard(){
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    
    axios.post("http://localhost:3000/board/write",{
        title: title,
        content: content
    }).then((res)=>{
        console.log(res)
        return

    }).catch((error)=>{
        console.log("에러발생:",error);
    })
}