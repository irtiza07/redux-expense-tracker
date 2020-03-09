import { BALANCE_ACTIONS } from '../actions/balanceActions'

const initialState = {
  transactions : [],
  totalExpense: 0,
  totalIncome: 0,
}
/**
 * Things never to do in a reducer:
 * 1. Mutate the arguments
 * 2. Perform side effects like API calls and routing transitions
 * 3. Call non-pure functions like Date.now() or Math.random()
 * 4. Should be kept entirely pure
 */
export const balance = (state = initialState, action) => {
  switch (action.type) {
    case BALANCE_ACTIONS.ADD_TRANSACTION:
      const newTransactions = state.transactions.slice();
      newTransactions.unshift(action.payload)
      
      if (action.payload.type === 'income') {
        return Object.assign({}, state, {
          transactions: newTransactions,
          totalIncome: state.totalIncome + Number(action.payload.amount),
        })
      } else {
        return Object.assign({}, state, {
          transactions: newTransactions,
          totalExpense: state.totalExpense + Number(action.payload.amount),
        })
      }
    default:
      return state
  }
}