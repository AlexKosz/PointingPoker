import React from 'react';
import Participant from './Participant';

const ParticipantList = ({ participants }) => {
	return (
		<section className="participant-list">
			{(participants || []).map((value, index) => (
				<Participant
					name={value.name}
					hasVoted={value.vote !== undefined}
					vote={value.vote} // TODO: REMOVE
					key={index}
				/>
			))}
		</section>
	);
};

export default ParticipantList;
