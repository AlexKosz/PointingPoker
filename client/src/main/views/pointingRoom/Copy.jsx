import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import {
	Route,
	Routes,
	unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { history } from "../../utils/navigator";

const socket = io.connect("http://localhost:3001");

function PointingRoom() {
	//Room State
	const [room, setRoom] = useState("");

	// Messages States
	const [message, setMessage] = useState("");
	const [messageReceived, setMessageReceived] = useState("");

	const joinRoom = () => {
		if (room !== "") {
			socket.emit("joinRoom", room);
		}
	};

	const sendMessage = () => {
		socket.emit("sendMessage", { message, room, user: "alex" });
	};

	useEffect(() => {
		socket.on("recMessage", (data) => {
			console.log(data);
			setMessageReceived(data.message);
		});
	}, [socket]);

	return (
		<div className="App">
			<h1>AAAAAAAAAAAAAAAAAAAAA</h1>
			<input
				placeholder="Room Number..."
				onChange={(event) => {
					setRoom(event.target.value);
				}}
			/>
			<button onClick={joinRoom}> Join Room</button>
			<input
				placeholder="Message..."
				onChange={(event) => {
					setMessage(event.target.value);
				}}
			/>
			<button onClick={sendMessage}> Send Message</button>
			<h1> Message:</h1>
			{messageReceived}
		</div>
	);
}

export default PointingRoom;
