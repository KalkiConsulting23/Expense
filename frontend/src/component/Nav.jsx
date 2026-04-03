'use client'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
const Nav = () => {
  const navigate=useNavigate();
  const pagehandler=()=>{
    navigate("/expense");
  }

  return (
    <div className='w-full h-1/10  flex items-center justify-between bg-amber-500 px-5'>
        <div className='h-full w-1/10 content-center'>
            Logo
        </div>
        <button onClick={()=>pagehandler()} className='w-30 h-1/2 border-2 rounded-2xl'>Add Expense</button>

    </div>
  )
}

export default Nav