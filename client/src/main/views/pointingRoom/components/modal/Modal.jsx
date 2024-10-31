import React from 'react';

const Modal = ({ closeModal }) => {
	return (
		<div
			className='modal'
			id='resultsModal'
		>
			<div className='modal-content'>
				<span
					onClick={closeModal}
					className='close close-modal'
				>
					&times;
				</span>
				<h2 className='modal-title'>Voting Results</h2>

				<div className='modal-body'>
					<p className='average-score'>
						<strong>Average Score:</strong> 5
					</p>
					<p className='suggested-score'>
						<strong>Suggested Score:</strong> 7
					</p>
					<p className='standard-deviation'>
						<strong>Standard Deviation:</strong> 1.5
					</p>

					<table className='results-table'>
						<thead>
							<tr className='table-header'>
								<th className='header-score'>Score</th>
								<th className='header-votes'>Votes</th>
								<th className='header-users'>Users</th>
							</tr>
						</thead>
						<tbody>
							<tr className='table-row'>
								<td className='score-value'>5</td>
								<td className='vote-count'>3</td>
								<td className='user-list'>User1, User2, User3</td>
							</tr>
							<tr className='table-row'>
								<td className='score-value'>7</td>
								<td className='vote-count'>5</td>
								<td className='user-list'>User4, User5, User6</td>
							</tr>
							<tr className='table-row'>
								<td className='score-value'>8</td>
								<td className='vote-count'>2</td>
								<td className='user-list'>User7, User8</td>
							</tr>
						</tbody>
					</table>
				</div>

				<button className='consensus-button'>Next Round</button>
			</div>
		</div>
	);
};

export default Modal;
