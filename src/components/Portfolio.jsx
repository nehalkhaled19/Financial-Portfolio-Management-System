import React, { useState } from 'react';
import DashboardSummary from './DashboardSummary';
import PortfolioList from './PortfolioList';
import style from './LoginForm.module.css';

export default function Portfolio() {
  // استخدام useState لإدارة المحافظ
  const [portfolios, setPortfolios] = useState([
    { id: 1, name: 'Retirement Fund' },
    { id: 2, name: 'Education Fund' },
    { id: 3, name: 'Emergency Fund' }
  ]);

  // استخدام useState لإدارة اسم المحفظة الجديدة
  const [newPortfolioName, setNewPortfolioName] = useState('');

  // دالة لإضافة محفظة جديدة
  const addPortfolio = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال

    if (newPortfolioName.trim() === '') {
      return; // التحقق من أن الاسم ليس فارغًا
    }

    const newPortfolio = {
      id: portfolios.length + 1, // يعين ID جديد بناءً على طول القائمة
      name: newPortfolioName
    };

    setPortfolios([...portfolios, newPortfolio]); // إضافة المحفظة الجديدة إلى القائمة
    setNewPortfolioName(''); // إعادة تعيين حقل الإدخال بعد الإضافة
  };
// 2. دالة لتحرير محفظة
const editPortfolio = (id) => {
    const portfolioIndex = portfolios.findIndex((portfolio) => portfolio.id === id);
    const newPortfolioName = prompt('Enter the new name for the portfolio:', portfolios[portfolioIndex].name);
    if (newPortfolioName) {
      const updatedPortfolios = [...portfolios];
      updatedPortfolios[portfolioIndex].name = newPortfolioName;
      setPortfolios(updatedPortfolios);
    }
  };

  // 3. دالة لحذف محفظة
  const deletePortfolio = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this portfolio?');
    if (confirmDelete) {
      const updatedPortfolios = portfolios.filter((portfolio) => portfolio.id !== id);
      setPortfolios(updatedPortfolios);
    }
  };
  return (
    <div>
      <DashboardSummary />

      <div className={`${style.main} md:pb-32 text-white px-10 pt-10`}>
        <h2 className="text-center text-2xl font-bold">Portfolio Management</h2>
        <form 
          onSubmit={addPortfolio} // ربط دالة الإرسال مع النموذج
          className="text-center bg-gray-50 mt-8 shadow-lg rounded  m-auto pb-5 px-0 md:w-2/4 w-full"
        >
          <input 
            type="text" 
            placeholder="New Portfolio" 
            value={newPortfolioName}
            onChange={(e) => setNewPortfolioName(e.target.value)} // تحديث حالة الاسم عند التغيير
            className="text-black border focus:bottom-0 rounded  mb-1 w-3/4 mr-3 px-2 py-1"
          />
          <button 
            type="submit" 
            className="bg-blue-500 mt-5 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Portfolio
          </button>
        </form>
      <PortfolioList portfolios={portfolios}      onEdit={editPortfolio} 
        onDelete={deletePortfolio}  />
      </div>

    </div>
  );
}
