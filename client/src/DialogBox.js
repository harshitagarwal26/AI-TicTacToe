import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const DialogBox = ({ winner }) => {
const [open, setOpen] = React.useState(true);

const handleClose = () => {
	setOpen(false);
};

return (
	<div>
	<Dialog open={open} onClose={handleClose}>
		<DialogContent>
		<DialogContentText style={{fontFamily:'quicksand', color:'black'}}>
			{(winner!=='tie') ? `${(winner === 'O')? `AI has won the game!` : `Human has won the game`}` : `The game is tied`}
		</DialogContentText>
		</DialogContent>
		<DialogActions>
		<Button onClick={handleClose} color="primary">
		Close
		</Button>
		</DialogActions>
	</Dialog>
	</div>
);
}

export default DialogBox;
