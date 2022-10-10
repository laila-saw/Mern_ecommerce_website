import React from 'react'
import {Link} from 'react-router-dom'
import Chart from '../components/Chart';
import {Publish} from '@material-ui/icons'
import { ProductData } from '../Data';
const Product = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <div className="product page">
        <div className="productTitleContainer">
        <h1 className="productTitle">product</h1>
        <Link to='/newproduct'>
          <button className="productAddBtn">create</button>
        </Link>
        </div>
        <div className="productTop">
          <div className="productLeft">
            <Chart data={ProductData} dataKey={"Sales"} title="sales performance"  />
          </div>
          <div className="productRight">
            <div className="productInfoTop">
              <img src={PF+"watcheW2.png"} alt="" className="productImg" />
              <span className="productName">watch</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id : </span>
                <span className="productInfoValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales : </span>
                <span className="productInfoValue">5123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">active : </span>
                <span className="productInfoValue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock : </span>
                <span className="productInfoValue">No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" value="watch" />
              <label > in stock</label>
              <select name="inSock" id="idStock">
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
              <label >active</label>
              <select name="active" id="active">
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src={PF + "watcheW2.png"} alt="" className="productUploadImg" />
                <input type="file" name="" id="file" hidden/>
                <label htmlFor="file">
                  <Publish className='publishIcon'/>
                </label>
              </div>
              <button className="productBtn">update</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Product