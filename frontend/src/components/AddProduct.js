import React from 'react'

export const AddProduct = () => {
  return (
    <div>
        <form>
            <input type="text" placeholder='Product name'/>
            <input type="text"  placeholder='Description'/>
            <input type="text" placeholder='Price'/>
            <input type="file"  placeholder='image'/>
            <button>AddProduct</button>
        </form>
    </div>
  )
}
