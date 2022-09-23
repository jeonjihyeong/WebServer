import Axios from 'axios'


const getBoard=async()=>{
    const token = localStorage.getItem("accessToken")
    await Axios.get("http://localhost:3000/board",{
        headers:{
            authorization: token,
        }
    }).then((res)=>{
        const resData=res.data;
        if('message' in resData){
            console.log("Error Message:"+resData.message);
            localStorage.removeItem("accessToken");
            alert("유효하지 않은 토큰입니다.");
            location.href='/'
            return 0;
        }
        console.log(resData.data[1]);
        return resData;

    }).catch((err)=>{
        console.log(err);
        return 0;
    })
}


export default getBoard