import React, { useState } from 'react'
import style from './Register.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Slide, toast, Zoom } from 'react-toastify';
export default function Register() {
   const {register,handleSubmit,formState:{errors}}=useForm();
   const navigate=useNavigate();
   const [isLoading,setIsLoading]=useState(false);
   const [serverError,setServerError]=useState(null);
   const registerUser=async (value)=>{
    setIsLoading(true);
    //console.log(value);
    try {
      const response=await axios.post('https://ecommerce-node4.onrender.com/auth/signup',value);
    //console.log(response);
    if(response.status==201){  
      toast.success('please cheak your email', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        });
      navigate('/login');
    }
    } catch (error) {
      if(error.response.status ===409)
            setServerError(error.response.data.message);
      else{
        setServerError("error server");
      }
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
      <Form.Group className="mb-4" controlId="formBasicUser" >
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="user name" {...register("userName",{required:"userName is required"})}/>
        {errors.userName?<div className='text-danger mt-2'>{errors.userName.message}</div>:null}
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail " >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email",{required:"Email is required"})} />
        {errors.email?<div className='text-danger mt-2'>{errors.email.message}</div>:null}
      </Form.Group>
      
      <Form.Group className="mb-4" controlId="formBasicPassword" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("password",{required:"Password is required"})} />
        {errors.password?<div className='text-danger mt-2'>{errors.password.message}</div>:null}
      </Form.Group>
      <span className={`d-flex flex-row  ${style.sec} align-items-center justify-content-center fw-medium`}>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading?"Looding...":"Register"}
      </Button>
      <p className='ms-auto pt-3 '> Have an account?  <Link to={'/auth/login'}>Sign In</Link></p>
      </span>
     
    </Form>
      </div>
        
    </section>
    </>
  )
}
