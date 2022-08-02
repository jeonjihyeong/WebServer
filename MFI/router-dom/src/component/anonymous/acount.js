import {useState} from 'react'
import acountEvent from '../../service/anonymous/acount'


const Acount=()=>{
    const [acountId,setAcountId]= useState("")
    const [acountPw,setAcountPw]= useState("")
    const [acountAge,setAcountAge]= useState("")
    const [acountEmail,setAcountEmail]= useState("")
    const [acountName,setAcountName]= useState("")
    const [acountNickname,setAcountNickname]= useState("")

    const idChange=(e)=>{
        setAcountId(e.target.value)
    }
    const pwChange=(e)=>{
        setAcountPw(e.target.value)
    }
    const ageChange=(e)=>{
        setAcountAge(e.target.value)
    }
    const emailChange=(e)=>{
        setAcountEmail(e.target.value)
    }
    const nameChange=(e)=>{
        setAcountName(e.target.value)
    }
    const nicknameChange=(e)=>{
        setAcountNickname(e.target.value)
    }

    const handleAcount=()=>{
        acountEvent(acountId, acountPw, acountAge, acountEmail, acountName, acountNickname)
    }

    return (
        <div>
            <h2>회원가입하기</h2>
            <div>
                아 이 디: <input type="text" name="acountId" onChange={idChange}></input>
            </div>
            <div>
                비밀번호: <input type="text" name="acountPw" onChange={pwChange}></input>
            </div>
            <div>
                나 이 : <input type="text" name="acountAge" onChange={ageChange}></input>
            </div>
            <div>
                이 메 일: <input type="text" name="acountEmail" onChange={emailChange}></input>
            </div>
            <div>
                이 름 : <input type="text" name="acountName" onChange={nameChange}></input>
            </div>
            <div>
                닉 네 임: <input type="text" name="acountNickname" onChange={nicknameChange}></input>
            </div>
            <input type={"button"} value="회원가입" onClick={handleAcount}></input>
        </div>
    )
}


export default Acount