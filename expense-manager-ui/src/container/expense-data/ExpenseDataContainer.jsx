import React, { Component } from "react";
import "./expense-data.css";
import { connect } from "react-redux";
import { addExpense } from "../../actions/expense.action";
import { formatDateToDisplay } from "../../utils/DateUtil";
import callApi from "../../service/api";
import RequestMethod from "../../constants/requestMethod";
import RequestUrls from "../../constants/requestUrls";

class ExpenseDataContainer extends Component {
  componentDidMount() {
    callApi(
      RequestUrls.expenseData,
      null,
      RequestMethod.GET
    ).then(res => {
      this.props.addNewExpense(res.data);
    });
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
                <td>{formatDateToDisplay(row.date)}</td>
                <td>{row.paymentMode}</td>
                <td>{row.items}</td>
                <td>{row.total}</td>
                <td>{row.remarks}</td>
                <td>{row.verified ? "YES" : "NO"}</td>
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
