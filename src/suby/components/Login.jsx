import React, {useState} from 'react'

const Login = () => {
  return (
    <div>
       {!loading &&    <form  className='authForm' onSubmit={loginHandler} autoComplete='off'>
        <h3>Vendor Login</h3>
            <label>Email</label>
            <input type="text" name='email' value = {email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/><br />
            <label>Password</label>
            <input   type={showPassword? "text":"password"} name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password'/><br />
            <span className='showPassword'
              onClick={handleShowPassword}
              >{showPassword ? 'Hide' : 'Show'}</span>
    <div className="btnSubmit">
        <button type= 'submit'>Submit</button>
    </div>
        </form>}
    </div>
  )
}

export default Login
