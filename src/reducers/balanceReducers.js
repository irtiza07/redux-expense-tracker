import { BALANCE_ACTIONS } from '../actions/balanceActions'

const initialState = {
  expenses : [
    {
      'name': 'milk',
      'amount': 20
    },
    {
      'name': 'boba',
      'amount': 10
    }
  ],
  incomes : [
    {
      'name': 'blog',
      'amount': 500
    },
    {
      'name': 'work',
      'amount': 3000
    }
  ],
  totalExpense: 30,
  totalIncome: 3500,
  totalBalance : 100
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
    case BALANCE_ACTIONS.UPDATE_BALANCE:
      return {
        result: action.payload //Do something with the payload
      }
    case BALANCE_ACTIONS.ADD_EXPENSE:
      const newExpenses = state.expenses.slice();
      return Object.assign({}, state, {
        expenses: newExpenses.unshift(action.payload),
        totalExpense: state.totalExpense + action.payload.amount
      })
    case BALANCE_ACTIONS.ADD_INCOME:
      const newIncomes = state.expenses.slice();
      return Object.assign({}, state, {
        incomes: newIncomes.unshift(action.payload),
        totalIncome: state.totalIncome + action.payload.amount
      })
    default:
      return state
  }
}