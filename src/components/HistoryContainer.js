import { connect } from "react-redux";
import History from "./History";
import { getTransactions } from "../selectors/balanceSelector";

const mapStateToProps = state => {
  return {
    transactions : getTransactions(state),
  }
}

export const HistoryContainer = connect(
  mapStateToProps,
  null
)(History)