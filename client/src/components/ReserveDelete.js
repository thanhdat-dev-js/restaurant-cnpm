import {useState} from 'react';
import '../scss/reservedelete.scss';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Delete from '@material-ui/icons/Delete'
import axios from 'axios';
const SERVER = "http://localhost:4000/";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: window.innerWidth <= 500 ? '80%' : (window.innerWidth <= 800 ? '50%' : '35%'),
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
    try {
        let req = {
          url: SERVER + "reserve/" + id,
          method: "DELETE",
        };
        axios.request(req);
    } catch (err) {
        console.log(err);
    }
    setOpen(false);
    window.location.reload(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}><Delete fontSize={window.innerWidth <= 500 ? "medium" : "large" }/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <div className="delete-title">
            <p>Bạn có chắc không?</p>
          </div>

          <div className="delete-description">
            <p>Có phải bạn đang muốn xóa thông tin đặt bàn này?</p>
          </div>

          <div className="modal-btn">
            <div className="btn">
              <Button variant="contained" size="large" color="secondary" onClick={() => handleDelete(props.id)}>Xóa</Button>
            </div>
            
            <div className="btn">
              <Button variant="contained" size="large" onClick={handleClose}>Hủy</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}