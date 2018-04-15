import React from 'react';

function ProductsPaymentSummary(props) {
    console.log(props)
    return (
        <div className="products-payment-summary">
            <span>Tổng tiền</span>
            <span>25.000đ</span>
            <span>Giảm</span>
            <span>-13.000đ</span>
            <span className="price-bold">Cần thanh toán</span>
            <span className="price-amount price-bold">{props.productsTotalprice}</span>
            <span></span>
            <span className="price-coupon">Sử dụng mã giảm giá</span>
        </div>
    )
}

export default ProductsPaymentSummary;