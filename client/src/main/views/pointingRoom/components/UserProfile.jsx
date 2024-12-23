import React from 'react';
import { getInitials } from '../../../utils/helperFuncs';

const UserProfile = ({ user }) => {
	return (
		<section className="user-profile">
			<div className="avatar">{getInitials(user?.name)}</div>
			<span className="user-name">{user?.name}</span>
		</section>
	);
};

export default UserProfile;
