import React, { useState } from 'react'
import style from './Login.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
export default function Login() {
  const {register,handleSubmit,formState:{errors}}=useForm();
   const navigate=useNavigate();
   const [isLoading,setIsLoading]=useState(false);
   const [serverError,setServerError]=useState(null);
   const registerUser=async (value)=>{
    setIsLoading(true);
    //console.log(value);
    try {
      const response=await axios.post('https://ecommerce-node4.onrender.com/auth/signin',value);
     //console.log(response);
     if(response.status==200){
      localStorage.setItem("userToken",response.data.token);
      navigate('/');
     }
    
    } catch (error) {
      setServerError(error.response.data.message);
    }finally{
      setIsLoading(false);
    }
    
   }
  return (
    <>
    <section className={`${style.log } `}> 
      <div className={`${style.overlay} justify-content-center flex-column d-flex align-items-center`}>
      {serverError? <div className='text-danger text-capitalize bg-primary-subtle py-2 px-5'>{serverError}</div>:null}
      <Form onSubmit={handleSubmit(registerUser)}  className={`container-md ${style.loginf}  `}>
      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email",{required:"Email is required"})} />
        {errors.email?<div className='text-danger mt-2'>{errors.email.message}</div>:null}
      </Form.Group>
      
      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  {...register("password",{required:"Password is required"})}/>
        {errors.password?<div className='text-danger mt-2'>{errors.password.message}</div>:null}
      </Form.Group>
      <span className={`d-flex flex-row  ${style.sec} align-items-center justify-content-center fw-medium`}>
      <Button variant="primary" type="submit" disabled={isLoading}>
      {isLoading?"Looding...":"Login"}
      </Button>
      <p className='ms-auto pt-3 '>Dont't have an account?  <Link to={'/auth/register'}>Sign up</Link></p>
      </span>
     
    </Form>
      </div>
        
    </section>
    </>
  )
}
