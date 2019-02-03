import React, { Component } from "react";
import "./expense-data.css";
import { connect } from "react-redux";

class ExpenseDataContainer extends Component {
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
                <td>{row.verified}</td>
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

const connectedExpenseDataContainer = connect(mapStateToProps)(
  ExpenseDataContainer
);

export default connectedExpenseDataContainer;
