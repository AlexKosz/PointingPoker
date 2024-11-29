import './App.css';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../actions/userActions';
import { useNavigate } from 'react-router-dom';
import paths from '../../utils/consts/paths';

const socket = io.connect('http://localhost:3001');

function Login() {
	//Room State
	const [room, setRoom] = useState('');
	const [name, setName] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector((store) => store?.user?.user);

	const joinRoom = () => {
		if (name === '' && room === '') {
			alert('You need to enter your name and a room ID');
			return;
		} else if (name === '') {
			alert('You need to enter your name');
			return;
		} else if (room === '') {
			alert('You need to enter a room ID');
			return;
		}

		console.log('Data was valid', 'Room:', room, 'Name:', name);

		const newUser = { name: name };

		dispatch(setUser(newUser));
	};

	useEffect(() => {
		console.log('User changed in redux', user, '<- new val');
		if (user?.name !== '' && room !== '') {
			console.log('try to navigate to new room', room, '<- room attempted');
			navigate(`${paths.room(room)}`);
		}
	}, [user]);

	// useEffect(() => {
	// 	socket.on('userList', (data) => {
	// 		console.log('server sent back', data);
	// 	});
	// }, [socket]);

	return (
		<div className="login">
			<input
				placeholder="Your name"
				onChange={(event) => {
					setName(event.target.value);
				}}
			/>

			<hr />

			<input
				placeholder="Room"
				onChange={(event) => {
					setRoom(event.target.value);
				}}
			/>

			<hr />

			<button onClick={joinRoom}> Join Room</button>
		</div>
	);
}

export default Login;
