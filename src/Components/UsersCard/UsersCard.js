import React from 'react';

const UsersCard = ({ user, setUserDetails, i, active }) => {
    const { avatar, profile } = user;
    const { index, setIndex } = active;

    return (
        <div
            onClick={() => {
                setUserDetails(user)
                setIndex(i)
            }}
            style={{ cursor: 'pointer' }}
            className={`${index === i && 'active'} d-flex align-items-center border rounded mb-3 p-1`}>
            <div
                style={{ width: '40px' }}
                className="image me-3">
                <img style={{ borderRadius: '50%' }} src={avatar} alt="avatar" className="img-fluid" />
            </div>
            <h5 className='name m-0'>{profile?.firstName} {profile?.lastName}</h5>
        </div>
    );
};

export default UsersCard;