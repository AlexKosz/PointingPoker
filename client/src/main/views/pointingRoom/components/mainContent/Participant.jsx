import React from 'react';

const getInitials = (name) => {
	const firstInitial = name[0];
	const spaceIndex = name.indexOf(' ');
	const lastInitial = name[spaceIndex + 1];
	return firstInitial + lastInitial;
};

const Participant = ({ name, hasVoted }) => {
	const hasVotedClass = hasVoted ? 'avatar voted' : 'avatar notVoted';
	return (
		<div className='participant'>
			<div className={hasVotedClass}>{getInitials(name) || ''}</div>
			<span className='participant-name'>{name}</span>
			<span className='vote-status'>
				{hasVoted ? 'Voted' : 'Not yet voted'}
			</span>
		</div>
	);
};

export default Participant;
