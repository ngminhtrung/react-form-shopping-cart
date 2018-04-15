import React, { Component } from 'react';
import Product from './Product';
import ProductData from './ProductData'
class Products extends Component {

    constructor(props) {
        super(props);

        const reducer = (accumulator, current) => {
            return accumulator + current.price;
        }
        const productsTotalPrice = ProductData.reduce(reducer, 0);

        this.state = {
            productsTotalPrice: productsTotalPrice
        };
        this.setTotalPrice = this.setTotalPrice.bind(this);

    }

    setTotalPrice(amount, type) {
        const signed = (type === "increase") ? 1 : (-1);
        const newProductsTotalPrice = this.state.productsTotalPrice + signed * amount;
        this.setState({productsTotalPrice: newProductsTotalPrice});
        this.props.onProductsTotalPriceChange(this.state.productsTotalPrice);
    }


    render() {
        return (
            <div className="products">
                <Product onChangeProductQuantity={this.setTotalPrice} product={ProductData[0]} />
                <Product onChangeProductQuantity={this.setTotalPrice} product={ProductData[1]} />
            </div>
        )
    }
}

export default Products;