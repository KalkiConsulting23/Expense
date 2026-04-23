import React from 'react'

const Expense = () => {
  return (
    <div className='w-full h-3/10 bg-amber-400 overflow-hidden'>
        <h1 className='text-blue-700 text-2xl font-bold'>Dashboard</h1>
        <div className='cards w-full h-9/10 flex gap-3 mt-5'>
            <div className="card w-2/10 h-2/8 border-1 rounded-2xl">
                <h1 className=' text-2xl font-bold text-center'>Total Expense</h1>
                <h3 className='text-center'>Value</h3>
            </div>
            <div className="card w-2/10 h-2/8 border-1 rounded-2xl">
                <h1 className=' text-2xl font-bold text-center'>Total Income</h1>
                <h3 className='text-center'>Value</h3>
            </div>
            <div className="card w-2/10 h-2/8 border-1 rounded-2xl">
                <h1 className=' text-2xl font-bold text-center'>Total Savings</h1>
                <h3 className='text-center'>Value</h3>
            </div>
            <div className="card w-2/10 h-2/8  border-1 rounded-2xl">
                <h1 className=' text-2xl font-bold text-center'>Other Expense</h1>
                <h3 className='text-center'>Value</h3>
            </div>
        </div>
    </div>
  )
}

export default Expense