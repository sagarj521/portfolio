import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

const FormInput = (props) => {

    const { name, label, control } = props;
    
    return (
        <Controller
            as={TextField}
            name={name}
            control={control}
            defaultValue=""
            label={label}
            fullWidth={true}
            {...props}
        />
        
    )
}

export default FormInput;