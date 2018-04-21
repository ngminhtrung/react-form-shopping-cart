import React from 'react';

function FormError(props) {
    if (props.isHidden) {
        return null;
    }
    return (
            <div className={`form-error error-${props.type}`}>
                {props.errorMessage}
            </div>
        ) 
}

export default FormError;