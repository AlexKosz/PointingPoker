const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);
const usersInRoom = {}; // Keep track of users in each room

const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log(`User Connected: ${socket.id}`);

	socket.on("joinRoom", (data) => {
		console.log("D", data);
		const room = data?.room;
		socket.join(data);

		if (!usersInRoom[room]) {
			usersInRoom[room] = [];
		}

		usersInRoom[room].push(socket.id);
		console.log(usersInRoom[room]);
		io.emit("userList", usersInRoom[room]);
		io.to(room).emit("userJoined", socket.id);

		socket.on("disconnect", () => {
			// Remove user from the room list
			usersInRoom[room] = usersInRoom[room].filter((id) => id !== socket.id);
			if (usersInRoom[room].length === 0) {
				delete usersInRoom[room];
			} else {
				// Notify other users in the room about the user leaving
				socket.to(room).emit("userLeft", socket.id);
			}
		});
	});

	socket.on("sendMessage", (data) => {
		console.log(data);
		socket.to(data.room).emit("recMessage", data);
	});
});

server.listen(3001, () => {
	console.log("SERVER IS RUNNING");
});
