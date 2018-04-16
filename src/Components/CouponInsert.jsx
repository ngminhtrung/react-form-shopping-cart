import React, { Component } from 'react';

function CouponInsert(props) {

    let customStyles;

    if (props.isHidden) {
        customStyles = {
            display: 'none'
        }
    } else {
        customStyles = {
            display: ''
        }
    }
    return (
        <div className="coupon" style={customStyles}>
            <input type="text" className="input-coupon" name="coupon" placeholder="Nhập mã giảm giá" required />
            <a href="" className="button-coupon">Áp dụng</a>
        </div>
    )
}

export default CouponInsert;
