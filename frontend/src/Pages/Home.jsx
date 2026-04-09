import React from 'react'
import Expense from '../component/Expense'
import Nav from '../component/Nav'
import ExpenseTable from '../component/ExpenseTable'

const Home = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>
        <Nav/>
        <Expense />
        <ExpenseTable/>
        </div>
  )
}

export default Home