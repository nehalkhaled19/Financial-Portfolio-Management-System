import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Portfolio from './components/Portfolio';
import TransactionForm from './components/TransactionForm';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/transactionForm' element={<TransactionForm />} />
      </Routes>
    </Router>
  );
}
