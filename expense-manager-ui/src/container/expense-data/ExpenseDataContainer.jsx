import React, { Component } from "react";
import "./expense-data.css";

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

export default ExpenseDataContainer;
