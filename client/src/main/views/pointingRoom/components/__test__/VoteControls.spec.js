import React from 'react';
import VoteControls from '../VoteControls';
import { render, screen, fireEvent } from '@testing-library/react';

describe('VoteControls', () => {
	test('calls openModal when reveal votes button is clicked', () => {
		const openModal = jest.fn();
		render(<VoteControls openModal={openModal} />);
		const button = screen.getByTestId('revealButton');
		fireEvent.click(button);
		expect(openModal).toHaveBeenCalledTimes(1);
	});

	// TODO: add test for clear votes click when added

	test('should contain reveal button', () => {
		const openModal = jest.fn();
		render(<VoteControls openModal={openModal} />);
		const button = screen.getByTestId('revealButton');
		expect(button).toBeInTheDocument();
	});

	test('should contain clear votes button', () => {
		const openModal = jest.fn();
		render(<VoteControls openModal={openModal} />);
		const button = screen.getByTestId('clearVotes');
		expect(button).toBeInTheDocument();
	});
});
