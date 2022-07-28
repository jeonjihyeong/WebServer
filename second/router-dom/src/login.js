import axios from "axios";

const loginEvent =async()=>{
    const id = document.getElementById("Id").value;
    const pw = document.getElementById("pw").value;
    axios.post("http://localhost:3000/login",{
        id: id,
        pw: pw
    }).then((res)=>{
        console.log(res)
    }).catch((error)=>{
        console.log(error)
    })
}

export default loginEvent