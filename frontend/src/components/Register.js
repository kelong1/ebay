import React from 'react'

export const Register = () => {
  return (
    <div>
        <form  className='form-control' >
          Register Form
            <input type="text" placeholder='username' className='form-control' />
            <input type="email" placeholder='Email'  className='form-control'/>
            <input type="password" placeholder='password' className='form-control' />
            <input type="confirm_password" placeholder='confirm_password'  className='form-control'/>
            <button className='btn btn-danger'>Register</button>
        </form>
    </div>
  )
}
