import React from "react";

import { Controller } from "react-hook-form";

const FormFile = (props) => {
    const {name, control} = props;
    return (
        <Controller
            as=""
            name={name}
            control={control} 
            variant="contained" color="primary"
        />
      
    )
}

export default FormFile;