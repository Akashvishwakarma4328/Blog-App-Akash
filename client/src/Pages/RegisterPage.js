import React, { useState } from 'react'

const RegisterPage = () => {
    const[userName,setuserName] = useState('');
    const [password,setpassword] = useState('');

    async function register(event){
        event.preventDefault();
        await fetch('http://localhost:4000/register',{
            method:'Post',
            body:JSON.stringify({userName,password}),
            headers:{'Content-type':'application/json'}
        })

    }
    return (
        <div>
            <form className='register' onSubmit={register}>
                <h1> Register</h1>
                <input type="text" placeholder='UserName'
                 value={userName} 
                 onChange={event => setuserName(event.target.value)} />
                <input type='text' placeholder='Password' 
                value={password} 
                onChange={event => setpassword(event.target.value)} />
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage