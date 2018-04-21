import React from 'react';

function FormError(props) {
    if (props.isHidden) {
        return null;
    }

    const customStyle =
            {
                display: '',
            };
    return (
            <div style={customStyle} className={`form-error error-${props.type}`}>
                {props.errorMessage}
            </div>
        ) 
}

export default FormError;