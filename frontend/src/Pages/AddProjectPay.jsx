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
    const [selectedProject, setselectedProject] = useState({});
//  const route=Router();
    const [calcPay, setcalcPay] = useState(0)
    const payCalc=(pay)=>{
        var actDays=pay.target.value;
        if(selectedProject.Pay_type=="Daily"){
        setcalcPay(actDays*selectedProject.Amount);
        }else if(selectedProject.Pay_type=="Monthly"){
            var dayprice=selectedProject.Amount / document.querySelector(".workingday").value;
            setcalcPay(Math.round(dayprice*actDays));
        }
    }
   const  projectHandler=(data)=>{
    console.log(data.target.value);
    var filterPorject= Project.find((project)=>project.Payment_name==data.target.value)
    if(filterPorject){
    setselectedProject(filterPorject);

     }
    
    }
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
        <div className='w-full h-full flex'>

            <div className='w-2/10 h-full bg-red-100'>
                <select onChange={(e)=>projectHandler(e)}>
                <option value="">Select Project</option>
                {Project.map((data,id)=>(
                    <option id={id}value={data.Payment_name}>{data.Payment_name}</option>   
                ))}
                </select>
            </div>
            <div className='w-8/10 h-full bg-amber-200'>
                <div >
                    <form className='flex flex-col' >
                <h1>{selectedProject.Payment_name}</h1>
                <label htmlFor="">Payment Date</label>
                <input type="date" />
                <label htmlFor="">Calculate Pay</label>
                <div>
                <h1>Project Amount on {selectedProject.Pay_type} basis={selectedProject.Amount}</h1>
                    {selectedProject.Pay_type=="Daily"?<input className='border' onChange={(e)=>payCalc(e)} type="number" min={0} max={31} placeholder='Enter Days' />:selectedProject.Pay_type=="Monthly"?<><input className='border workingday' type="number" min={0} max={31}  placeholder='Enter working Days' />and<input className='border' type="number" min={0} max={31} onChange={(e)=>payCalc(e)} placeholder='Actual Days' /></>:null}
                    
                =<input className='border' value={calcPay} type="text" />
                    </div>
                </form>
                </div>
            </div>
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