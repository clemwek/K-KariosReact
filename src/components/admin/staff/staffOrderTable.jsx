import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
  },
});

const table = [
  'table1', 'table2', 'table3',
];

function StaffOrderTable(props) {
  const {
    classes, data, open, handleOrder, handleClose, handleChange, handleSubmitOrder,
  } = props;

  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Drinks</TableCell>
              <TableCell numeric>Quantity</TableCell>
              <TableCell>Order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>{n.quantity}</TableCell>
                <TableCell numeric>
                  <Button
                    raised
                    color="accent"
                    className={classes.button}
                    onClick={handleOrder}
                  >
                    Order
                  </Button>
                </TableCell>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-make-order"
      >
        <DialogTitle id="form-make-order">Make Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the form bellow.
          </DialogContentText>
          <TextField
            margin="dense"
            name="quantity"
            id="quantity"
            label="Quantity"
            onChange={handleChange}
            type="text"
          />
          <TextField
            id="select-table"
            select
            label="Select"
            name="table"
            className={classes.textField}
            value={table}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            {table.map(table => (
              <MenuItem key={table} value={table}>
                {table}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitOrder} color="primary">
            Order
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

StaffOrderTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StaffOrderTable);
