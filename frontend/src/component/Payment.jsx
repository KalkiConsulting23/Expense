"use client"
import React from 'react'

const Payment = () => {
  return (
    <div className='w-50 h-50 flex flex-col gap-3' >
        <h1 className='text-2xl '>Project</h1>
        <label htmlFor="Name">Project Name</label>
        <input className='border rounded-2xl' type="text" placeholder='Project' name="Project Name"  />
        <label htmlFor="Strt Date"> Amount</label>
        <input className='border rounded-2xl' type="text" placeholder='Amount' name="Project Name"  />
        <label htmlFor="Strt Date"> Pay Type</label>
         <select  onClick={(e)=>{}}>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monhtly</option>
                
            </select>
        <label htmlFor="Strt Date"> Start Date</label>
        <input className='border rounded-2xl' type="date" placeholder='Start Date' name="Project Name"  />
        <input type="submit" className='border' value={"Add Project"} />

    </div>
  )
}

export default Payment;