import React from 'react'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navibar from '../components/Navibar';

const MainLayout = () => {
  return (
    <>
        <Navibar/>
        <Outlet/>
        <ToastContainer/>
    </>
  )
}

export default MainLayout
