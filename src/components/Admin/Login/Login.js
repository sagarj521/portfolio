import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormInput from '../../Controls/Input';
import { FormProvider, useForm } from "react-hook-form";
import FormCheckbox from '../../Controls/Checkbox';

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { API_END_POINT } from '../../../Constant';
import { useHistory } from 'react-router';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Portfolio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const defaultValues = {
    email: "",
    password: "",
    rememberMe: false   
  };

const validationSchema = yup.object().shape({
email: yup.string().email().required("Email is Required"),
password: yup.string().min(6).max(12).required("Password is Required"),
});

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const { handleSubmit, 
         control, 
         errors } = useForm({ defaultValues,
                              resolver: yupResolver(validationSchema) });

  const handelLogin = (data) => {
      axios.post(API_END_POINT+'auth/login', data)
           .then(res =>{
            if (res.status === 422) {
              throw new Error(
                "Validation failed. Make sure the email address isn't used yet!"
              );
            }
            if (res.status !== 200) {
              throw new Error('login failed!');
            }

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('loggedInUserId', res.data.userId);
            history.push('/admin/dashboard');

           })
           .catch(err=>console.log(err));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ADMIN LOGIN
        </Typography>
        <FormProvider>
        <form className={classes.form} onSubmit={handelLogin}>
            <FormInput variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                type="text"
                required
                errorobj={errors}
                control={control} />
            
            <FormInput variant="outlined"
                margin="normal"
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                required
                errorobj={errors}
                control={control} />
            
            <FormCheckbox 
                name="rememberMe" 
                id="rememberMe" 
                type="checkbox"
                control={control} /> Remember me
            
            <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit} 
                onClick={handleSubmit(handelLogin)} >
                LogIn
            </Button>
          
            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
            </Grid>
        </form>
        </FormProvider>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}