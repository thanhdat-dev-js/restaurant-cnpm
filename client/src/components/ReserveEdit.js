import React from 'react';
import '../scss/reserveedit.scss'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Edit from '@material-ui/icons/Edit'
import TextField from '@material-ui/core/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button  onClick={handleOpen}><Edit fontSize="large"/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <div className="title">
            <Typography id="modal-modal-title" variant="h3" style={{fontWeight: 'bold', color: '#000a43'}}>Edit Customer Reservation</Typography>    
          </div>

          <div className="form-edit">
            <TextField
                variant="outlined" 
                label="First Name" 
                type="text"
                fullWidth
                value={props.fname}
                InputProps={{style: {fontSize: 14}}}
                InputLabelProps={{style: {fontSize: 14}}}/>
          </div>

          <div className="form-edit">
            <TextField
                variant="outlined" 
                label="Last Name" 
                type="text"
                fullWidth
                value={props.lname}
                InputProps={{style: {fontSize: 14}}}
                InputLabelProps={{style: {fontSize: 14}}}/>
          </div>

          <div className="form-edit">
            <TextField
                variant="outlined" 
                label="Phone Number" 
                type="text"
                fullWidth
                value={props.phone}
                InputProps={{style: {fontSize: 14}}}
                InputLabelProps={{style: {fontSize: 14}}}/>
          </div>

          <div className="form-edit">
            <TextField
                variant="outlined" 
                label="Email address" 
                type="text"
                fullWidth
                value={props.email}
                InputProps={{style: {fontSize: 14}}}
                InputLabelProps={{style: {fontSize: 14}}}/>
          </div>

          <div className="btn-edit">
            <Button variant="contained" fullWidth style={{ fontSize: 14, padding: 12}} color="secondary">Save changes</Button>
          </div>
          
          <div className="note">
              <p>*Note: If you want to change date and time, please delete this reservation and make a new reservation.</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}