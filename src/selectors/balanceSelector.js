 //Can be used to create bigger selectors off smaller ones for caching purposes 
//import { createSelector } from 'reselect'

export const getTotalBalance = (state) => {
  return state.balance.totalIncome - state.balance.totalExpense 
}

export const getTotalExpense = (state) => {
  return state.balance.totalExpense
}

export const getTotalIncome = (state) => {
  return state.balance.totalIncome
}

export const getTransactions = (state) => {
  return state.balance.transactions
}