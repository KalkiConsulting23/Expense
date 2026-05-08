'use client'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import { set } from '../../../backend/app';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Payment from '../component/Payment';

const AddProjectPay = () => {
    // const { register,handleSubmit,formState: { errors },} = useForm();
 const navigate=useNavigate();

//  const route=Router();
   
    const [Project, setProject] = useState([]);
   
   useEffect( () => {
      
      
      async function fDATA(){
        await axios.post(`http://localhost:5000/api/payment/allproject`)
        .then(response => setProject(response.data));

      }
      fDATA();
      console.log(Project)
    // setTotal(monthTot)
    
    
    // var janDivs = document.querySelectorAll(`#Jan`);
    // monthTot["Jan"] =Array.from(janDivs).map((div) => {if(div.textContent=="-") return 0; else return Number(div.textContent)}).reduce((a, b) => a + b, 0);
   
    
  }, [])



    return (
        <div className='w-full h-screen '>
         <div className='w-full h-25 bg-blue-100 flex gap-3 justify-between p-5 items-center'>
           
            <button onClick={() => navigate("/")} className='border-2'>Home Page</button>
        </div>
        <div>
            
        </div>
        {/* <div className='w-full h-7/10  flex items-center justify-center'>
             <div>
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
                </div>
         
          
         

        </div> */}
         {/* <Payment/> */}
        </div>
    )
}

export default AddProjectPay