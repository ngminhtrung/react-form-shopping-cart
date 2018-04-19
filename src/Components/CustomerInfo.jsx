import React, { Component } from 'react';
import FormErrors from './FormError';

class CustomerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            phonenumber: '',
        }
    }

    handleInput = event => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }
    
    render() {
        return (
            <div className="customer-info">
                <form>
                    <input type="radio" name="gender" defaultValue="male" defaultChecked />Anh
                    <input type="radio" name="gender" defaultValue="female" />Chị
                    <div className="typing-input">
                        <input 
                            type="text" 
                            className="input-field" 
                            name="fullname" 
                            placeholder="Họ và tên" 
                            onChange={this.handleInput}
                            required />
                        <input 
                            type="text"
                            name="phonenumber" 
                            className="input-field" 
                            placeholder="Số điện thoại" 
                            onChange={this.handleInput}
                            required />
                        <FormErrors 
                            inputMessage={this.state.phonenumber}
                            type="phonenumber" />
                        <input type="text" name="others" className="input-field" placeholder="Yêu cầu khác (không bắt buộc)" />
                    </div>
                    <p>Để được giao hàng nhanh hơn, hãy chọn thêm</p>
                    <input type="radio" name="deliveryAddress" defaultValue="home" defaultChecked />
                    <span className="deliveryAddress">Địa chỉ giao hàng</span>
                    <input type="radio" name="deliveryAddress" defaultValue="store" />
                    <span className="deliveryAddress">Nhận tại siêu thị</span>
                    <br />
                    <div className="payment-button">
                        <a href="" className="payment-onDelivery">
                            <div className="button-content">
                                THANH TOÁN TẠI NHÀ
                        <br />
                                <span>Xem hàng trước, không mua không sao</span>
                            </div>
                        </a>
                        <a href="" className="payment-online">THANH TOÁN ONLINE
                        <br />
                            <span>Bằng thẻ ATM, Visa, Master</span>
                        </a>
                    </div>
                </form>

            </div>
        )
    }

}

export default CustomerInfo;