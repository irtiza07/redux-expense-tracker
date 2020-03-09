import React from 'react'
import './TransactionItem.css'

export default function TransactionItem({ item }) {
  const itemType = (item.type === 'income')? 'item-income' : 'item-expense'
  const className = `item-outer ${itemType}`
  return (
    <div className={className}>
      <div>{item.name}</div>
      <div>${item.amount.toLocaleString()}.00</div>
    </div>
  ) 
}