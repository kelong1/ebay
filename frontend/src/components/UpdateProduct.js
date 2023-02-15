import React from 'react'

export const UpdateProduct = () => {
  return (
    <div>
         <form>
            <input type="text" placeholder='Product name'/>
            <input type="text"  placeholder='Description'/>
            <input type="text" placeholder='Price'/>
            <input type="file"  placeholder='image'/>
            <button>UpdateProduct</button>
        </form>
    </div>
  )
}
