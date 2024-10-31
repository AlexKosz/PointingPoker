import React from 'react';

const VoteControls = ({ openModal }) => {
	return (
		<section className='vote-controls'>
			<button
				onClick={openModal}
				className='reveal-votes'
			>
				Reveal Votes
			</button>
			<button className='clear-votes'>Clear Votes</button>
		</section>
	);
};

export default VoteControls;
