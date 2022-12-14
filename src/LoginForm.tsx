import React, { useState } from 'react'

function LoginForm() {
  const countries = [
    { name: 'Austria', isoCode: 'AT' },
    { name: 'United States', isoCode: 'US' },
    { name: 'Ireland', isoCode: 'IE' }
  ]

  const [buttonColor, setButtonColor] = useState('red')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.includes('@')) {
      setIsValidEmail(false)
    }
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <select>
          <option>Select a country</option>
          {countries.map((country) => (
            <option key={country.isoCode} value={country.isoCode}>
              {country.name}
            </option>
          ))}
        </select>
        <label htmlFor='email'>Email</label>
        <input
          data-testid='email'
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isValidEmail && <div>Email is invalid</div>}
        <label htmlFor='password'>Password</label>
        <input
          data-testid='password'
          type='password'
          id='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='checkbox'  />
        <button data-testid='color-button'
        style={{backgroundColor: buttonColor}}
        onClick={()=>setButtonColor(pre=>pre ==='red'?'blue':'red')}
        >
          change
        </button>
        <button id='submit' type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
