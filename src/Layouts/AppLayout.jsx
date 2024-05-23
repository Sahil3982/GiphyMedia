import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      {/* Header */}

      <main>
        <Outlet />
      </main>


    </div>
  )
}

export default AppLayout