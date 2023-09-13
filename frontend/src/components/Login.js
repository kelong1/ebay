import React from 'react'

export const Login = () => {
  return (
    <div className='log'>
        <form  className=' form-control login'>
          <h3 style={{textAlign:'center'}}>Login Form</h3>
            <input type="text"  placeholder='username' className='form-control'/>
            <input type="text" placeholder='password' className='form-control' />
            <button className='btn btn-danger'>Login</button>
        </form>
    </div>
  )
}
