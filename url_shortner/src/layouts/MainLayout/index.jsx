import React from 'react'
import Navbar from '../../components/navbar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
