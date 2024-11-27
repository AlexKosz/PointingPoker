import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import VoteControls from './components/VoteControls';
import MainContent from './components/mainContent/MainContent';
import Modal from './components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '../../../actions/userActions';
import paths from '../../utils/consts/paths';

const socket = io('http://localhost:3001'); // Replace with your server URL

const PointingRoom = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams);
	console.log(useParams());
	const { room } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [users, setUsers] = useState([]);
	const [userId, setUserId] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [selectedValue, setSelectedValue] = useState(null);

	const user = useSelector((state) => state.user.user);
	console.log('USER:', user);

	useEffect(() => {
		if (!user) {
			navigate(paths.login);
		}

		if (user) {
			console.log(room);
			socket.emit('joinRoom', room, user);
		}
	}, [user]);

	useEffect(() => {
		socket.on('userList', (data) => {
			console.log('server sent back', data);
			setUsers(data);
		});
	}, [socket]);

	return (
		<div
			style={{
				marginTop: '20vh',
			}}
		>
			<UserProfile user={user} />
			<VoteControls openModal={() => setIsModalOpen(true)} />
			<MainContent
				selectedValue={selectedValue}
				selectValue={(v) => setSelectedValue(v)}
			/>
			{isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
			<h1>Room: {room || 'No room found'}</h1>
			<h2>Users in Room</h2>
			<ul>
				{users.map((user) => (
					<li key={user}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default PointingRoom;
