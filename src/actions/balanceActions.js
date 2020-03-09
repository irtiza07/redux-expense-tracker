export const BALANCE_ACTIONS = {
  ADD_TRANSACTION: 'add_transaction',
}

export const addTransactionAction = (newTransaction) => {
  return {
    type: BALANCE_ACTIONS.ADD_TRANSACTION,
    payload: newTransaction
  }
}