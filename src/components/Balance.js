import React from 'react';
import './Balance.css';

export default function Balance( { balance } ) {
  return (
    <React.Fragment>
      <h2> Your Balance </h2>
      <h3>${balance.toString()}</h3>
    </React.Fragment>
  )
}