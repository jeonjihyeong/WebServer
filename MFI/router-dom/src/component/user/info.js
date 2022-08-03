import axios from "axios";
import { useState ,useEffect} from "react"

const Info = ()=>{
    const [userInfo, setinfo]=useState([]);
    useEffect(()=>{
        console.log('mount');
        const token = localStorage.getItem('accessToken')
        axios.get("http://localhost:3000/user/info",{
        headers: {
            authorization: token
        }}).then((res)=>{
            if(res.data.data==="need Token"){
                alert("로그인을 해주세요")
                document.location.href = "/";
            }else{
                const info = res.data.data
                console.log(info)
                setinfo(info)
            }
        })
        return ()=>{
            console.log('unmount');
        };
    },[]);
    
    return(
        <div>
            <UserInfo name ={userInfo.name} nickname = {userInfo.nickname} age = {userInfo.age} email = {userInfo.email}/>
        </div>
    )
}


const UserInfo = ({name, nickname, age, email}) =>{
    return (
        <>
                <div>이름: {name}</div>
                <div>닉네임: {nickname} </div>
                <div>나이: {age}</div>
                <div>E-mail: {email}</div>
        </>
    )
}

export default Info
