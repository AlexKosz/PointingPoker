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
import Header from '../../components/Header';

const socket = io('http://localhost:3001'); // Replace with your server URL

const PointingRoom = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { room } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [users, setUsers] = useState([]);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const [selectedValue, setSelectedValue] = useState(null);

	const user = useSelector((state) => state.user.user);

	useEffect(() => {
		if (!user) {
			navigate(paths.login);
		}

		if (user) {
			socket.emit('joinRoom', room, user);
		}
	}, []);

	useEffect(() => {
		socket.on('iJoin', (data) => {
			console.log('ijoin server sent back', data);
			dispatch(setUser(data));
		});
	}, [socket]);

	useEffect(() => {
		socket.on('userList', (data) => {
			console.log('server sent back', data);
			setUsers(data);
			const userIndex = data.findIndex((element) => element.id === socket.id);
			setSelectedValue(data[userIndex].vote);
			console.log(userIndex);
		});
	}, [socket]);

	useEffect(() => {
		if (selectedValue || selectedValue !== null) {
			console.log('emiting vote', selectedValue);
			socket.emit('vote', room, user, selectedValue);
		}
	}, [selectedValue]);

	const clearVotes = () => {
		socket.emit('clearVotes', room);
		setSelectedValue(undefined);
	};

	return (
		<>
			<Header />
			<div className="mainRoomDiv">
				<UserProfile user={user} />
				<VoteControls
					openModal={() => setIsModalOpen(true)}
					clearVotes={clearVotes}
				/>
				<MainContent
					selectedValue={selectedValue}
					selectValue={(v) => setSelectedValue(v)}
					participants={users}
				/>
				{isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
			</div>
		</>
	);
};

export default PointingRoom;
