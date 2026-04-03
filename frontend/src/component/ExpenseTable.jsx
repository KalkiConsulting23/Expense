"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
const getMonthsBetween = (start, end) => {
  const months = [];
  let current = new Date(start);

  while (current <= new Date(end)) {
    months.push(
      current.toLocaleString("default", {
        month: "short",
        year: "2-digit",
      })
    );
    current.setMonth(current.getMonth() + 1);
  }

  return months;
};
const ExpenseTable = () => {
    const [expenses, setexpenses] = useState([]);
    
    useEffect(async() => {
        
        await axios.post(`http://localhost:5000/api/expense/allexpense`)
        .then(response =>  setexpenses(response.data));
        
    }
    
    
    , [])
    // console.log(expenses)
  return (
    <div className='w-full h-6/10 '>
        {expenses.map((data,id)=>(
            <div>

            <h1 id={id}>{data.Expense_name}</h1>
            <h1 id={id}>{data.amount}</h1>
            <h1 id={id}>{data.endDate}</h1>
            </div>
        ))}
    </div>
  )
}

export default ExpenseTable