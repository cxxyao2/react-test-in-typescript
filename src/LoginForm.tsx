import React, { useState } from 'react';

function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidEmail, setIsValidEmail]= useState(true)
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!email.includes('@')) {
      setIsValidEmail(false)
    }


  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
        data-testid='email'
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {!isValidEmail && <div>Email is invalid</div>}
        <label htmlFor="password">Password</label>
        <input
        data-testid='password'
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button  id="submit" type="submit">Login</button>
      </form>
    </div>

  );
}

export default LoginForm;

