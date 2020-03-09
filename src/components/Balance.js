import React from 'react';

export default function Balance( { balance } ) {
  return (
    <div className="Balance">
      <h1> Your Balance </h1>
      <h2>${balance.toLocaleString()}.00</h2>
    </div>
  )
}