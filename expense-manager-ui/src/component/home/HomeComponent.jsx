import React from "react";
import ExpenseDataContainer from "../../container/expense-data/ExpenseDataContainer";
import AddNewExpenseContainer from "../../container/expense-data/AddNewExpenseContainer";

const HomeComponent = () => (
  <div className="home-component">
    <AddNewExpenseContainer />
    <ExpenseDataContainer />
  </div>
);

export default HomeComponent;
