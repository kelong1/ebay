import React from 'react'

export const Register = () => {
  return (
    <div>
        <form >
            <input type="text" placeholder='username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='password' />
            <input type="confirm_password" placeholder='confirm_password' />
            <button>Register</button>
        </form>
    </div>
  )
}
