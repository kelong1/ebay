import React from 'react'

export const Login = () => {
  return (
    <div>
        <form >
          Login Form
            <input type="text"  placeholder='username' className='form-control'/>
            <input type="text" placeholder='password' className='form-control' />
            <button className='btn btn-danger'>Login</button>
        </form>
    </div>
  )
}
