import React from 'react'

export const UpdateProduct = () => {
  return (
    <div>
         <form>
          UpdateForm
            <input type="text" placeholder='Product name' className='form-control'/>
            <input type="text"  placeholder='Description' className='form-control'/>
            <input type="text" placeholder='Price' className='form-control'/>
            <input type="file"  placeholder='image' className='form-control'/>
            <button className='btn btn-primary'>UpdateProduct</button>
        </form>
    </div>
  )
}
