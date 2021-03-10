import React from 'react';
import { Controller } from 'react-hook-form';

import ReactSelect from "react-select";


const FormSelect = (props) => {
    const { name, label, control, options, isMulti } = props;

    return (
        <Controller 
            as={ReactSelect}
            name={name}
            control={control}
            options={options}
            label={label}
            isMulti={isMulti}
            onChange={([selected]) => {
                return { value: selected };
              }}
        />
    )
}

export default FormSelect;