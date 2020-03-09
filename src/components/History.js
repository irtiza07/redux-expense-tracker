import React from 'react'
import TransactionItem from './TransactionItem'
import './History.css'

export default function History({ transactions }) {
  return (
    <div className="history-list">
      <h2>History</h2>
      {
        transactions.map(item => {
          return <TransactionItem item={item}></TransactionItem>
        })
      }
    </div>
  )
}
