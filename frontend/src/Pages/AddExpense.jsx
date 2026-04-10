'use client'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
// import { set } from '../../../backend/app';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddExpense = () => {
    const { register,handleSubmit,formState: { errors },} = useForm();
 const navigate=useNavigate();
//  const route=Router();
    const [recurr, setrecurr] = useState("")
    const onSubmit = async (data) => {
        data.preventDefault;
        console.log(data);
    await axios.post("http://localhost:5000/api/expense/create", data);
    alert("expense Added");
    navigate("/");
    // route.push("/");
  };
  



    return (
        <div className='w-full h-screen flex justify-center  items-center'>
         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
           
            <input type="text" {...register("Expense_name")} placeholder='Expense Name' className='border-2'/>
            <input id='num'  type="Number" min={0}  minLength={1}{...register("amount")}placeholder='Amount' className='border-2 '/>
           <label htmlFor="startDate">Start Date</label>
            <input  type="date" {...register("startDate")}/>
           <label htmlFor="Enddate">End Date</label>
            <input type="date" {...register("endDate")}/>
            <select {...register("recurring")}  onClick={(e)=>{e.preventDefault; setrecurr(e.target.value)}}>
                <option value="One_Time">One Time</option>
                <option value="Recurring">Recurring</option>
            </select>
            <input type="submit" className='border-2' placeholder='add expense' value={'add expense'}/>
         </form>
        </div>
    )
}

export default AddExpense