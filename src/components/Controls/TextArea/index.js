import { TextareaAutosize } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

const FormTextArea = (props) => {

    const { name, label, control } = props;

    return (
        <Controller 
            as={TextareaAutosize}
            aria-label="minimum height" 
            rowsMin={5}
            placeholder="Minimum 3 rows"
            name={name}
            control={control}
            label={label}
        />
    )
}

export default FormTextArea;