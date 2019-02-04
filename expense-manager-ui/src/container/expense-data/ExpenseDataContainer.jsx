import React, { Component } from "react";
import "./expense-data.css";
import { connect } from "react-redux";
import { addExpense } from "../../actions/expense.action";
import {formatDateToDisplay} from "../../utils/DateUtil";

class ExpenseDataContainer extends Component {
  // constructor(props){
  //   super(props);
  // }

  formatResult(res) {
   return res.map(row => {
      row.date = formatDateToDisplay(row.date);
      return row;
    });
  }

  componentDidMount() {
    console.log("Component mount done");
    fetch("/expenseManagerService/api/expenses")
      .then(res => res.json())
      .then(res => this.props.addNewExpense(this.formatResult(res)));
  }

  render() {
    return (
      <div className="expense-data-container">
        <table className="expense-data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Payment Mode</th>
              <th>Items</th>
              <th>Total</th>
              <th>Remarks</th>
              <th>Verified</th>
            </tr>
          </thead>
          <tbody>
            {this.props.expensesData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.date}</td>
                <td>{row.paymentMode}</td>
                <td>{row.items}</td>
                <td>{row.total}</td>
                <td>{row.remarks}</td>
                <td>{row.verified ? 'YES' : 'NO'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expensesData: state.expenses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewExpense: expenseData => {
      dispatch(addExpense(expenseData));
    }
  };
};

const connectedExpenseDataContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseDataContainer);

export default connectedExpenseDataContainer;
