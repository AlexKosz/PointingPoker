import React from 'react';
import { getInitials } from '../../../../utils/helperFuncs';

const Participant = ({ name, hasVoted, vote }) => {
	const hasVotedClass = hasVoted ? 'avatar voted' : 'avatar notVoted';
	return (
		<div className="participant">
			<div className={hasVotedClass}>{getInitials(name) || ''}</div>
			<span className="participant-name">{name}</span>
			<span className="vote-status">
				{hasVoted ? 'Voted' : 'Not yet voted'}
			</span>
			<h4>{vote}</h4>
		</div>
	);
};

export default Participant;
