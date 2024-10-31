import React from 'react';

const VoteControls = ({ openModal }) => {
	return (
		<section className='vote-controls'>
			<button
				onClick={openModal}
				className='reveal-votes'
				data-testid='revealButton'
			>
				Reveal Votes
			</button>
			<button
				className='clear-votes'
				data-testid='clearVotes'
			>
				Clear Votes
			</button>
		</section>
	);
};

export default VoteControls;
