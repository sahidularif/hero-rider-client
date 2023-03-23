import React from 'react';
import { DashboardWrapper } from './riderAccount';
import { styled, useStyletron } from 'baseui';
import {
    LabelLarge,
    MonoLabelLarge,
    ParagraphMedium,
} from 'baseui/typography';
import { Input } from 'baseui/input';
import { FormControl } from 'baseui/form-control';
import { Link } from 'react-router-dom';
const RiderType = () => {
    const [css] = useStyletron();
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
                    <MonoLabelLarge>Create an account</MonoLabelLarge>
                    <div className={css({
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        margin: '50px',                        
                        fontSize: '1.2rem'
                    })}>
                        <div className={css({
                            padding: '20px',
                            background: 'black',
                            margin: '0px auto',
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
                            cursor: 'pointer',
                            minWidth: '150px',
                            border: '1px solid gray',
                            borderRadius: '50px'
                        })}>
                            <Link to="/rider" style={{textDecoration: 'none', color: 'white', fontWeight: 'normal'}}>Sign up as a rider</Link>
                        </div>
                        <div className={css({
                            padding: '20px',
                            background: 'powderblue',
                            margin: '0px auto',
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
                            cursor: 'pointer',
                            minWidth: '150px',
                            borderRadius: '50px'
                        })}>
                            <Link to="/learner" style={{textDecoration: 'none', color: 'black', fontWeight: 'normal'}}>Sign up as a learner</Link>
                        </div>
                    </div>

                </div>

                <div style={{ height: 'auto', width: '100%' }}>
                    {/* rows={leads.map(r => ({ id: r[0], data: r }))} */}
                    {/* <Data /> */}
                </div>
            </div>
        </div>
    );
};

export default RiderType;