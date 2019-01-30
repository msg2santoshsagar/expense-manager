import React, { Component } from "react";
import { addExpense } from "../../actions/expense.action";
import { connect } from "react-redux";

class AddNewExpenseContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddNewButtonClick = this.handleAddNewButtonClick.bind(this);
  }

  handleAddNewButtonClick() {
    console.log("handleAddNewButtonClick called");
    this.props.addNewExpense({});
  }

  render() {
    return (
      <div className="add-new-expense-container">
        <button onClick={this.handleAddNewButtonClick}>ADD NEW</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewExpense: expenseData => {
      dispatch(addExpense(expenseData));
    }
  };
};

const connectedAddNewExpenseContainer = connect(
  undefined,
  mapDispatchToProps
)(AddNewExpenseContainer);

export default connectedAddNewExpenseContainer;
