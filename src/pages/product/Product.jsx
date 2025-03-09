import React, { useState } from 'react'
import './Product.css'
import { Link, useParams } from 'react-router-dom'
import Chart from '../../components/Chart/Chart';
import { productsChartData, ProductsData } from '../../Datas';
import PublishIcon from '@mui/icons-material/Publish';
export default function Product() {
    const params=useParams();
    const [productsDatas,setProductsDatas]=useState(ProductsData);
    const mainProduct=productsDatas.find(product=>product.id==params.Id);
    console.log(mainProduct);
    
    
  return (
    <>
    <div className="product">
        <div className="productTitleContainer">
            <h1 className='productTitle'>Product</h1>
            <Link to='/newProduct'>
            <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart title='Sale In Month' data={productsChartData} dataKey='sales'/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={mainProduct.img} className='productInfoImg' alt="" />
                    <span className='productName'>{mainProduct.title}</span>
                </div>
                <div className='productInfoButtom'>
                    <div className="productInfoItem">
                        <div className='productInfoKey'>ID</div>
                        <div className='productInfoValue'>{mainProduct.id}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className='productInfoKey'>Name</div>
                        <div className='productInfoValue'>{mainProduct.title}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className='productInfoKey'>price</div>
                        <div className='productInfoValue'>${mainProduct.price}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className='productInfoKey'>Active</div>
                        <div className='productInfoValue'>yes</div>
                    </div>
                    <div className="productInfoItem">
                        <div className='productInfoKey'>In Stock</div>
                        <div className='productInfoValue'>yes</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='productButtom'>
            <form action="" className='productForm'>
                <div className='productFormLeft'>
                    <label htmlFor="">product Name</label>
                    <input type="text" placeholder={mainProduct.title} />
                   
                    <label htmlFor="inStock">In Stock</label>
                    <select name="" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <label htmlFor="Active">Active</label>
                    <select name="" id="Active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className='productFormRight'>
                    <div className="productUploader">
                        <img src="/images/1.jpeg"  className='productUploadImg' alt="image" />
                        <label><PublishIcon/></label>
                        <input type="file" style={{display:'none'}} />
                    </div>
                    <button className='productButton'>Upload(edit)</button>
                </div>
            </form>
        </div>
    </div>
    </>
)
}
