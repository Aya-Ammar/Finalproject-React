import React from 'react'
import CustomeNavbar from './components/user/navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import DashboradLayout from './layouts/DashboradLayout';
import Register from './pages/user/register/Register';
import Login from './pages/user/login/Login';
import Home from './pages/user/home/Home';
import Shop from './pages/user/shop/Shop';
import { ToastContainer } from 'react-toastify';
import UserLayout from './layouts/UserLayout';
import CategoryProducts from './pages/user/products/CategoryProducts';

export default function App() {
  const router=createBrowserRouter(
    [
      {
        path:'/auth',
        element:<AuthLayout/>,
        children:[{
              path:'register',
              element:<Register/>
        },
        {
          path:'login',
          element:<Login/>
        },
       
      
      ]
  
      },
      {
          path:'/',
          element:<UserLayout/>,
          children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'shop',
        element:<Shop/>
      },
      {
        path:'categories/:categoryId',
        element:<CategoryProducts/>
      }
    
    ]

      },
      {
        path:'/dashboard',
        element:<DashboradLayout/>
      }
    ]
  
  )
  return (
   <>
    <ToastContainer />
    <RouterProvider router={router}/>
    
   </>
  )
}
