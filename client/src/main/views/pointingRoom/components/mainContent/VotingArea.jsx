import React from 'react';
import PointCard from './PointCard';

const VotingArea = () => {
	const voteNumbers = [0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<section className='voting-area'>
			<div className='point-cards'>
				{voteNumbers.map((value, index) => (
					<PointCard
						value={value}
						key={value || index}
					/>
				))}
			</div>
			<button className='abstain-button'>Abstain</button>
		</section>
	);
};

export default VotingArea;
