import React from 'react'

const NewProduct = () => {
    return(
        <div className="page newProduct">
          <h1 className="title-page">New Product</h1>
          <form className="addProductrForm">
            <div className="newProductgroup">
            <div className="newProductItem">
                <label className=''>image</label>
                <input type="file" />
              </div>
              <div className="newProductItem">
                <label className=''>name</label>
                <input type="text" placeholder='name' />
              </div>
              <div className="newProductItem">
                <label className=''>stock</label>
                <input type="text" placeholder='stock' />
              </div>
              <div className="newProductItem">
                <label className=''>Active</label>
                <select name="" id="">
                  <option value="yes">yes</option>
                  <option value="yes">no</option>
                </select>
              </div>
             
            </div>
            <button >create</button>
          </form>
        </div>
      )
}

export default NewProduct