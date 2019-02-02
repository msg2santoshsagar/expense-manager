import React, { Component } from "react";
import { addExpense } from "../../actions/expense.action";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'
import AddNewExpenseFormComponent from "../../component/shared/AddNewExpenseFormComponent";
import { todayDateForDatePicker } from "../../utils/DateUtil";

class AddNewExpenseContainer extends Component {


  constructor(props) {
    super(props);

    let defaultExpenseData = [{
      date: todayDateForDatePicker(),
      paymentMode: "CASH",
      items: '',
      total: '',
      remarks: ''
    }];

    this.state = {
      open: false,
      expenseData: defaultExpenseData
    }

    this.handleAddNewButtonClick = this.handleAddNewButtonClick.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setOpen = this.setOpen.bind(this);
  }

  handleAddNewButtonClick() {
    this.props.addNewExpense({});
  }

  setOpen(val) {
    this.setState({ open: val });
  }

  handleClickOpen() {
    this.setOpen(true);
  }

  handleClose() {
    this.setOpen(false);
    console.log('Expense Data :: ',this.state.expenseData);
  }

  handleOnChange(evt) {
    console.log('Hanlde On change called', evt);
    console.log('Id  : ',evt.target.id);
    console.log('Val : ',evt.target.value);
    console.log('Idx : ',evt.target.index);
  }

  render() {
    return (
      <div className="add-new-expense-container">
        <div >
          <Button variant={"contained"} color={"primary"} onClick={this.handleClickOpen}>ADD NEW</Button>
        </div>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title"
          fullWidth={true}
          maxWidth={false}>
          <DialogTitle id="form-dialog-title">New Expense Detail</DialogTitle>
          <DialogContent>
            <AddNewExpenseFormComponent
              expenseData={this.state.expenseData}
              handleOnChange={this.handleOnChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
        </Button>
            <Button onClick={this.handleClose} color="primary">
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
