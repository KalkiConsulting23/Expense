"use client"
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const Payment = () => {
  const navigate=useNavigate();
   const { register,handleSubmit,formState: { errors },} = useForm();
   const onSubmit = async (data) => {
        data.preventDefault;
        console.log(data);
    await axios.post("http://localhost:5000/api/payment/create", data);
    alert("expense Added");
    navigate("/");
    // route.push("/");
  };
  return (

    <div className='flex flex-col gap-3' >
       <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>

        <h1 className='text-2xl '>Project</h1>
        <label htmlFor="Name">Project Name</label>
        <input {...register("Payment_name")} className='border rounded-2xl' type="text" placeholder='Project' name="Payment_name"  />
        <label htmlFor="Strt Date"> Amount</label>
        <input {...register("Amount")} className='border rounded-2xl' type="Number" min={0} placeholder='Amount' name="Amount"  />
        <label htmlFor="Pay Type"> Pay Type</label>
         <select {...register("Pay_type")} onClick={(e)=>{}}>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monhtly</option>
                
            </select>
        <label htmlFor="Strt Date"> Start Date</label>
        <input {...register("strt_date")} className='border rounded-2xl' type="date" placeholder='Start Date' name="strt_date"  />
        <input type="submit" className='border' value={"Add Project"} />
       </form>

    </div>
  )
}

export default Payment;