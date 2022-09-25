import Axios from "axios";

const login=async(id, pw)=>{
    await Axios.post("http://localhost:30000/login",{
        id:id,
        pw:pw
    }).then((res)=>{
        return res.data.data
    }).catch((err)=>{
        console.log(err)
    })
}

export default login