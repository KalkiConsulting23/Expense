'use client'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
// import { set } from '../../../backend/app';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Payment from '../component/Payment';

const AddExpense = () => {
    const { register,handleSubmit,formState: { errors },} = useForm();
 const navigate=useNavigate();
 const [exp, setexp] = useState(true);
 const [pay, setpay] = useState(false);
//  const route=Router();
    const [recurr, setrecurr] = useState("");
    const formShow=(e)=>{
        e.preventDefault
        if(e=="exp"){
            setexp(true);
            setpay(false);
            console.log(e);
        }
        else{
            setexp(false);
            setpay(true);
            console.log(e);
        }
    }
    const onSubmit = async (data) => {
        data.preventDefault;
        console.log(data);
    await axios.post("http://localhost:5000/api/expense/create", data);
    alert("expense Added");
    navigate("/");
    // route.push("/");
  };
  



    return (
        <div className='w-full h-screen '>
         <div className='w-full h-25 bg-blue-100 flex gap-3 justify-between p-5 items-center'>
            <div>
                <button onClick={ ()=>formShow("exp") } className='w-30 h-15  rounded-2xl border-1'>Add Expense</button>
            <button onClick={()=>formShow("pay")} className='p-2 h-15  rounded-2xl border-1'>Add Project</button>
            </div>
            <button onClick={() => navigate("/")} className='border-2'>Home Page</button>
        </div>
        <div className='w-full h-7/10  flex items-center justify-center'>
            {exp && <div>
                <h1 className='text-2xl text-center'>Expense</h1>
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
                </div>}
         {pay && <Payment/>}
          
         {/* <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
           
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
         </form> */}

        </div>
         {/* <Payment/> */}
        </div>
    )
}

export default AddExpense