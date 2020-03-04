export const BALANCE_ACTIONS = {
  UPDATE_BALANCE: 'update_balance',
  ADD_EXPENSE: 'add_expense',
  ADD_INCOME: 'add_income'
}

export const updateBalanceAction = (updatedBalance) => {
  return {
    type: BALANCE_ACTIONS.UPDATE_BALANCE,
    payload: updatedBalance
  }
}

export const addExpenseAction = (newExpense) => {
  return {
    type: BALANCE_ACTIONS.ADD_EXPENSE,
    payload: newExpense
  }
}

export const addIncomeAction = (newIncome) => {
  return {
    type: BALANCE_ACTIONS.ADD_INCOME,
    payload: newIncome
  }
}