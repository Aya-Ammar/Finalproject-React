import React from 'react'
import style from './Home.module.css'
import Categories from '../category/Categories'
import useFetch from './../../../hooks/useFetch';
import Loding from './../../../components/user/loding/Loding';
import CustomProduct from './../../shared/CustomProduct';
export default function Home() {
  const {data,error,isLoading}=useFetch(`https://ecommerce-node4.onrender.com/products?limit=3`);
      console.log(data);
     
      if(isLoading){
        return <Loding/>
      }
  return (
    
    <>
    <Categories/>
    <section className={`${style.home}`}>

    </section>
    <section className={`container align-items-center text-center`}>
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
