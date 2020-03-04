import { connect } from "react-redux";
import Summary from "./Summary";
import { getTotalExpense, getTotalIncome } from "../selectors/balanceSelector";

const mapStateToProps = state => {
  return {
    totalIncome : getTotalIncome(state),
    totalExpense : getTotalExpense(state)
  }
}

export const SummaryContainer = connect(
  mapStateToProps,
  null
)(Summary)