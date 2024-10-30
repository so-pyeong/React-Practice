import React, { useRef, useState } from 'react'

const Login = ()=> {
    const [id, setId] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const inputRef = useRef();

    const submitLogin = ()=>{
        setSubmitted(true)
        alert(`Welcome, ${id}!`)
        inputRef.current.focus()
        setId('')
        setUserEmail('')
        
    }

  return (
    <div>
        <h1>로그인</h1>
        <div>
            <label>아이디</label>
            <input ref = {inputRef} type='text' value={id} onChange={(e)=>setId(e.target.value)}
                placeholder="아이디입력"/><br/>
            <label>이메일</label>
            <input type='email' value={userEmail} onChange={(e)=>setUserEmail(e.target.value)}
                placeholder="이메일입력"/><br/>
        </div>
            <button onClick={(submitLogin)}>로그인</button>
        <div>
            {/*사용자가 클릭했을 때에만, 입력값을 출력하기*/}
            {submitted && (
            <div>    
            <h1>사용자 입력값</h1>
            <p>id: {id}</p>
            <p>email: {userEmail}</p>
            </div>)
            } 
        </div>
    </div>
  )
}

export default Login;
