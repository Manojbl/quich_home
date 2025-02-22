import React from 'react'

const Register = () => {
  return (
    <div>
      <form className='authForm' onSubmit={handleSubmit} autoComplete='off'>

<h3>Vendor Register</h3>
<label>Username</label>
<input type="text" name='username' value={username}  placeholder='enter your name' /><br />
<label>Email</label>
<input type="text" name='email' placeholder='enter your email' /><br />
<label>Password</label>
<input type={showPassword ? "text" : "password"} value={password} name='password' placeholder='enter your password' /><br />
<span className='showPassword'
  onClick={handleShowPassword}
>{showPassword ? 'Hide' : 'Show'}</span>
<div className="btnSubmit">
  <button type='submit'>Submit</button>
</div>
</form>
    </div>
  )
}

export default Register
