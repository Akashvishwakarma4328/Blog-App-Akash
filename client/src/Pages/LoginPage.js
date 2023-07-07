import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <form className='login'>
          <h1> Login</h1>
            <input type="text" placeholder='UserName' />
            <input type='text' placeholder='Password'/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default LoginPage