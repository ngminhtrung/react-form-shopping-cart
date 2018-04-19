import React, { Component } from 'react';

class FormErros extends Component {

    render() {
        const { isInputValid, errorMessage } = this.validateInput(this.props.type, this.props.inputMessage);
        const customStyle = (isInputValid) ?
            { display: 'none' }
            :
            {
                display: '',
                fontSize: '0.9em',
                color: 'red',
                marginTop: '12px',
                width: '100%',
                textAlign: 'right'
            };
        return (
            <div style={customStyle}>
                {errorMessage}
            </div>
        )
    }

    validateInput = (type, checkingText) => {
        if (type === "phonenumber") {
            const regexp = /^\d{10,11}$/; // regular expression - checking if phone number contains only 10 - 11 numbers
            console.log(checkingText);
            console.log(regexp.exec(checkingText));
            if (regexp.exec(checkingText) !== null) {
                console.log(true);
                return {
                    isInputValid: true,
                    errorMessage: ''
                };
            } else {
                console.log(false);
                return {
                    isInputValid: false,
                    errorMessage: 'Số điện thoại phải có 10 - 11 chữ số.'
                };
            }
        }

    }
}

export default FormErros;