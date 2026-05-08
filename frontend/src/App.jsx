"use client"
import React from 'react'
import Expense from '../src/component/Expense'
import Nav from './component/Nav'
import AddExpense from './Pages/AddExpense'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AddProjectPay from './Pages/AddProjectPay'

const App = () => {
  return (
    
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expense" element={<AddExpense />} />
      <Route path="/pay" element={<AddProjectPay />} />

     </Routes>
    
    
    
  )
}

export default App