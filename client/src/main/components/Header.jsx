import React from 'react';
import { useParams } from 'react-router-dom';

const Header = () => {
	const { room } = useParams();

	return (
		<header className="header">
			<h1>Pointing Poker</h1>
			<h4>Room: {room} </h4>
		</header>
	);
};

export default Header;
