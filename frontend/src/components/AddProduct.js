import React from 'react'

export const AddProduct = () => {
  return (
    <div className='prod'>
        <form className='form-control product'>
        <h3 style={{textAlign:'center'}}>Add Product</h3>
            <input type="text" placeholder='Product name' className='form-control'/>
            <input type="text"  placeholder='Description' className='form-control'/>
            <input type="text" placeholder='Price' className='form-control'/>
            <input type="file"  placeholder='image' className='form-control'/>
            <button className='btn btn-primary block'>AddProduct</button>
        </form>
    </div>
  )
}
