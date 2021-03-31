import React from 'react';
import { Controller } from 'react-hook-form';

import ReactSelect from "react-select";


const FormSelect = (props) => {
    const { name, label, control, options, isMulti, required, errorobj } = props;
    let isError = false;
    let errorMessage= "";

    if(errorobj && errorobj.hasOwnProperty(name)) {
        isError= true;
        errorMessage= errorobj[name].message;
    }

    return (
        <Controller 
            as={ReactSelect}
            name={name}
            control={control}
            options={options}
            label={label}
            isMulti={isMulti}
            InputLabelProps = {{
                className: required? "required-label" : "",
                required: required || false
            }}
            error={isError}
            helperText={errorMessage}
            onChange={([selected]) => {
                return { value: selected };
              }}
            {...props}
        />
    )
}

export default FormSelect;