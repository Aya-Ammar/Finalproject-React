import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomeNavbar from './../components/user/navbar/Navbar';
import Categories from '../pages/user/category/Categories';
export default function UserLayout() {
  return (
    <>
    <CustomeNavbar/>
    <Categories/>
    <Outlet/>
    </>
  )
}
