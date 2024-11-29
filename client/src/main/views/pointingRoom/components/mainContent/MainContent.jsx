import React from 'react';
import VotingArea from './VotingArea';
import VotingProgress from './VotingProgress';
import ParticipantList from './ParticipantList';

const MainContent = ({ selectValue, selectedValue, participants }) => {
	return (
		<main className="main-content">
			<VotingArea
				selectValue={selectValue}
				selectedValue={selectedValue}
			/>
			<VotingProgress progress={Math.random()} />

			<ParticipantList participants={participants} />
		</main>
	);
};

export default MainContent;
