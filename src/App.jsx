// App.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <>
    <ToastContainer/>
      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar + RHS Content */}
      <div className="flex">
        {/* Sidebar Left */}
        <Sidebar />

        {/* Right Side Content (Dynamic Routes render hoga yaha) */}
        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
