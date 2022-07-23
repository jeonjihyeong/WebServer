import {loginStatus} from './home.js'
const token = localStorage.getItem('accessToken')
loginStatus;

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
                authorization: token
            }
        });

    }catch(err){
        console.log(err)
        return;
    }
    return res;
}
    
    


