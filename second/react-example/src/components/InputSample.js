import { useState } from "react"
import React ,{useRef} from 'react'
//객체의 형태의 상태관리하기
//->상태를 변경시킬 떄, 상태의 초기모양을 유지해야 한다.


const InputSample = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })
    
    const nameInputs =useRef();
    const {name, nickname}=inputs;
    const onChangeName=(e)=>{
        setInputs({
            ...inputs,
            name:e.target.value,
        })
    }

    const onChangeNickName=(e)=>{
        setInputs({
            ...inputs,
            nickname: e.target.value,
            
        })
    }
    

    const onChange = (e)=>{
        const {name, value} =e.target
        setInputs({
            ...inputs,
            [name] :value
        })
    }

    const onReset=(e)=>{
    }

    return (
    <div>
        <input placeholder='이름' onChange={onChange} value={name} name="name"/>
        <input placeholder='닉네임' onChange={onChange} value={nickname} name="nickname"/>
        <butoon>초기화</butoon>
        <div>
            <b>값: {text}</b>
        </div>
    </div>
  )
}

export default InputSample