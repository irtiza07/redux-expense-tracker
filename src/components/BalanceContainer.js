import { connect } from "react-redux";
import Balance from "./Balance";
import { getTotalBalance } from "../selectors/balanceSelector";

const mapStateToProps = state => {
  return {
    balance : getTotalBalance(state)
  }
}

export const BalanceContainer = connect(
  mapStateToProps,
  null
)(Balance)