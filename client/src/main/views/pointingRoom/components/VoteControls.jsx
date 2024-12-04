import React from 'react';

const VoteControls = ({ openModal, clearVotes }) => {
	return (
		<section className="vote-controls">
			<button
				onClick={openModal}
				className="reveal-votes"
				data-testid="revealButton"
			>
				Reveal Votes
			</button>
			<button
				onClick={clearVotes}
				className="clear-votes"
				data-testid="clearVotes"
			>
				Clear Votes
			</button>
		</section>
	);
};

export default VoteControls;
