import React from 'react'

export const AddProduct = () => {
  return (
    <div>
        <form className='form-control'>
          AddProduct
            <input type="text" placeholder='Product name' className='form-control'/>
            <input type="text"  placeholder='Description' className='form-control'/>
            <input type="text" placeholder='Price' className='form-control'/>
            <input type="file"  placeholder='image' className='form-control'/>
            <button className='btn btn-primary block'>AddProduct</button>
        </form>
    </div>
  )
}
