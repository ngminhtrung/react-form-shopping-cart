import React, { Component } from 'react';
import formatNumber from '../utils';

class ProductsPaymentSummary extends Component {
    constructor(props) {
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle() {
        this.props.onButtonCouponClicked();
    }

    render() {
        return (
            <div className="products-payment-summary">
                <span>Tổng tiền</span>
                <span>{formatNumber(this.props.productsTotalPrice)}</span>
                <span>Giảm</span>
                <span></span>
                <span className="price-bold">Cần thanh toán</span>
                <span className="price-amount price-bold">{formatNumber(this.props.productsTotalPrice)}</span>
                <span></span>
                <span className="price-coupon"><a onClick={this.clickHandle}>Sử dụng mã giảm giá</a></span>
            </div>
        )
    }

}

export default ProductsPaymentSummary;