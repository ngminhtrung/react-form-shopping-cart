import React, { Component } from 'react';
import Products from './Products';
import ProductsPaymentSummary from './ProductsPaymentSummary';
import ProductData from './ProductData';
import CustomerInfo from './CustomerInfo';
import CouponInsert from './CouponInsert';

class Main extends Component {
  constructor(props) {
    super(props);

    const calculateTotalPrice = (accumulator, current) => {
      return accumulator + current.price;
    }
    const initialProductsTotalPrice = ProductData.reduce(calculateTotalPrice, 0);

    this.state = {
      productsTotalPrice: initialProductsTotalPrice,
      isCouponInsertHidden: true,
    };

    this.getProductsTotalPrice = this.getProductsTotalPrice.bind(this);
    this.getProductDismissed = this.getProductDismissed.bind(this);
    this.getButtonCouponStatus = this.getButtonCouponStatus.bind(this);
  }

  getProductsTotalPrice(amount) {
    this.setState({ productsTotalPrice: this.state.productsTotalPrice + amount });
  }

  getProductDismissed(amount) {
    this.setState({productsTotalPrice: this.state.productsTotalPrice - amount});
  }

  getButtonCouponStatus() {
    this.setState({isCouponInsertHidden: !this.state.isCouponInsertHidden})
  }

  render() {
    return (
      <div className="main">
        <Products 
            onProductsTotalPriceChange={this.getProductsTotalPrice} 
            onProductDismissed={this.getProductDismissed} />
        <ProductsPaymentSummary 
            onButtonCouponClicked={this.getButtonCouponStatus} 
            productsTotalPrice={this.state.productsTotalPrice} />
        <CouponInsert isHidden={this.state.isCouponInsertHidden}/>
        <CustomerInfo />
      </div>
    );
  }
}

export default Main;