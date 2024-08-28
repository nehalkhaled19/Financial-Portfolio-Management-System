import React from 'react'
import style from './LoginForm.module.css';
import { Link } from 'react-router-dom';

export default function DashboardSummary() {
    const userName = localStorage.getItem('userName');

    

  return (
    <div className={`${style.ain} md:flex justify-between bg-gray-50 p-10`}>
        <div>
         <h1 className='text-4xl mb-5 font-semibold'>Welcome {userName}</h1>
         <p> Your total portfolio value is <span className='font-semibold'> $10,000</span> with a <span className='font-semibold'>5%</span>  increase this month.</p>
         </div>
         <div className='md:w-1/4'>
         <Link to='/transactionForm'>
         <button type="submit" className={`${style.btn} ` }>
         Transaction Management 
            </button></Link>
         </div>
    
    </div>
  )
}
