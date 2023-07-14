import React, { useState } from 'react'

const RegisterPage = () => {
    const [username, setuserName] = useState('');
    const [password, setpassword] = useState('');

    async function register(event) {
        event.preventDefault();


        const response = await fetch('http://localhost:4000/register', {
            method: 'Post',
            body: JSON.stringify({ username: username, password: password }),
            headers: { 'Content-type': 'application/json' }
        })

        if (response.status === 200) {
            alert("Registration Sucessfull")
        } else {
            alert("Registration got failed");
        }




    }
    return (
        <div>
            <form className='register' onSubmit={register}>
                <h1> Register</h1>
                <input type="text" placeholder='UserName'
                    value={username}
                    onChange={event => setuserName(event.target.value)} />
                <input type='password' placeholder='Password'
                    value={password}
                    onChange={event => setpassword(event.target.value)} />
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage