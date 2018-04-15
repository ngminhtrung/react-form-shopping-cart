import React from 'react';

function CustomerInfo() {
    return (
        <div className="customer-info">
            <form action>
                <input type="radio" name="gender" defaultValue="male" defaultChecked />Anh
                <input type="radio" name="gender" defaultValue="female" />Chị
                <div className="typing-input">
                    <input type="text" className="input-field" name="fullname" placeholder="Họ và tên" required />
                    <input type="text" name="phonenumber" className="input-field" placeholder="Số điện thoại" required />
                    <input type="text" name="others" className="input-field" placeholder="Yêu cầu khác (không bắt buộc)" />
                </div>
                <p>Để được giao hàng nhanh hơn, hãy chọn thêm</p>
                <input type="radio" name="deliveryAddress" defaultValue="home" defaultChecked />
                <span className="deliveryAddress">Địa chỉ giao hàng</span>
                <input type="radio" name="deliveryAddress" defaultValue="store" />
                <span className="deliveryAddress">Nhận tại siêu thị</span>
                <br />
                <div className="payment-button">
                    <a href="#" className="payment-onDelivery">
                        <div className="button-content">
                            THANH TOÁN TẠI NHÀ
                    <br />
                            <span>Xem hàng trước, không mua không sao</span>
                        </div>
                    </a>
                    <a href="#" className="payment-online">THANH TOÁN ONLINE
                    <br />
                        <span>Bằng thẻ ATM, Visa, Master</span>
                    </a>
                </div>
            </form>

        </div>
    )
}

export default CustomerInfo;