class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        phoneNumber: '',
        validation: {
          isInputValid: true,
          errorMessage: ''
        }
      }
    }
    
    handleInput = event => {
      const value = event.target.value;
      this.setState({
        phoneNumber: value
        })
    }
    
    validateInput = checkingText => {
      
      const regexp = /^\d{10,11}$/; 
      // regular expression - checking if phone number contains only 10 - 11 numbers
      
      if (regexp.exec(checkingText) !== null) {
              return {
                  isInputValid: true,
                  errorMessage: ''
              };
          } else {
              return {
                  isInputValid: false,
                  errorMessage: 'Số điện thoại phải có 10 - 11 chữ số.'
              };
          }
    }
    
    handleInputValidation = event => {
     const { isInputValid, errorMessage } = validateInput(this.state.phonenumber);
          this.setState({
              validation: {
                  isInputValid: isInputValid,
                  errorMessage: errorMessage
              }
          }) 
    }
    
    render() {
      const isPhoneNumberValid = this.state.validation.isInputValid;
      const formErrors = !isPhoneNumberValid ? (
        <FormErros errorMessage={this.state.validation.errorMessage} />
      ) : null;
      return(
        <div className="container">
          <h1>Form validatiion</h1>
          <h3>onBlur, onFocus</h3>
          <input
                type="text"
                name="phonenumber"
                className="input-field"
                placeholder="Số điện thoại"
                onChange={this.handleInput}
                onBlur={this.handleInputValidation}
                required />
        </div>
      )
    }
  
    
  }
  
  function FormErros(props) {
    return (
      <div>
          {props.errorMessage}
      </div>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));