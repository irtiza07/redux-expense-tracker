import React from 'react';
import './App.css';
import { BalanceContainer } from './components/BalanceContainer';
import { SummaryContainer } from './components/SummaryContainer';
import AddTransactionForm from './components/AddTransactionForm';

function App() {
  return (
    <div className="App">
      <BalanceContainer></BalanceContainer>
      <SummaryContainer></SummaryContainer>
      <AddTransactionForm></AddTransactionForm>
    </div>
  );
}

export default App;
