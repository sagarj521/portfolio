import React from 'react';
import { Controller } from 'react-hook-form';
import { Checkbox } from '@material-ui/core';

const FormCheckbox = (props) => {

    const { name, label, control, type } = props;
   

    return (
        <Controller
            as={Checkbox}
            name={name}
            control={control}
            defaultValue=""
            label={label}
            type={type}            
            {...props}
        />        
    )
}

export default FormCheckbox;