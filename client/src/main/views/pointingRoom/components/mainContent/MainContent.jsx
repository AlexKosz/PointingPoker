import React from 'react';
import VotingArea from './VotingArea';
import VotingProgress from './VotingProgress';
import ParticipantList from './ParticipantList';

const MainContent = () => {
	return (
		<main className='main-content'>
			<VotingArea />
			<VotingProgress progress={Math.random()} />
			<ParticipantList />
		</main>
	);
};

export default MainContent;
