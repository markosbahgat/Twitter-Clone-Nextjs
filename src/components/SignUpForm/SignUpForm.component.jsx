import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './SignUpForm.module.scss'
import useSignUp from '../../hooks/SignUpHook';

const SignUpForm = () => {
  const { signUp } = useSignUp();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    localStorage.setItem("email", data.email);
    const {
      email,
      confirmemail,
      password,
      confirmpassword
    } = data;

    if (email === confirmemail && password === confirmpassword){
        signUp(email, password);
    }
    else {
          alert("error password or email is not the same");
    }
  };
  

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const [values1, setValues1] = useState({
    password1: '',
    showPassword: false,
  });
      
  const handleChange = (prop) => (event) => {
      event.preventDefault();
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleChange1 = (prop) => (event) => {
      event.preventDefault();
    setValues1({ ...values1, [prop]: event.target.value });
  };
      
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
    setValues1({
      ...values1,
      showPassword: !values.showPassword,
    });
  };
      
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
          
        return ( 
          <main  className={styles.login_block}>
              <h1 className={styles.page_title}>First Step</h1>
              <h5 className={styles.title_span}>Personal Information</h5>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.LoginForm}>
              <div className={styles.input_container}>
                    <label className={styles.input_label}>Email Address</label>
                    <input
                    type="email"
                    id={styles[`${errors.email && "error"}`]}
                    className={styles.input_field}
                    placeholder='Enter your email'
                    name='email'
                    {...register("email",
                    {  required: true,
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })}
                    />
                    <i className="fas fa-envelope fa-lg"></i>
                {errors.email?.type === 'required' && <font color="red" size="2">This field is required</font>}
                </div>
                <div className={styles.input_container}>
                    <label className={styles.input_label}>Email Address</label>
                    <input type="email" id={styles[`${errors.confirmemail && "error"}`]} className={styles.input_field} placeholder='Enter your email' name='email' {...register("confirmemail", {  required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })}/>
                    <i className="fas fa-envelope fa-lg"></i>
                {errors.confirmemail?.type === 'required' && <font color="red" size="2">Please Confirm Email</font>}
                </div>
                <div className={styles.input_container}>
                        <label className={styles.input_label}>Password</label>
                        <input id={styles[`${errors.password && "error"}`]} type={values.showPassword ? 'text' : 'password'}  className={styles.input_field} placeholder='Enter your password' name='password' {...register("password", {  required: true })}/>
                        <i className="fas fa-lock fa-lg"></i>
                        <div onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} className={styles.visibility_icon}>
                          {values.showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                        </div>
                {errors.password?.type === 'required' && <font color="red" size="2">This field is required</font>}
                </div>
                <div className={styles.input_container}>
                      <label className={styles.input_label}>Confirm Password</label>
                      <input  id={styles[`${errors.confirmpassword && "error"}`]} type={values.showPassword ? 'text' : 'password'}  className={styles.input_field} placeholder='Enter your password' name='password' {...register("confirmpassword", {  required: true, pattern: /^[A-Za-z]+$/i })}/>
                      <i className="fas fa-lock fa-lg"></i>
                      <div onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} className={styles.visibility_icon}>
                        {values.showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                      </div>
                {errors.confirmpassword?.type === 'required' && <font color="red" size="2">Please Confirm Password</font>}
                </div>
                  <button type="submit" className={styles.singin_button}>Continue</button>
            </form>
        </main>
        );
}
 
export default SignUpForm;