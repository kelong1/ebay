import React from 'react'

export const Search = () => {
  return (
    <div>
        <form>
            <input type="text" placeholder='Enter your Search'  className='form-control'/>
            <button className='btn btn-primary'>Search</button>
        </form>
    </div>
  )
}
