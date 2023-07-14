import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [redirect, setredirect] = useState(false);

  async function login(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: { 'Content-type': 'application/json' },
      credentials: 'include' // Include credentials for cookie handling
    });
    const data = await response.json();
    if (response.status === 404) {
      alert('User Not found please Try with a valid user');
    } else if (response.status === 401) {
      alert('Please enter a valid password!');
    } else if (response.status === 200) {
      setredirect(true);
    }

    console.log(data);
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <form className='login' onSubmit={login}>
        <h1> Login</h1>
        <input
          type='text'
          placeholder='UserName'
          onChange={(event) => setusername(event.target.value)}
        />

        <input
          type='password'
          placeholder='Password'
          onChange={(event) => setpassword(event.target.value)}
        />

        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
