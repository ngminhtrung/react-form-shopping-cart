import React, { Component } from 'react';
import Products from './Products';
import ProductsPaymentSummary from './ProductSPaymentSummary';
import ProductData from './ProductData';
import CustomerInfo from './CustomerInfo';

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      productsTotalPrice: 0
    };

    const calculateTotalPrice = (accumulator, current) => {
      return accumulator + current.price;
    }

    const productsTotalPrice = ProductData.reduce(calculateTotalPrice, 0);

    this.state = {
      productsTotalPrice: productsTotalPrice
    };

    this.getProductsTotalPrice = this.getProductsTotalPrice.bind(this);
    this.getProductDismissed = this.getProductDismissed.bind(this);
  }

  getProductsTotalPrice(amount) {
    this.setState({ productsTotalPrice: this.state.productsTotalPrice + amount });
  }

  getProductDismissed(amount) {
    this.setState({productsTotalPrice: this.state.productsTotalPrice - amount});
  }

  render() {
    return (
      <div className="main">
        <Products onProductsTotalPriceChange={this.getProductsTotalPrice} onProductDismissed={this.getProductDismissed} />
        <ProductsPaymentSummary productsTotalPrice={this.state.productsTotalPrice} />
        <CustomerInfo />
      </div>
    );
  }
}

export default Main;