import React, { Component } from 'react';

import StockTable from './stockTable';

let id = 0;

function createData(name, quantity) {
  id += 1;
  return {
    id, name, quantity,
  };
}

const  data = [
  createData('coke cola', 159),
  createData('fanta', 237),
];


class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      newStack: {},
    };
    this.handleAddStock = this.handleAddStock.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitAddStocke = this.handleSubmitAddStocke.bind(this);
  }

  handleAddStock() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleSubmitAddStocke() {
    console.log(this.state.newStack);
    this.setState({ open: false });
  }

  handleChange(event) {
    const field = event.target.name;
    const newStack = this.state.newStack;
    newStack[field] = event.target.value;
    this.setState({ newStack });
  }


  render() {
    return (
      <div>
        <h2>AdminPage</h2>
        <StockTable
          data={data}
          handleAddStock={this.handleAddStock}
          handleChange={this.handleChange}
          open={this.state.open}
          handleClose={this.handleClose}
          handleSubmitAddStocke={this.handleSubmitAddStocke}
        />
      </div>
    );
  }
}

export default AdminPage;
