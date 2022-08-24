import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};
interface ModalProps {
	children: string;
}

export const ModalEdit = ({ children }: ModalProps): JSX.Element => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Button variant="outlined" endIcon={<SendIcon />} onClick={handleOpen}>
				{children}
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="parent-modal-title"
				aria-describedby="parent-modal-description"
			>
				<Box sx={{ ...style, width: 400 }}>
					<h2 id="parent-modal-title">Text in a modal</h2>
					<p id="parent-modal-description">
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</p>
				</Box>
			</Modal>
		</div>
	);
};
