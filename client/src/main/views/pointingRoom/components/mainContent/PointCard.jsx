import React from 'react';

const PointCard = ({ value, selectValue, isSelected }) => {
	const cardClass = isSelected ? 'point-card voted' : 'point-card';
	return (
		<button
			onClick={() => selectValue(value)}
			className={cardClass}
			data-testid='pointCard'
		>
			{value}
		</button>
	);
};

export default PointCard;
