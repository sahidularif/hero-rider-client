import React from 'react'
import { styled, useStyletron } from 'baseui';
import { Input, SIZE } from 'baseui/input';
import { Combobox } from 'baseui/combobox';
import { Radio } from 'baseui/radio';
import { Formik, Form, ErrorMessage, Field, useFormik } from 'formik';
import * as Yup from "yup";
import {
    LabelLarge,
    ParagraphMedium,
} from 'baseui/typography';
import axios from 'axios';
const Learner = () => {
    const [rider, setRider] = React.useState(true)
    const [picture, setPicture] = React.useState({
        profile: '',
        nid: '',
        licence: '',
    })
    const [css] = useStyletron();
    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            age: '',
            phone: '',
            address: '',
            licencePicture: '',
            nidPicture: '',
            profilePicture: '',
            vehicleType: '',
            area: '',
            carName: '',
            carModel: '',
            namePalate: '',
            password: '',
            confirmPassword: '',

        },
        validationSchema: Yup.object({
            fullname: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is equired'),
            age: Yup.string().required("Age is required"),
            phone: Yup.string().required("Phone is required"),
            vehicleType: Yup.string().required("Type is required"),
            password: Yup.string().required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm password is required"),
        }),

        onSubmit: values => {
            const formData = new FormData();
            formData.append('nidPicture', picture.nid);
            formData.append('profilePicture', picture.profile);
            formData.append('fullname', values.fullname);
            formData.append('email', values.email);
            formData.append('age', values.age);
            formData.append('address', values.address);
            formData.append('phone', values.phone);
            formData.append('vehicleType', values.vehicleType);
            formData.append('password', values.password);

            axios.post('http://localhost:5000/api/register', formData)
                .then((res) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    });
    const handleFileChange = (e) => {
        const imageData = new FormData();
        imageData.set('key', 'a50bd9e146ea263516d08f905253b815')
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                if (e.target.name === 'profilePicture') {
                    setPicture((prev) => ({ ...prev, profile: response.data.data.display_url }));
                }
                else if (e.target.name === 'nidPicture') {
                    setPicture((prev) => ({ ...prev, nid: response.data.data.display_url }));
                }
                else {
                    setPicture((prev) => ({ ...prev, licence: response.data.data.display_url }));
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    };
    // console.log(picture)
    return (
        <div className='mx-auto mt-5 mb-5'>
            <div className='p-5 border m-5 w-50 mx-auto'>
                <div className={css({
                    padding: '2rem',
                    display: 'block',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                })}>
                    <LabelLarge>Sign up as learner</LabelLarge>


                    {
                        rider && (
                            <form onSubmit={formik.handleSubmit} className={css({
                                textAlign: 'left'
                            })} >
                                <div className='text-center'>
                                    {/* <img class="" src={logo} alt="" width="120" height="100" /> */}
                                    <h1 class="h6 p-3">Fill your learner details</h1>
                                </div>
                                <div className='row g-3'>
                                    <div class="col-12">
                                        <label for="inputEmail4" class="form-label">Full Name</label>
                                        <input type="text" name='fullname' class="form-control" id="inputEmail4"
                                            {...formik.getFieldProps('fullname')}
                                        />
                                    </div>
                                    {formik.touched.fullname && formik.errors.fullname ? (
                                        <span>{formik.errors.fullname}</span>
                                    ) : null}

                                    <div class="col-12">
                                        <label for="inputEmail4" class="form-label">Email</label>
                                        <input type="text" name='email' class="form-control" id="inputEmail4"
                                            {...formik.getFieldProps('email')}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <span>{formik.errors.email}</span>
                                        ) : null}
                                    </div>
                                    <div class="col-12">
                                        <label for="inputEmail4" class="form-label">Address</label>
                                        <input type="text" name='address' class="form-control" id="inputEmail4"
                                            {...formik.getFieldProps('address')}
                                        />
                                        {formik.touched.address && formik.errors.address ? (
                                            <span>{formik.errors.address}</span>
                                        ) : null}
                                    </div>

                                    <div className='col-md-12'>
                                        <label for="formFile" class="form-label">Upload Profile Picture</label>
                                        <input class="form-control"
                                            name='profilePicture'
                                            type="file" id="formFile"
                                            onChange={handleFileChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Age</label>
                                        <input type="text" name='age' class="form-control" id="inputEmail4"
                                            {...formik.getFieldProps('age')}
                                        />
                                        {formik.touched.age && formik.errors.age ? (
                                            <span>{formik.errors.age}</span>
                                        ) : null}
                                    </div>

                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Phone</label>
                                        <input type="text" name='phone' class="form-control" id="inputEmail4"
                                            {...formik.getFieldProps('phone')}
                                        />
                                        {formik.touched.phone && formik.errors.phone ? (
                                            <span>{formik.errors.phone}</span>
                                        ) : null}
                                    </div>
                               
                                    <div className='col-md-12'>
                                        <label for="formFile" class="form-label">Upload NID Picture</label>
                                        <input class="form-control" name='nidPicture' type="file" id="formFile"
                                            onChange={handleFileChange} />
                                        {formik.touched.nidPicture && formik.errors.nidPicture ? (
                                            <span>{formik.errors.nidPicture}</span>
                                        ) : null}
                                    </div>

                                    <div class="col-md-12">
                                        <label for="inputState" class="form-label">Vehicle Type</label>
                                        <select id="inputState" name='vehicleType' class="form-select" {...formik.getFieldProps('vehicleType')}>
                                            <option selected>Choose...</option>
                                            <option value="car">Car</option>
                                            <option value="bike">Bike</option>
                                        </select>
                                        {formik.touched.vehicleType && formik.errors.vehicleType ? (
                                            <span>{formik.errors.vehicleType}</span>
                                        ) : null}
                                    </div>


                                </div>
                  
                                <div className='row mt-5 mb-5'>
                                    <h6>Login Security</h6><hr />
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Password</label>
                                        <input type="text" name='password' class="form-control" id="inputEmail4"
                                            {...formik.getFieldProps('password')}
                                        />
                                        {formik.touched.password && formik.errors.password ? (
                                            <span>{formik.errors.password}</span>
                                        ) : null}
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Confirm Password</label>
                                        <input type="text" name='confirmPassword' class="form-control" id="inputEmail4"
                                            {...formik.getFieldProps('confirmPassword')}
                                        />
                                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                            <span>{formik.errors.confirmPassword}</span>
                                        ) : null}
                                    </div>
                                </div>
                                <button class="w-100 btn btn-lg btn-primary" type="submit" >Sign up</button>

                            </form>
                        )
                    }


                </div>

                <div style={{ height: 'auto', width: '100%' }}>
                    {/* rows={leads.map(r => ({ id: r[0], data: r }))} */}
                    {/* <Data /> */}
                </div>
            </div>
        </div>
    )
}

export default Learner

export const DashboardWrapper = styled('section', {
    background: '#F7F8FC',
    border: '1px solid black',
    position: 'relative',
    margin: '0px auto',
    width: '100%',
    top: '0%',
    left: '0%',
    minHeight: 'auto',
    maxWidth: '100vw',
    boxSizing: 'border-box',

    '@media (max-width: 768px)': {
        paddingLeft: '0',
    }
});