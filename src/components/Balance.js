import React from 'react';
import './Balance.css';

export default function Balance( { balance } ) {
  return (
    <div className="Balance">
      <h2> Your Balance </h2>
      <p>${balance.toLocaleString()}.00</p>
    </div>
  )
}