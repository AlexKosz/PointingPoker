import React from 'react';

const VotingProgress = ({ progress }) => {
	const voteProgressPercent = Math.floor((progress || 0) * 100);
	return (
		<div className='voting-progress'>
			<p className='progress-title'>Voting Progress</p>
			<div className='progress-bar-container'>
				<div
					className='progress-bar'
					style={{
						width: `${voteProgressPercent}%`,
					}}
				></div>
			</div>
			<p className='progress-percentage'>
				{`${voteProgressPercent}%`} of participants have voted
			</p>
		</div>
	);
};

export default VotingProgress;
