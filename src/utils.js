const formatNumber = number => {
    number = (number + '').replace(/[\D\s_]+/g, "");
    number = number ? parseInt(number, 10) : "";
    return (number === "") ? "" : number.toLocaleString("en-US");
}

const isUndefined = v => typeof v === "undefined";
const isDefined = v => typeof v !== "undefined";

const checkingTypes = {
    phonenumber: "phonenumber",
    fullname: "fullname"
}

// export default formatNumber;

const validateInput = (type, checkingText) => {
    if (type === checkingTypes.phonenumber) {
        const regexp = /^\d{10,11}$/; // regular expression - checking if phone number contains only 10 - 11 numbers
        const checkingResult = regexp.exec(checkingText);
        if (checkingResult !== null) {
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

    if (type === checkingTypes.fullname) {
        const regexp = /\d{1,}/; // regular expression - checking if fullname contains any number
        const checkingResult = regexp.exec(checkingText);
        if (checkingResult === null) {
            return {
                isInputValid: true,
                errorMessage: ''
            }
        } else {
            return {
                isInputValid: false,
                errorMessage: 'Tên chỉ được chứa chữ cái.'
            };
        }

    }
}

export { formatNumber, validateInput, isDefined, isUndefined };