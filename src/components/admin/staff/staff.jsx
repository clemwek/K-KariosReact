import React, { Component } from 'react';

import StaffOrderTable from './staffOrderTable';

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

class StaffPage extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
      order: {
        nameDrink: '',
        quantity: '',
        table: '',
        staff: '',
      },
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.handleSubmitOrder = this.handleSubmitOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmitOrder() {
    this.setState({ open: false });
    console.log('this is the order submited', this.state.order);
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleChange(event) {
    const field = event.target.name;
    const order = this.state.order;
    order[field] = event.target.value;
    this.setState({ order });
  }

  handleOrder() {
    this.setState({ open: true });
  }

  render() {
    return (
      <div>
        <h2>Hello there</h2>
        <StaffOrderTable
          data={data}
          handleOrder={this.handleOrder}
          handleChange={this.handleChange}
          open={this.state.open}
          handleClose={this.handleClose}
          handleSubmitOrder={this.handleSubmitOrder}
        />
      </div>
    );
  }
}

export default StaffPage;
