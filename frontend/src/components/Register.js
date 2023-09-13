import React from 'react'

export const Register = () => {
  return (
    <div className='reg'>
        <form  className='form-control register' >
        <h3 style={{textAlign:'center'}}>Register Form</h3>
            <input type="text" placeholder='username' className='form-control' />
            <input type="email" placeholder='Email'  className='form-control'/>
            <input type="password" placeholder='password' className='form-control' />
            <input type="confirm_password" placeholder='confirm_password'  className='form-control'/>
            <button className='btn btn-danger'>Register</button>
        </form>
    </div>
  )
}
