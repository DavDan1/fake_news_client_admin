import React from 'react';
import { Portal, Segment, Header } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { popupClose } from '../modules/popup';

const SuccessMessage = () => {
	const message = useSelector((state) => state.message);
	const popupOpen = useSelector((state) => state.successOpen);

	return (
		<Portal closeOnDocumentClick onClose={() => popupClose()} open={popupOpen}>
			<Segment
				inverted
				color='green'
				style={{
					left: '50%',
					position: 'fixed',
					top: '50%',
					transform: 'translate(-50%, -100%)',
					zIndex: 1000,
				}}>
				<Header>Success</Header>
				<p data-cy='success-message'>{message}</p>
			</Segment>
		</Portal>
	);
};

export default SuccessMessage;
