import React from 'react';
import formatNumber from '../utils'

function ProductsPaymentSummary(props) {
    const productsTotalPrice = formatNumber(props.productsTotalPrice);
    return (
        <div className="products-payment-summary">
            <span>Tổng tiền</span>
            <span>{productsTotalPrice}</span>
            <span>Giảm</span>
            <span></span>
            <span className="price-bold">Cần thanh toán</span>
            <span className="price-amount price-bold">{productsTotalPrice}</span>
            <span></span>
            <span className="price-coupon">Sử dụng mã giảm giá</span>
        </div>
    )
}

export default ProductsPaymentSummary;