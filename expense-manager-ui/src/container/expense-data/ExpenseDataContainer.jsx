import React, { Component } from "react";
import "./expense-data.css";
import { connect } from "react-redux";

class ExpenseDataContainer extends Component {
  render() {
    return (
      <div className="expense-data-container">
        <p>Data Length : {this.props.expensesData.length}</p>
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
            <tr>
              <td>30/01/2019</td>
              <td>CASH</td>
              <td>Vegetable</td>
              <td>500</td>
              <td>Potato</td>
              <td>YES</td>
            </tr>
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
