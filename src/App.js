import React from 'react';
import './App.css';
import { BalanceContainer } from './components/BalanceContainer';
import { SummaryContainer } from './components/SummaryContainer';

function App() {
  return (
    <div className="App">
      <BalanceContainer></BalanceContainer>
      <SummaryContainer></SummaryContainer>
    </div>
  );
}

export default App;
