export const BALANCE_ACTIONS = {
  UPDATE_BALANCE: 'update_balance'
}

export const updateBalanceAction = (updatedBalance) => {
  return {
    type: BALANCE_ACTIONS.UPDATE_BALANCE,
    payload: updatedBalance
  }
}