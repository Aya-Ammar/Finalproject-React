import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './../../../hooks/useFetch';
import Loding from './../../../components/user/loding/Loding';
import style from './ProductDetails.module.css'
import  {  useState, useEffect } from 'react'
export default function ProductDetails() {
  const {productId}=useParams();
  const [mainImag, setMainImag] = useState(null); 
  console.log(productId);
  const {data,error,isLoading}=useFetch(`https://ecommerce-node4.onrender.com/products/${productId}`);
      console.log(data.product?.mainImage.secure_url);  
  useEffect(() => {
        if (data?.product?.mainImage?.secure_url) {
          setMainImag(data.product.mainImage.secure_url);
        }
      }, [data]);
  const changeMainImage = (image) => {
    setMainImag(image);
  };

          if(isLoading){
            return <Loding/>
          }
  return (
    <>
      {error?<div className='alert alert-danger mt-5'>{error}</div>:''}
      <section className='container d-flex flex-row justify-content-center align-items-center text-center gap-5 mt-5'>
      <div className='d-flex flex-row justify-content-center align-items-center w-75 mt-5 '>
         <div className={`d-flex flex-column justify-content-center align-items-center gap-4 w-25 `}>
              <img src={data?.product?.mainImage?.secure_url} className={`w-75 border rounded-3 p-3 ${style.subimg} ${mainImag === data?.product?.mainImage?.secure_url ? 'selected' : ''}`}
              onClick={() => changeMainImage(data?.product?.mainImage?.secure_url)}/>
              {data?.product?.subImages.map(img=>(
                  <div   key={data?.product?.public_id}
                  className={` ${mainImag === img.secure_url ? 'selected' : ''}`}
                  onClick={() => changeMainImage(img.secure_url)}>
                      <img src={img.secure_url} alt="subimages" className={`w-75 border rounded-3 p-3 ${style.subimg}`} />
                  </div>
                
              ))}
              
          </div>  
         <div className='w-100' >
         <img src={mainImag} alt="mainImage" className={`w-75 m-5 rounded-2 border p-3 shadow`} />
         </div> 
      </div>
      <div className= {`  text-start mt-5 w-50 `}>
              <h2>{data?.product?.name}</h2>
              <p className={`${style.details} my-4`}><span>Price: </span> {data?.product?.price}$</p>
              <p  className={`${style.details}`}><span >Discount: </span> {data?.product?.discount}%</p>
              <p>{data?.product?.description}</p>

            <div className='mt-4 d-flex flex-row  align-items-center '>
            <button type="button" class="btn btn-primary">Add Cart</button>
            {data?.product?.stock>0 ? '' : <span class="alert alert-danger m-5 py-2 px-3">Sold out</span>}
            </div>
      </div>
      
          
      </section>
    </>
  )
}
