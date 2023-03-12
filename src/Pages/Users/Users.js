import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Loader from '../../Components/Loader/Loader';
import UsersCard from '../../Components/UsersCard/UsersCard';

const Users = () => {
    const [allUsers, setAllUsers] = useState(null);
    const [userDetails, setUserDetails] = useState();
    const [index, setIndex] = useState();
    const active = {
        index,
        setIndex
    }

    useEffect(() => {
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then((res) => {
                // console.log(res.data);
                setAllUsers(res.data)
            })
    }, [])

    return (
        <div>
            <Container>
                <Row className='py-1 py-lg-5 g-1 g-lg-4'>
                    <Col lg={6} className='order-2 order-lg-1'>
                        <div className='border rounded p-3 pb-4 shadow-colored'>
                            <h2 className='text-center heading'>User List</h2>
                            <div
                                style={{ maxHeight: '78vh', overflowY: 'scroll' }}
                                className='p-3'>

                                {
                                    allUsers == null && <Loader />
                                }

                                {
                                    allUsers === 0 && <p>No data found</p>
                                }

                                {
                                    allUsers?.sort((a, b) => {
                                        if (a.profile.firstName < b.profile.firstName) {
                                            return -1;
                                        }
                                        else return 1;
                                    }).map((user, i) => <UsersCard key={i} i={i} active={active} user={user} setUserDetails={setUserDetails} />)
                                }

                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='order-1 order-lg-2'>
                        <div className='border rounded shadow-colored p-3 h-100'>
                            <h2 className='text-center heading'>User Details</h2>

                            <div className="text-center py-0 py-lg-3">
                                <div className='image-wrapper'>
                                    <img style={{ borderRadius: '50%' }} src={userDetails?.avatar} alt="avatar" className="img-fluid avatar-image" />
                                </div>
                            </div>
                            {
                                userDetails?.profile?.username ?
                                    <p className='pt-2 text-center'>@{userDetails?.profile?.username}</p>
                                    :
                                    <p className='pt-2 text-center'>username</p>
                            }
                            <div className="mb-1 mb-lg-3">
                                <textarea defaultValue={userDetails?.Bio} className='form-control' disabled></textarea>
                            </div>
                            <div className="mb-1 mb-lg-3">
                                <label htmlFor="">Full Name</label>

                                <input type="text" defaultValue={userDetails ? `${userDetails?.profile?.firstName} ${userDetails?.profile?.lastName}` : ''} className='form-control' disabled />

                            </div>
                            <div className="mb-1 mb-lg-3">
                                <label htmlFor="">Job Title</label>
                                <input type="text" defaultValue={userDetails?.jobTitle} className='form-control' disabled />
                            </div>
                            <div className="mb-1 mb-lg-3">
                                <label htmlFor="">Email</label>
                                <input type="text" defaultValue={userDetails?.profile?.email} className='form-control' disabled />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Users;