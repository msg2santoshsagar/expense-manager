import React, { Component } from "react";
import { addExpense } from "../../actions/expense.action";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddNewExpenseFormComponent from "../../component/shared/AddNewExpenseFormComponent";
import {
  formatDateToDisplay,
  todayDateForDatePicker
} from "../../utils/DateUtil";

class AddNewExpenseContainer extends Component {
  constructor(props) {
    super(props);

    let defaultExpenseData = [
      {
        date: todayDateForDatePicker(),
        paymentMode: "CASH",
        items: "",
        total: "",
        remarks: "",
        verified: "YES"
      }
    ];

    this.state = {
      open: false,
      expenseData: defaultExpenseData
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setOpen = this.setOpen.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAddButtonClicked = this.handleAddButtonClicked.bind(this);
    this.addAndDispatchNewExpense = this.addAndDispatchNewExpense.bind(this);
  }

  setOpen(val) {
    this.setState({ open: val });
  }

  handleClickOpen() {
    this.setOpen(true);
  }

  handleClose() {
    this.setOpen(false);
  }

  formatDataForServer(res) {
    return res.map(row => {
      row.date = new Date();
      row.verified = true;
      return row;
    });
  }

  formatResult(res) {
    return res.map(row => {
      row.date = formatDateToDisplay(row.date);
      return row;
    });
  }

  addAndDispatchNewExpense() {
    fetch("/expenseManagerService/api/expenses", {
      method: "POST",
      body: JSON.stringify(this.formatDataForServer(this.state.expenseData)),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => this.props.addNewExpense(this.formatResult(res)));
  }

  handleAddButtonClicked() {
    console.log("Request to add expense data: ", this.state.expenseData);
    //this.props.addNewExpense(this.state.expenseData);
    this.addAndDispatchNewExpense();
    this.handleClose();
  }

  handleOnChange(evt, idx) {
    let key = evt.target.name;
    let val = evt.target.value;
    let currentExpenseData = this.state.expenseData;
    currentExpenseData[idx][key] = val;
    this.setState({ expenseData: currentExpenseData });
  }

  buttonStyle = {
    float: "right",
    marginRight: "75px",
    marginBottom: "20px"
  };

  render() {
    return (
      <div className="add-new-expense-container">
        <div style={this.buttonStyle}>
          <Button
            variant={"contained"}
            color={"primary"}
            size={"large"}
            onClick={this.handleClickOpen}
          >
            ADD NEW
          </Button>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
          maxWidth={false}
        >
          <DialogTitle id="form-dialog-title">New Expense Detail</DialogTitle>
          <DialogContent>
            <AddNewExpenseFormComponent
              expenseData={this.state.expenseData}
              handleOnChange={this.handleOnChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAddButtonClicked} color="primary">
              ADD
            </Button>
          </DialogActions>
        </Dialog>
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
