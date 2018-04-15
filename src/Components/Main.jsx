import React, { Component } from 'react';
import Products from './Products';
import ProducsPaymentSummary from './ProductSPaymentSummary';
import CustomerInfo from './CustomerInfo';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsTotalPrice: 0
    },
      this.getProductsTotalPrice = this.getProductsTotalPrice.bind(this);
  }

  getProductsTotalPrice(amount) {
    this.setState({ productsTotalPrice: amount });
  }

  render() {
    return (
      <div className="main">
        <Products onProductsTotalPriceChange={this.getProductsTotalPrice} />
        <ProducsPaymentSummary productsTotalPrice={this.state.productsTotalPrice} />
        <CustomerInfo />
      </div>
    );
  }
}

export default Main;