import React, { useRef, useState } from 'react';

import { useForm, FormProvider } from "react-hook-form";
import style from './AddProject.module.css';

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Wrapper from '../Wrapper/Wrapper';
import FormInput from '../../Controls/Input';
import FormSelect from '../../Controls/Select';
import FormTextArea from '../../Controls/TextArea';
import { API_END_POINT } from '../../../Constant';
import axios from 'axios';
 


 const options = [
   { value: "React", label: "React" },
   { value: "Angular", label: "Angular" },
   { value: "Php", label: "Php" },
   { value: "Laravel", label: "Laravel" }
 ];

 const projectDuration = [
   { value: 1, label: "1 Month" },
   { value: 2, label: "2 Month" },
   { value: 3, label: "3 Month" },
   { value: 4, label: "4 Month" },
   { value: 5, label: "5 Month" },
   { value: 6, label: "6 Month" },
   { value: 7, label: "7 Month" },
   { value: 8, label: "8 Month" },
 ]
 
 const defaultValues = {
   title: "",
   technologies: "", 
   description: ""
 };

const AddProject = ()=> {

   let [projectImage, setProjectImage] = useState();
   
   const { register, handleSubmit, control } = useForm({ defaultValues });
  
   const methods = useForm();
   
   const onSubmit = data => {
     
      axios.post(API_END_POINT+'project/createProject', data)
      .then(result => {
         // console.log(result);
      })
      .catch(err=>console.log(err));
      console.log(data);
   }

   const fileChangedHandler = (event) => {
      const image = event.target.files[0];
      setProjectImage(image);
   }

   return (
       <div className={style.addProject}>
          <Wrapper>
             <span className={style.head}>Add New Project</span>
          </Wrapper>
          <Wrapper>   
             <FormProvider {...methods}>
               <form encType="multipart/form-data">
                  <Grid container spacing={10}>
                     <Grid item xs={5}>
                        <FormInput name="title" label="Project Title" control={control} />
                     </Grid>
                  </Grid>
                  <Grid container spacing={10}>
                     <Grid item xs={5}>
                     Project Duration <FormSelect name="duration" label="Project Duration In Month" control={control} options={projectDuration} />
                     </Grid>
                  </Grid>
                  {/* <Grid container spacing={10}>
                     <Grid item xs={5}>
                     Project Image
                     <input type="file" value={projectImage} name="mainImage" id="fileUpload" control={control} ref={register} onChange={fileChangedHandler} />
                     </Grid>
                  </Grid> */}
                  <Grid container spacing={10}>
                     <Grid item xs={5}>
                        Technologies<FormSelect name="technologies" isMulti={true} label="Technologies" control={control} options={options} />
                     </Grid>
                  </Grid>
                  <Grid container spacing={10}>
                     <Grid item xs={5}>
                        <FormTextArea name="description" label="Project Description" control={control} />
                     </Grid>
                  </Grid>
      
                  <Button
                     variant="contained"
                     color="primary"
                     onClick={handleSubmit(onSubmit)}
                  >SAVE</Button>
               </form>
             </FormProvider>  
         </Wrapper>
       </div>             
    )
}

export default AddProject;