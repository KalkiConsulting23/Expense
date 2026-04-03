import React from 'react'
import Expense from '../component/Expense'
import Nav from '../component/Nav'
import ExpenseTable from '../component/ExpenseTable'

const Home = () => {
  return (
    <div className='w-screen h-screen'>
        <Nav/>
        <Expense />
        <ExpenseTable/>
        </div>
  )
}

export default Home