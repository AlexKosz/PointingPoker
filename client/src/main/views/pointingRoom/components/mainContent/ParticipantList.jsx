import React from 'react';
import Participant from './Participant';

const ParticipantList = () => {
	const participants = [
		{
			name: 'Mike Jenner',
			hasVoted: false,
		},
		{
			name: 'Kyle Sam',
			hasVoted: true,
		},
		{
			name: 'Tyler Root',
			hasVoted: true,
		},
		{
			name: 'Anna Kendrick',
			hasVoted: true,
		},
	];

	return (
		<section className='participant-list'>
			{participants.map((value, index) => (
				<Participant
					name={value.name}
					hasVoted={value.hasVoted}
					key={index}
				/>
			))}
		</section>
	);
};

export default ParticipantList;
