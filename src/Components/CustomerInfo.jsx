import React, { Component } from 'react';
import InputForm from './InputForm';
import { validateInput } from '../utils';

class CustomerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: {
                value: '',
                isInputValid: true, 
                errorMessage: ''
            }, 
            phonenumber:  {
                value: '',
                isInputValid: true, 
                errorMessage: ''
            }, 
        }
    }

    handleInput = event => {
        const { name, value } = event.target;
        // const newState = Object.assign({}, this.state[name]); 
        const newState = {...this.state[name]};
        newState.value = value;
        this.setState({[name]: newState});
    }

    handleInputValidation = event => {
        const { name } = event.target;
        const { isInputValid, errorMessage } = validateInput(name, this.state[name].value);
        const newState = {...this.state[name]};
        newState.isInputValid = isInputValid;
        newState.errorMessage = errorMessage;
        this.setState({[name]: newState})
    }

    render() {
        return (
            <div className="customer-info">
                <form>
                    <input type="radio" name="gender" defaultValue="male" defaultChecked />Anh
                    <input type="radio" name="gender" defaultValue="female" />Chị
                    <div className="typing-input">
                        <InputForm 
                            type="text"
                            name="fullname" 
                            needValidation />
                        <InputForm 
                            type="text"
                            name="phonenumber" 
                            needValidation />
                        <InputForm 
                            type="text"
                            name="others" 
                            needValidation={false}
                            />    
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