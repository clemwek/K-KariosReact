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

function StockTable(props) {
  const {
    classes, data, open, handleAddStock, handleClose, handleChange, handleSubmitAddStocke,
  } = props;

  return (
    <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Drinks</TableCell>
              <TableCell numeric>Quantity In</TableCell>
              <TableCell numeric>Quantity Out</TableCell>
              <TableCell>Add Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>{n.quantity}</TableCell>
                <TableCell numeric>{n.quantity}</TableCell>
                <TableCell numeric>
                  <Button
                    raised
                    color="accent"
                    className={classes.button}
                    onClick={handleAddStock}
                  >
                    Add Stock
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
        <DialogTitle id="form-make-order">Add Stock</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the form bellow.
          </DialogContentText>
          <TextField
            margin="dense"
            name="name"
            id="name"
            label="Name"
            onChange={handleChange}
            type="text"
          />
          <TextField
            margin="dense"
            name="quantity"
            id="quantity"
            label="Quantity"
            onChange={handleChange}
            type="text"
          />
          <TextField
            margin="dense"
            name="price"
            id="price"
            label="Price"
            onChange={handleChange}
            type="text"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmitAddStocke} color="primary">
            Add Stock
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

StockTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StockTable);
