"use client"
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useRef } from 'react';


// const getMonthsBetween = (start, end) => {
//   const months = [];
//   let current = new Date(start);

//   while (current <= new Date(end)) {
//     months.push(
//       current.toLocaleString("default", {
//         month: "short",
//         year: "2-digit",
//       })
//     );
//     current.setMonth(current.getMonth() + 1);
//   }

//   return months;
// };
const handlePaid=(expid,currAmount,data,month)=>{
  fetch(`http://localhost:5000/api/expense/update/${expid}`,{ method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          currAmount: currAmount,
          paid: data,
          month: month
        })}).then(res=>res.json()).then(data=>console.log(data));
  // console.log(expid,data,month);
  window.location.reload();
}
const ExpenseTable = () => {
//   const janDivs = document.querySelectorAll("#Feb");

// const janValues = Array.from(janDivs).map((div) => Number(div.textContent || 0));

// console.log(janValues);

// const janDivs = document.querySelectorAll("#Jan");
// monthTotalss["Jan"] = Array.from([document.querySelectorAll("#Jan")]).map((div) => Number(div.textContent || 0)).reduce((a, b) => a + b, 0);

// console.log(monthTotalss);
  
  const tabMonth = [{ month: "Jan", monthNum: "01" }, { month: "Feb", monthNum: "02" }, { month: "Mar", monthNum: "03" }, { month: "Apr", monthNum: "04" }, { month: "May", monthNum: "05" }, { month: "Jun", monthNum: "06" }, { month: "Jul", monthNum: "07" }, { month: "Aug", monthNum: "08" }, { month: "Sep", monthNum: "09" }, { month: "Oct", monthNum: "10" }, { month: "Nov", monthNum: "11" }, { month: "Dec", monthNum: "12" }];
  const [Total, setTotal] = useState([])
   const monthTot={}
    tabMonth.forEach((data) => {
      const janDivs = document.querySelectorAll(`[data-month=${data.month}]`);
      const ndata=Array.from(janDivs).map((div) => {if(div.textContent=="-") return 0; else return Number(div.textContent)})
        monthTot[data.month] =Array.from(janDivs).map((div) => {if(div.textContent=="-") return 0; else return Number(div.textContent)}).reduce((a, b) => a + b, 0);
    });
    // setTotal(monthTot);
  const [expenses, setexpenses] = useState([]);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const [Flag, setFlag] = useState(false);
  const filterdata=expenses.filter((data) => 
    data.startDate.split("-")[0] <= currentYear );
    // console.log(filterdata);
    useEffect( () => {
      
      
      async function fDATA(){
        await axios.post(`http://localhost:5000/api/expense/allexpense`)
        .then(response => setexpenses(response.data));
      }
   
    // setTotal(monthTot)
    fDATA();
    console.log(Total);
    
    // var janDivs = document.querySelectorAll(`#Jan`);
    // monthTot["Jan"] =Array.from(janDivs).map((div) => {if(div.textContent=="-") return 0; else return Number(div.textContent)}).reduce((a, b) => a + b, 0);
   
    
  }
    


    , [])
   
   
  // console.log(expenses)
  return (
    <div className='w-full h-6/10 overflow-hidden'>
      <button onClick={() => Flag ? setFlag(false) : setFlag(true)}>Show Total</button>
      <div className='flex w-full px-2'>
        <div id="rex" className='w-20'>
          Expnase name
        </div>
        {tabMonth.map((tdata, id) => (
          <div  className='flex'>

            <div id={id} className='border-2 border-black w-19 '>
              {tdata.month}
            </div>
            <div id={id} className='border-2 border-black w-18'>
              Paid
            </div>

          </div>
        ))}
      </div>
       {filterdata.map((expdata, id) => (
          
      <div className='flex w-full px-2'>
         
        {expdata.endDate.split("-")[0] > currentYear ? 
        <div className='flex'>
          <div className='w-20'>
        
          {expdata.Expense_name}
        </div>
        {tabMonth.map((tdata, id) => (
           <div className='flex'>
            
            <div data-month={tdata.month} id={tdata.month}  className='amount border-2 border-black w-19'>
              {  expdata.startDate.split("-")[1]<=tdata.monthNum  ? expdata.amount  : "-"}
            </div>
            <div className='border-2 border-black w-18'>
            <input id={`P${tdata.month}`} className='paid' type="text" value={expdata.payments.find((d)=>d.month==tdata.monthNum+`-${currentYear}`)?.paid}  onKeyDown={(e) => {
    if (e.key === "Enter") {
       const currAmount=document.querySelector(`#${tdata.month}`).innerText;
   
      handlePaid(expdata._id,currAmount,e.target.value,tdata.monthNum<=9? `${tdata.monthNum}-${currentYear}`:`${tdata.monthNum}-${currentYear}`);
    }
  }}/>
            </div>
            
          </div>
        ))}</div>:expdata.startDate.split("-")[0] == currentYear && expdata.endDate.split("-")[0] == currentYear ?
        <div className='flex'>
          <div className='w-20'>
        
          {expdata.Expense_name}
        </div>
           {tabMonth.map((tdata, id) => (
          <div className='flex'>
            
            <div data-month={tdata.month} id={tdata.month}  className='amount border-2 border-black w-19'>
              {expdata.startDate.split("-")[1]<=tdata.monthNum && expdata.endDate.split("-")[1]>=tdata.monthNum ?  expdata.payments.find((d)=>d.month==`0${Number(tdata.monthNum)-1}`+`-${currentYear}`)?.remain ? expdata.payments.find((d)=>d.month==`0${Number(tdata.monthNum)-1}`+`-${currentYear}`)?.remain + expdata.amount : expdata.amount  : "-"}
            </div>
            <div className='border-2 border-black w-18'>
             <input id={`P${tdata.month}`} type="text" className='paid' value={expdata.payments.find((d)=>d.month==tdata.monthNum+`-${currentYear}`)?.paid}  onKeyDown={(e) => {
    if (e.key === "Enter") {
         const currAmount=document.querySelector(`#${tdata.month}`).innerText;
      
     handlePaid(expdata._id,currAmount,e.target.value,tdata.monthNum<=9? `${tdata.monthNum}-${currentYear}`:`${tdata.monthNum}-${currentYear}`);
    }
  }}/>
           
            </div>
            
          </div>
        ))}</div>:expdata.startDate.split("-")[0] < currentYear && expdata.endDate.split("-")[0] >=currentYear? 
        <div className='flex'> 
        <div className='w-20'>
        
          {expdata.Expense_name}
        </div>
        {tabMonth.map((tdata, id) => (
           <div className='flex'>
            
            <div id={tdata.month} data-month={tdata.month} className='amount border-2 border-black w-19'>
              {expdata.endDate.split("-")[1]>=tdata.monthNum  ? expdata.amount  : "-"}
            </div>
            <div className='border-2 border-black w-18'>
             <input id={`P${tdata.month}`} className='paid' type="text" value={expdata.payments.find((d)=>d.month==tdata.monthNum+`-${currentYear}`)?.paid}  onKeyDown={(e) => {
    if (e.key === "Enter") {
      const currAmount=document.querySelector(`#${tdata.month}`).innerText;
     
      handlePaid(expdata._id,currAmount,e.target.value,tdata.monthNum<=9? `${tdata.monthNum}-${currentYear}`:`${tdata.monthNum}-${currentYear}`);
    }
  }}/>
            </div>
            
          </div>
        ))}</div>:""}
                                                                                   {/* v2 */}
       {/* {expdata.endDate.split("-")[0]>=currentYear ? expdata.startDate.split("-")[0] < currentYear ? tabMonth.map((tdata, id) => (
          <div className='flex'>
            
            <div id={id} className='border-2 border-black w-19'>
              {expdata.amount}
            </div>
            <div className='border-2 border-black w-18'>
             <input type="text"/>
            </div>
            
          </div>
        )): expdata.startDate.split("-")[0]==currentYear ? tabMonth.map((tdata, id) => (
          <div className='flex'>
            
            <div  className='border-2 border-black w-19'>
              
              {expdata.startDate.split("-")[1]<=tdata.monthNum ? expdata.amount  : expdata.endDate.split("-")[1]==tdata.monthNum ? 0 : 0}
            </div>
            <div className='border-2 border-black w-18'>
             <input type="text"/>
            </div>
            
          </div>
        )): "yes": "no"} */}
       
        {/* {tabMonth.map((tdata, id) => (
          <div className='flex'>
            
            <div className='border-2 border-black w-19'>
              {expdata.amount}
            </div>
            <div className='border-2 border-black w-18'>
             <input type="text"/>
            </div>
            
          </div>
        ))} */}
        
        
      </div>
        ))}
        <div className="flex">

         <div className="w-22 text-center">Total</div>
        {tabMonth.map((tdata,id)=>(
          <div className="flex">
            <div className="border-2 border-black w-19">
              {Flag ? monthTot[`${tdata.month}`]:0}
            </div>
            <div className="border-2 border-black w-18">
              0
          </div>
          </div>
        ))}
         </div>
    </div>
  )
}

export default ExpenseTable