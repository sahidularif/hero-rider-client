import React from 'react'
import { styled } from 'baseui';
import Sidebar from './Sidebar';
import jwtDecode from 'jwt-decode';
import DashboardHeader from './DashboardHeader';
import DashboardContent from './DashboardContent';
import { isAuthenticated } from '../../auth/authService';
import UserContent from './UserContent';

const Dashboard = () => {
    const jwt = isAuthenticated()
    const decodedToken = jwtDecode(jwt);
    console.log(decodedToken.user)
    const isAdmin = decodedToken.user.isAdmin
    const [open, setOpen] = React.useState(false);

    return (
        <DashboardWrapper>
            <Sidebar open={open} setOpen={setOpen} />
            <DashboardHeader open={open} setOpen={setOpen} />
            {
                isAdmin ? (
                    <DashboardContent />
                )
                    :
                    (
                        <UserContent />
                    )
            }
        </DashboardWrapper>
    )
}

export default Dashboard

const DashboardWrapper = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: '#F7F8FC',
    position: 'relative',
    paddingLeft: '285px',
    paddingRight: '2rem',
    width: '100%',
    minHeight: '100vh',
    maxWidth: '100vw',
    boxSizing: 'border-box',

    '@media (max-width: 768px)': {
        paddingLeft: '0',
    }
});