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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


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
   githubUrl: "", 
   duration: "",
   technologies:"",
   description:""
 };

 /* validations */
 const validationSchema = yup.object().shape({
   title: yup.string().required("Title is Required"),
   githubUrl: yup.string().required("Github URL is Required"),
   // duration: yup.string().required("Duration is Required"),
   // technologies: yup.string().required("Technologies is Required"),
   description: yup.string().min(12).required("Description is Required"),   
   });

const AddProject = ()=> {

   let [projectImage, setProjectImage] = useState();

   const methods = useForm();
   
   const { handleSubmit, 
      control, 
      errors } = useForm({ defaultValues,
                           resolver: yupResolver(validationSchema) });

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
                        <FormInput 
                           variant="outlined" 
                           fullWidth 
                           name="title" 
                           label="Project Title"
                           required
                           errorobj={errors} 
                           control={control} />
                     </Grid>
                  </Grid>
                  <Grid container spacing={10}>
                     <Grid item xs={5}>
                        <FormInput 
                           variant="outlined" 
                           fullWidth 
                           name="githubUrl" 
                           label="Github URL" 
                           required
                           errorobj={errors} 
                           control={control} />
                     </Grid>
                  </Grid>
                  <Grid container spacing={10}>
                     <Grid item xs={5}>
                        <label>Project Duration</label> 
                     <FormSelect 
                        name="duration" 
                        required
                        errorobj={errors}
                        control={control} 
                        options={projectDuration} />
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
                        <label>Technologies</label>
                        <FormSelect  
                           name="technologies" 
                           isMulti={true} 
                           label="Technologies" 
                           required
                           errorobj={errors}
                           control={control} 
                           options={options} />
                     </Grid>
                  </Grid>
                  <Grid container spacing={10}>
                     <Grid item xs={5}>
                        <FormTextArea 
                           variant="outlined" 
                           name="description" 
                           label="Project Description" 
                           required
                           errorobj={errors}
                           control={control} />
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