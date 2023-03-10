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

                {
                    avatar ?
                        <img style={{ borderRadius: '50%' }} src={avatar} alt="avatar" className="img-fluid" />
                        :
                        <img style={{ borderRadius: '50%' }} src='https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png' alt="avatar" className="img-fluid" />
                }
            </div>
            <h5>{profile?.firstName} {profile?.lastName}</h5>
        </div>
    );
};

export default UsersCard;