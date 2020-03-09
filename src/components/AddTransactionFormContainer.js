import { connect } from "react-redux";
import AddTransactionForm from "./AddTransactionForm";
import { addTransactionAction } from "../actions/balanceActions";

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addTransaction : transaction => dispatch(addTransactionAction(transaction)),
  }
}

export const AddTransactionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTransactionForm) 