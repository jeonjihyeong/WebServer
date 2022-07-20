window.onload=()=>{
    const token = localStorage.getItem('accessToken')
}
const token = localStorage.getItem('accessToken')

function writeBoard(){
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    axios.post("http://localhost:3000/board/write",{
        token: token,
        title: title,
        content: content
    }).then((res)=>{
        console.log(res)
        return

    }).catch((error)=>{
        console.log("에러발생:",error);
    })
}