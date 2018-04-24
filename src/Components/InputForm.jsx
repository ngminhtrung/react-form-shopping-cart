import React, { Component } from 'react';
import { validateInput, isDefined } from '../utils';

const placeholder = {
    fullname: "Họ và tên",
    phonenumber: "Số điện thoại di động"
}

function FormError(props) {
    if (props.errorMessage === '') {
        return null;
    }
    return (
        <div className={`form-error error-${props.type}`}>
            {props.errorMessage}
        </div>
    )
}

class IntputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: {
                value: '',
                errorMessage: ''
            },
            phonenumber: {
                value: '',
                errorMessage: ''
            },
        }
    }

    handleInput = event => {
        const { name, value } = event.target;
        console.log(value);
        const newState = { ...this.state[name] };
        newState.value = value;
        this.setState({ [name]: newState });
    }

    handleInputValidation = event => {
        const { name } = event.target;
        const { isInputValid, errorMessage } = validateInput(name, this.state[name].value);
        const newState = { ...this.state[name] };
        newState.isInputValid = isInputValid;
        newState.errorMessage = errorMessage;
        this.setState({ [name]: newState })
    }

    render() {
        const name = this.props.name;
        const errorMessage = isDefined(this.state[name]) ? this.state[name].errorMessage : '';

        return (
            <div className="input-field-container">
                <input
                    type={this.props.type}
                    className="input-field"
                    name={this.props.name}
                    placeholder={placeholder[this.props.name]}
                    onChange={this.handleInput}
                    onBlur={this.props.needValidation ? this.handleInputValidation : null}
                    required={this.props.needValidation} />
                <FormError errorMessage={errorMessage} />
            </div>
        );
    }
}

export default IntputForm;