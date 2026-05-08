'use client'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
const Nav = () => {
  const navigate=useNavigate();
  

  return (
    <div className='w-full h-1/10  flex items-center justify-between bg-blue-100 px-5 overflow-hidden'>
        <div className='h-full w-1/10 content-center'>
            Logo
        </div>
        <div>
        <button onClick={() => navigate("/expense")} className='w-30 h-1/2 border-2 rounded-2xl'>Add Expense</button>
        <button onClick={() => navigate("/pay")} className='w-30 h-1/2 border-2 rounded-2xl'>Add Project Pay</button>

        </div>

    </div>
  )
}

export default Nav