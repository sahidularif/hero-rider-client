import React from 'react';
import { isAuthenticated } from '../../auth/authService';
import jwtDecode from 'jwt-decode';
import './pricing.css';

const UserContent = () => {
    const jwt = isAuthenticated()
    const decodedToken = jwtDecode(jwt);
    console.log(decodedToken.user)
    const type = decodedToken.user.userType
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            {
                type === 'learner' ? (
                    <div class="row">
                        <div class="col-sm-4 mb-2 mb-sm-0">
                            <div class="card">
                                <div class="card-header text-center text-bg-secondary py-3">
                                    <h4 class="my-0 fw-normal">Car</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">$200<small class="text-muted fw-light">/year</small></h1>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="w-100 btn btn-secondary">Purchase</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-header py-3 text-center text-bg-primary">
                                    <h4 class="my-0 fw-normal">Bike</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">$100<small class="text-muted fw-light">/year</small></h1>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="btn w-100 btn-primary">Purchase</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                    :
                    (
                        <h1>Welcome To Hero Rider</h1>
                    )
            }
        </div>
    );
};

export default UserContent;