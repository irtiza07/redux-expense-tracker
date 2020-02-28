 //Can be used to create bigger selectors off smaller ones for caching purposes 
//import { createSelector } from 'reselect'

export const getTotalBalance = (state) => {
  return state.balance.totalBalance
}

