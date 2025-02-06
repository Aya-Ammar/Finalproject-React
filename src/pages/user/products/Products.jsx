import React from 'react'
import useFetch from './../../../hooks/useFetch';
import Loding from './../../../components/user/loding/Loding';
import style from './Products.module.css'
import CustomProduct from '../../shared/CustomProduct';
export default function Products() {
  const {data,error,isLoading}=useFetch(`https://ecommerce-node4.onrender.com/products?limit=10`);
    console.log(data);
   
    if(isLoading){
      return <Loding/>
    }
  return (
    <>
    <section className={`container align-items-center  ${style.sec}`}>
    <h2 className='text-center my-5 '><span className='border-bottom py-2 border-warning border-4 '>Products</span></h2>
      <div className=' d-flex flex-row justify-content-center align-items-center  px-5 text-center flex-wrap  gap-4'> 
        {error?<div className='alert alert-danger'>{error}</div>:''}
        {data?.products?.map(product=>(
          <CustomProduct key={product._id} Id={product._id} secure_url={product.mainImage.secure_url} name={product.name} price={product.price} />
         
        ))
        }
      
      </div>
    </section>
    </>
  )
}

