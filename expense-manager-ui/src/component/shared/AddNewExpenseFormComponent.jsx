import React from "react";
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

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
                                        <FormControl fullWidth>
                                            <TextField
                                                fullWidth
                                                id="date"
                                                index={idx}
                                                type="date"
                                                value={row.date}
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                onChange={props.handleOnChange}
                                            />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="left">
                                        <FormControl fullWidth>
                                            <Select
                                                id="paymentMode"
                                                index={idx}
                                                value={row.paymentMode}
                                                name="paymentMode"
                                                fullWidth
                                                onChange={props.handleOnChange}
                                            >
                                                <MenuItem value={'CASH'}>CASH</MenuItem>
                                                <MenuItem value={'PAYTM'}>PAYTM</MenuItem>
                                                <MenuItem value={'UDIO'}>UDIO</MenuItem>
                                            </Select>

                                        </FormControl></TableCell>
                                    <TableCell align="left"><TextField
                                        fullWidth
                                        id="items"
                                        value={row.items}
                                        margin="normal"
                                        onChange={props.handleOnChange}
                                    /></TableCell>
                                    <TableCell align="left"><TextField
                                        fullWidth
                                        id="total"
                                        margin="normal"
                                        type="number"
                                        value={row.total}
                                        onChange={props.handleOnChange}
                                    /></TableCell>
                                    <TableCell align="left"><TextField
                                        fullWidth
                                        id="remarks"
                                        value={row.remarks}
                                        margin="normal"
                                        onChange={props.handleOnChange}
                                    /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>

            </form>
        </div>
    );

}

AddNewExpenseFormComponent.prototype = {
    classes: PropTypes.object.isRequired,
    expenseData: PropTypes.object.isRequired,
    handleOnChange: PropTypes.func.isRequired
}

export default withStyles(styles)(AddNewExpenseFormComponent);
