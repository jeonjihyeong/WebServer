import axios from "axios";
import { useState ,useEffect} from "react"

const Info = ()=>{
    const [userInfo, setinfo]=useState();
    useEffect(()=>{
        console.log('mount');
        const token = localStorage.getItem('accessToken')
        axios.get("http://localhost:3000/user/info",{
        headers: {
            authorization: token
        }}).then((res)=>{
            const info = res.data.data
            console.log(info)
            setinfo =(info)
            console.log(userInfo)
        })
        
        return ()=>{
            console.log('unmount');
        };
    },[]);
        
    // const token = localStorage.getItem('accessToken')
    // // const [userInfo, setinfo]=useState("");
    // axios.get("http://localhost:3000/user/info",{
    //     headers: {
    //         authorization: token
    //     }}).then((res)=>{
    //     })
        
    //     console.log(userInfo)
    
    
    return(
        <div>
            <UserInfo name ={userInfo}/>
        </div>
    )
}


const UserInfo = ({name}) =>{
    return (
        <>
                <div>이름: {name}</div>
                <div>닉네임: </div>
                <div>나이:</div>
                <div>E-mail: </div>
        </>
    )
}

export default Info
