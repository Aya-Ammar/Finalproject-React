import React from 'react'
import useFetch from './../../../hooks/useFetch';
import Loding from './../../../components/user/loding/Loding';
import style from './Categories.module.css';
import { Link } from 'react-router-dom';
export default function Categories() {
  const {data,error,isLoading}=useFetch(`https://ecommerce-node4.onrender.com/categories/active`);
  console.log(data);
 
  if(isLoading){
    return <Loding/>
  }
  return (
    <>
    <section className=' container  align-items-center py-5'>
        <h2 className='text-center my-5 '><span className='border-bottom py-2 border-warning border-4 '>Categories</span></h2>
        <div className='d-flex flex-row justify-content-center align-items-center  p-5 text-center'>
        {error?<div className='alert alert-danger'>{error}</div>:''}
        {data?.categories?.map((catog)=>(
                          <div key={catog._id}>
                          <Link to={`/categories/${catog._id}`}>
                          <div >
                             <img src={catog.image.secure_url} className={`${style.cato} `} />
                          </div>
                          </Link>
                          </div>
                          
                          ))} 
                          
        </div>

    </section>
    </>
  )
}
