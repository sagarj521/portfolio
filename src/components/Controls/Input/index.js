import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

import "./index.module.css";
const FormInput = (props) => {

    const { name, label, control, type, required, errorobj } = props;
    let isError = false;
    let errorMessage= "";

    if(errorobj && errorobj.hasOwnProperty(name)) {
        isError= true;
        errorMessage= errorobj[name].message;
    }

    return (
        <Controller
            as={TextField}
            name={name}
            type={type}
            control={control}
            defaultValue=""
            label={label}
            InputLabelProps = {{
                className: required? "required-label" : "",
                required: required || false
            }}
            error={isError}
            helperText={errorMessage}
            {...props}
        />
        
    )
}

export default FormInput;