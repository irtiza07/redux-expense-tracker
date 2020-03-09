import React from 'react';
import './App.css';
import { BalanceContainer } from './components/BalanceContainer';
import { SummaryContainer } from './components/SummaryContainer';
import { AddTransactionFormContainer } from './components/AddTransactionFormContainer';
import { HistoryContainer} from './components/HistoryContainer';


function App() {
  return (
    <div className="App">
      <BalanceContainer></BalanceContainer>
      <SummaryContainer></SummaryContainer>
      <AddTransactionFormContainer></AddTransactionFormContainer>
      <HistoryContainer></HistoryContainer>
    </div>
  );
}

export default App;
