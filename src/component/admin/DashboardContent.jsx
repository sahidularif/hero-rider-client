import { useStyletron } from 'baseui';
import React, { useEffect, useState } from 'react';
import { Button } from 'baseui/button';
import { StatefulSelect } from 'baseui/select';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
} from 'baseui/modal';

import {
    LabelLarge,
    ParagraphMedium,
} from 'baseui/typography';
import Data from './Data';
import Pagination from '../Pagination/pagination';
import Search from '../Search/search';
import axios from 'axios';
import { useAuth } from '../../auth/auth';
import { isAuthenticated } from '../../auth/authService';
const BASE_URL = `http://localhost:4004/api/allUser`;
export const API_URL = `https://light-sweatsuit-mite.cyclic.app/`
const DashboardContent = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");
    const [css] = useStyletron();
    const [page, setPage] = React.useState(1)
    const [search, setSearch] = useState("");
    const [limit, setLimit] = React.useState(10)
    const [rows, setRows] = React.useState({
        limit: 10,
        page: 1,
        total: 0,
        user: []
    });

    useEffect(() => {
        const getAllUser = async () => {
            try {
                const url = `${API_URL}api/allUser?page=${page}&limit=${limit}&search=${search}&renge=${value}`;
                const res = await axios.get(url);
                console.log(res)
                let users = res.data.user.map(user => {
                    return {
                        profile: user.profilePicture,
                        fullname: user.fullname,
                        email: user.email,
                        phone: user.phone,
                        age: user.age,
                        nidPicture: user.nidPicture,
                        vehicleType: user.vehicleType,
                        address: user.address,
                    }
                })
                setRows({
                    limit: res.data.limit,
                    page: res.data.page,
                    total: res.data.total,
                    user: users,
                });
            } catch (err) {
                console.log(err);
            }
        };

        getAllUser();
    }, [value, page, search]);

    console.log(rows)
    return <div className={css({
        width: '100%',
        borderRadius: '0.5rem',
        background: '#fff',
        border: "1px solid #DFE0EB",
        overflow: 'hidden',
        '@media (max-width: 768px)': {
            margin: '0 1.5rem'
        }
    })}>
        <div className={css({
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        })}>
            <Search setSearch={(search) => setSearch(search)} />

            <div className={css({
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                // width: '20%'
            })}>


                <React.Fragment>
                    <Button
                        onClick={() => {
                            setIsOpen(true);
                        }}
                    >
                        Filter by Age
                    </Button>
                    <Modal
                        onClose={() => {
                            setIsOpen(false);
                        }}
                        isOpen={isOpen}
                    >
                        <ModalHeader>Date range</ModalHeader>
                        <ModalBody>
                            <StatefulSelect
                                options={[
                                    { id: '18-25', age: '18-25' },
                                    { id: '26-30', age: '26-30' },
                                ]}
                                labelKey="id"
                                valueKey="age"
                                onChange={event => {
                                    console.log(event)
                                    setValue(event.value[0].age)
                                }}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <ModalButton
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                Cancel
                            </ModalButton>
                            <ModalButton
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                Okay
                            </ModalButton>
                        </ModalFooter>
                    </Modal>
                </React.Fragment>
            </div>
        </div>

        <div style={{ height: 'auto', width: '100%' }}>
            <Data items={rows} />
            <Pagination
                page={page}
                limit={rows.limit ? rows.limit : 0}
                total={rows.total ? rows.total : 0}
                setPage={(page) => setPage(page)}
            />
        </div>
        <div className='border'>

        </div>
    </div>;
};

export default DashboardContent;
