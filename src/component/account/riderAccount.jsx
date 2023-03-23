import React from 'react'
import { styled, useStyletron } from 'baseui';
import { useFormik } from 'formik';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
    LabelLarge,
    ParagraphMedium,
} from 'baseui/typography';
import axios from 'axios';
const Rider = () => {
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/login";
    const [rider, setRider] = React.useState(true)
    const [message, setMessage] = React.useState('')
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
            formData.append('licencePicture', picture.licence);
            formData.append('nidPicture', picture.nid);
            formData.append('profilePicture', picture.profile);
            formData.append('fullname', values.fullname);
            formData.append('email', values.email);
            formData.append('age', values.age);
            formData.append('address', values.address);
            formData.append('phone', values.phone);
            formData.append('vehicleType', values.vehicleType);
            formData.append('area', values.area);
            formData.append('carName', values.carName);
            formData.append('carModel', values.carModel);
            formData.append('namePalate', values.namePalate);
            formData.append('password', values.password);

            axios.post('http://localhost:5000/api/register', formData)
                .then((res) => {
                    console.log(res.data)
                    setMessage(res.data)
                    setTimeout(() => {
                        navigate(from, { replace: true });
                      }, 1000);
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
                    {
                        message && (
                            <div className='p-2 border bg-success text-white'><h6>{message}</h6></div>
                        )
                    }
                    <LabelLarge>Sign up as rider</LabelLarge>


                    {
                        rider && (
                            <form onSubmit={formik.handleSubmit} className={css({
                                textAlign: 'left'
                            })} >
                                <div className='text-center'>
                                    {/* <img class="" src={logo} alt="" width="120" height="100" /> */}
                                    <h1 class="h6 p-3">Fill your rider details</h1>
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
                                    <div className='col-md-6'>
                                        <label for="formFile" class="form-label">Upload Driving Licence Picture</label>
                                        <input class="form-control" name='licencePicture' type="file" id="formFile"
                                            onChange={handleFileChange} />
                                        {formik.touched.licencePicture && formik.errors.licencePicture ? (
                                            <span>{formik.errors.licencePicture}</span>
                                        ) : null}
                                    </div>
                                    <div className='col-md-6'>
                                        <label for="formFile" class="form-label">Upload NID Picture</label>
                                        <input class="form-control" name='nidPicture' type="file" id="formFile"
                                            onChange={handleFileChange} />
                                        {formik.touched.nidPicture && formik.errors.nidPicture ? (
                                            <span>{formik.errors.nidPicture}</span>
                                        ) : null}
                                    </div>

                                    <div class="col-md-6">
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

                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Area</label>
                                        <input type="text" name='area' class="form-control" id="inputEmail4"
                                            {...formik.getFieldProps('area')}
                                        />
                                        {formik.touched.area && formik.errors.area ? (
                                            <span>{formik.errors.area}</span>
                                        ) : null}
                                    </div>

                                </div>
                                <h6 className='mt-5'>Car information</h6><hr />
                                <div className='row g-3'>
                                    <div class="col-md-4">
                                        <label for="inputEmail4" class="form-label">Name</label>
                                        <input type="text" name='carName' class="form-control" id="inputEmail4"
                                            {...formik.getFieldProps('carName')}
                                        />
                                        {formik.touched.carName && formik.errors.carName ? (
                                            <span>{formik.errors.carName}</span>
                                        ) : null}
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputEmail4" class="form-label">Model</label>
                                        <input type="text" name='carModel' class="form-control" id="inputEmail4"
                                            {...formik.getFieldProps('carModel')}
                                        />
                                        {formik.touched.carModel && formik.errors.carModel ? (
                                            <span>{formik.errors.carModel}</span>
                                        ) : null}
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputEmail4" class="form-label">Name Palate</label>
                                        <input type="text" name='namePalate' class="form-control" id="inputEmail4"
                                            {...formik.getFieldProps('namePalate')}
                                        />
                                        {formik.touched.namePalate && formik.errors.namePalate ? (
                                            <span>{formik.errors.namePalate}</span>
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

export default Rider

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