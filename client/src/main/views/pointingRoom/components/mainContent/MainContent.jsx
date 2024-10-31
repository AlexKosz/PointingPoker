import React from 'react';
import VotingArea from './VotingArea';
import VotingProgress from './VotingProgress';
import ParticipantList from './ParticipantList';

const MainContent = ({ selectValue, selectedValue }) => {
	return (
		<main className='main-content'>
			<VotingArea
				selectValue={selectValue}
				selectedValue={selectedValue}
			/>
			<VotingProgress progress={Math.random()} />
			<ParticipantList />
		</main>
	);
};

export default MainContent;
