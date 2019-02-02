import React, { Component } from "react";
import { addExpense } from "../../actions/expense.action";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'
import AddNewExpenseFormComponent from "../../component/shared/AddNewExpenseFormComponent";

class AddNewExpenseContainer extends Component {


  constructor(props) {
    super(props);

    this.state = {
      open: false
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
            <AddNewExpenseFormComponent />
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
