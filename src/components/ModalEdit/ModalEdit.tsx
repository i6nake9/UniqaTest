import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Form } from '../Form/Form';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};
interface ModalProps {
	children: string;
	onSubmit: (data: any) => void;
}

export const ModalEdit = ({ children, onSubmit }: ModalProps): JSX.Element => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Button
				style={{ margin: '25px 0 0 25px' }}
				variant="outlined"
				endIcon={<SendIcon />}
				onClick={handleOpen}
			>
				{children}
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="parent-modal-title"
				aria-describedby="parent-modal-description"
			>
				<Box sx={{ ...style, width: 400 }}>
					<Form onSubmit={onSubmit} />
				</Box>
			</Modal>
		</div>
	);
};
