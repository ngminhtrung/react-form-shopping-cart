import React, { Component } from 'react';
import Product from './Product';
import ProductData from './ProductData'
class Products extends Component {

    constructor(props) {
        super(props);
        this.setTotalPrice = this.setTotalPrice.bind(this);
    }

    setTotalPrice(amount, type) {
        const signed = (type === "increase") ? 1 : (-1);
        this.props.onProductsTotalPriceChange(signed * amount);
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