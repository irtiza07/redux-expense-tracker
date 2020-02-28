import { BALANCE_ACTIONS } from '../actions/balanceActions'

const initialState = {
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
      default:
        return state
  }
}