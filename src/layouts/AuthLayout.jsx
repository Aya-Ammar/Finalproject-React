import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomeNavbar from './../components/user/navbar/Navbar';

export default function AuthLayout() {
  return (
    <>
    <CustomeNavbar/>
    <Outlet/>
    </>
  )
}
