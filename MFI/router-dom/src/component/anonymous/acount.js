import {useState} from 'react'
import acountEvent from '../../api/anonymous/acount'


const Acount=()=>{
    const [acountInput,setAcountValue]= useState({
        id: '',
        pw: '',
        age:'',
        email:'',
        name:'',
        nickname:'',
    })

const handleAcountValue=(e)=>{s
    const {name, value}=e.target
    setAcountValue({
        ...acountInput,
        [name]:value
    })
}


    const handleAcount=()=>{
        acountEvent(acountInput)
    }

    return (
        <div>
            <h2>회원가입하기</h2>
            <div>
                <input type="text" placeholder='아이디' name="id" onChange={handleAcountValue}></input>
            </div>
            <div>
                <input type="text" placeholder='비밀번호' name="pw" onChange={handleAcountValue}></input>
            </div>
            <div>
                <input type="text" placeholder='나이' name="age" onChange={handleAcountValue}></input>
            </div>
            <div>
                <input type="text" placeholder='이메일' name="email" onChange={handleAcountValue}></input>
            </div>
            <div>
                <input type="text" placeholder='이름' name="name" onChange={handleAcountValue}></input>
            </div>
            <div>
                <input type="text" placeholder='닉네임' name="nickname" onChange={handleAcountValue}></input>
            </div>
            <input type={"button"} value="회원가입" onClick={handleAcount}></input>
        </div>
    )
}


export default Acount