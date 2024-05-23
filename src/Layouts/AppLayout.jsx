import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

const AppLayout = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen '>
      <div className='p-1'><Header /></div>

      <main>
        <Outlet />
      </main>


    </div>
  )
}

export default AppLayout