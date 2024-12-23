import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import PointCard from '../PointCard';

describe('PointCard', () => {
	// test('calls openModal when reveal votes button is clicked', () => {
	// 	const openModal = jest.fn();
	// 	render(<VoteControls openModal={openModal} />);
	// 	const button = screen.getByTestId('revealButton');
	// 	fireEvent.click(button);
	// 	expect(openModal).toHaveBeenCalledTimes(1);
	// });

	test('value is rendered', async () => {
		const value = 8;
		render(<PointCard value={value} />);
		const textMatch = await screen.findByText('8');
		expect(textMatch).toBeVisible();
	});

	test('select value is called when point card is clicked', async () => {
		const value = 8;
		const selectValue = jest.fn();
		render(
			<PointCard
				value={value}
				selectValue={selectValue}
			/>
		);
		const card = screen.getByTestId('pointCard');
		fireEvent.click(card);
		expect(selectValue).toHaveBeenCalledWith(8);
		expect(selectValue).toHaveBeenCalledTimes(1);
	});
});
