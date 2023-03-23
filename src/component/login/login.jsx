import React, { useState } from 'react';
import './login.css'
import logo from '../../assets/logo.png';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, ErrorMessage, Field, useFormik } from 'formik';
import * as Yup from "yup";
import { login } from '../../auth/authService';





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/login";
    let redirectPath = location.state?.path || '/'
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: values => {
            login(values)
                .then((res) => {
                    console.log(res)
                    if(res.data.token){
                        navigate(redirectPath, { replace: true });
                    } else{
                        navigate(from, { replace: true });
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        },
    });
    return (
        <div className='login-section'>
            <div class="form-signin shadow-lg">
                <div className='text-center mb-5'>
                    <h1 class="h4 fw-bold">Welcome To Hero Rider</h1>
                    <h6 class="h5 fw-bold">Sign in</h6>
                </div>
                <form onSubmit={formik.handleSubmit}>

                    <div class="form-floating mb-3">
                        <input
                            type="email"
                            name="email" class="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            defaultValue={formik.initialValues.email}
                            {...formik.getFieldProps('email')}
                        />
                        <label for="floatingInput">Email address</label>
                    </div>

                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <div class="form-floating">
                        <input
                            type="password" name="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            defaultValue={formik.initialValues.password}
                            {...formik.getFieldProps('password')}
                        />
                        <label for="floatingPassword">Password</label>
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                    <button class="w-100 btn btn-lg btn-primary" type="submit" >Sign in</button>

                </form>

                <div className='text-center pt-3'>
                    <p>Have not yet an account? <Link to="/register">Sign up</Link></p>
                    <p>© Hero Rider 2020-2023</p>
                </div>
            </div>
        </div>
    );
};

export default Login;