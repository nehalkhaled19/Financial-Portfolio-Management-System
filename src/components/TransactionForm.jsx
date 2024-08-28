import React, { useState } from 'react'
import style from './LoginForm.module.css';


export default function TransactionForm() {
  const [transactions, setTransactions] = useState([
    { id: 1, name: 'Bought 10 shares of Apple at $150 each' },
    { id: 2, name: 'Sold 5 shares of Tesla at $700 each' },
    { id: 3, name: 'Bought 20 shares of Microsoft at $250 each' },
    { id: 4, name: 'Sold 2 shares of Google at $1800 each' },
    { id: 5, name: 'Bought 15 shares of Amazon at $3200 each' }
  ])
  const [newPortfolioName, setNewPortfolioName] = useState('');

  // دالة لإضافة محفظة جديدة
  const addTransaction = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال

    if (newPortfolioName.trim() === '') {
      return; // التحقق من أن الاسم ليس فارغًا
    }

    const newPortfolio = {
      id: transactions.length + 1, // يعين ID جديد بناءً على طول القائمة
      name: newPortfolioName
    };

    setTransactions([...transactions, newPortfolio]); // إضافة المحفظة الجديدة إلى القائمة
    setNewPortfolioName(''); // إعادة تعيين حقل الإدخال بعد الإضافة
  };

  return (
    <div className={`${style.main} sm:h-lvh flex align-center `}>
    
       <form 
          onSubmit={addTransaction} // ربط دالة الإرسال مع النموذج
          className={`${style.forms} md:w-3/6 sm:w-5/6 w-full`}
          >
       <h2 className="text-2xl font-bold mb-4">Transaction Management Page</h2>

<div className='flex w-full align-middle mb-10 h-auto'>
          <input 
            type="text" 
            placeholder="New Transaction" 
            value={newPortfolioName}
            onChange={(e) => setNewPortfolioName(e.target.value)} // تحديث حالة الاسم عند التغيير
            className="text-black border focus:bottom-0 rounded p-0 w-3/4 mr-3 px-2"
          />
          <button 
            type="submit" 
            className="bg-blue-500 mt-5 w-1/4 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add 
          </button>
          </div><table className="text-black min-w-full bg-white shadow rounded-lg">
       
        <tbody>
          {transactions.map((e) => (
            <tr key={e.id}>
              <td className="py-2 px-4 border-b">{e.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </form>
   
      
    </div>
  )
}
