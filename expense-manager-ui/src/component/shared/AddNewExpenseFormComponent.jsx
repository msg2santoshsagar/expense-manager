import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    },
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const availabePaymentModes = [
  "CASH",
  "PAYTM",
  "UDIO",
  "BANK",
  "CREDIT CARD",
  "OTHERS"
];

const AddNewExpenseFormComponent = props => {
  const { classes } = props;
  return (
    <div className="add-new-expense-form-component">
      <form className={classes.form}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>DATE</CustomTableCell>
                <CustomTableCell align="left">PAYMENT MODE</CustomTableCell>
                <CustomTableCell align="left">ITEMS</CustomTableCell>
                <CustomTableCell align="left">TOTAL</CustomTableCell>
                <CustomTableCell align="left">REMARKS</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.expenseData.map((row, idx) => (
                <TableRow key={idx} className={classes.row}>
                  <TableCell component="th" scope="row">
                    <TextField
                      fullWidth
                      id="date"
                      name="date"
                      index={idx}
                      type="date"
                      value={row.date}
                      InputLabelProps={{
                        shrink: true
                      }}
                      onChange={e => props.handleOnChange(e, idx)}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      id="paymentMode"
                      name="paymentMode"
                      fullWidth
                      select
                      value={row.paymentMode}
                      onChange={e => props.handleOnChange(e, idx)}
                      margin="normal"
                    >
                      {availabePaymentModes.map(paymentMode => (
                        <MenuItem key={paymentMode} value={paymentMode}>
                          {paymentMode}
                        </MenuItem>
                      ))}
                    </TextField>
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      id="items"
                      name="items"
                      value={row.items}
                      margin="normal"
                      onChange={e => props.handleOnChange(e, idx)}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      id="total"
                      name="total"
                      margin="normal"
                      type="number"
                      value={row.total}
                      onChange={e => props.handleOnChange(e, idx)}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      fullWidth
                      id="remarks"
                      name="remarks"
                      value={row.remarks}
                      margin="normal"
                      onChange={e => props.handleOnChange(e, idx)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </form>
    </div>
  );
};

AddNewExpenseFormComponent.prototype = {
  classes: PropTypes.object.isRequired,
  expenseData: PropTypes.object.isRequired,
  handleOnChange: PropTypes.func.isRequired
};

export default withStyles(styles)(AddNewExpenseFormComponent);
