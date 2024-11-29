const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

app.use(cors());

const server = http.createServer(app);
const usersInRoom = {}; // Keep track of users in each room

const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
});

io.on('connection', (socket) => {
	socket.on('joinRoom', (room, user) => {
		socket.join(room);

		const newUser = { name: user?.name, id: socket.id };

		if (!usersInRoom[room]) {
			usersInRoom[room] = [newUser];
		} else if (!usersInRoom[room].some((user) => user.id === socket.id)) {
			console.log('should add');
			console.log(usersInRoom[room], socket.id);
			usersInRoom[room].push(newUser);
		}

		io.emit('userList', usersInRoom[room]);
		io.to(room).emit('userJoined', newUser);
	});

	socket.on('vote', (room, user, value) => {
		console.log(socket.id, value, user, usersInRoom[room]);
	});

	// socket.on('disconnect', () => {
	// 	// Remove user from the room list
	// 	usersInRoom[room] = usersInRoom[room].filter((id) => id !== socket.id);
	// 	if (usersInRoom[room].length === 0) {
	// 		delete usersInRoom[room];
	// 	} else {
	// 		// Notify other users in the room about the user leaving
	// 		socket.to(room).emit('userLeft', socket.id);
	// 	}
	// });

	socket.on('sendMessage', (data) => {
		console.log(data);
		socket.to(data.room).emit('recMessage', data);
	});
});

server.listen(3001, () => {
	console.log('SERVER IS RUNNING');
});
