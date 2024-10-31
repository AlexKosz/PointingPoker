import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSearchParams } from 'react-router-dom';
import searchParamOptions from '../../utils/consts/searchParamOptions';
import UserProfile from './components/UserProfile';
import VoteControls from './components/VoteControls';
import MainContent from './components/mainContent/MainContent';
import Modal from './components/modal/Modal';

const socket = io('http://localhost:3001'); // Replace with your server URL

const ChatRoom = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams);
	const room = searchParams.get(searchParamOptions.ROOM);
	console.log(room);

	const [users, setUsers] = useState([]);
	const [userId, setUserId] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [selectedValue, setSelectedValue] = useState(null);

	useEffect(() => {
		if (!room) {
			return;
		}
		// Join the room
		// Change to name & room
		socket.emit('joinRoom', room);

		// Receive user list when joining the room
		socket.on('userList', (users) => {
			setUsers(users);
			setUserId(socket.id); // Set the user ID once connected
		});

		// Receive notification when a user joins
		socket.on('userJoined', (newUserId) => {
			console.log('new user joined');
			setUsers((prevUsers) => [...prevUsers, newUserId]);
		});

		// Receive notification when a user leaves
		socket.on('userLeft', (leftUserId) => {
			setUsers((prevUsers) => prevUsers.filter((id) => id !== leftUserId));
		});

		// Clean up on unmount
		return () => {
			socket.off('userList');
			socket.off('userJoined');
			socket.off('userLeft');
		};
	}, [room]);

	return (
		<div
			style={{
				marginTop: '20vh',
			}}
		>
			<UserProfile />
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
					<li key={user}>{user === userId ? 'You' : user}</li>
				))}
			</ul>
		</div>
	);
};

export default ChatRoom;
