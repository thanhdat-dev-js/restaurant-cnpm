import React from 'react';
import '../scss/reservedelete.scss';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Delete from '@material-ui/icons/Delete'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><Delete fontSize="large"/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <div className="delete-title">
            <p>Are you sure?</p>
          </div>

          <div className="delete-description">
            <p>Do you want to delete this reservation?</p>
          </div>

          <div className="modal-btn">
            <div className="btn">
              <Button variant="contained" size="large" color="secondary">Delete</Button>
            </div>
            
            <div className="btn">
              <Button variant="contained" size="large" onClick={handleClose}>Cancel</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}