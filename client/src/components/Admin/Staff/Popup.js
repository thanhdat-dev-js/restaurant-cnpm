import classNames from "classnames";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

const SERVER = "http://localhost:4000/";

export default function Popup(props) {
  const [content, setContent] = useState(props.data);

  const [flag, setFlag] = useState(false);

  const ADD_NEW = -1;

  function getUser() {
    try {
      let reqOptions = {
        url: SERVER + "admin/employee/email?q=" + content.email,
        method: "GET",
      };
      axios.request(reqOptions).then(function (response) {
        setContent({ ...response.data });
        setFlag(true);
      });
    } catch (e) {
      console.log(e);
    }
  }

  function putEmployee() {
    try {
      let reqOptions = {
        url: SERVER + "admin/employee/email?q=" + content.email,
        method: "PUT",
        data: content,
      };
      axios.request(reqOptions).then(function () {
        props.closeModal();
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={classNames("am-modal", { open: props.showModal })}>
      <div className="am-form">
        <div className="am-form-header">
          {props.current === ADD_NEW ? (
            <h2>Tìm người</h2>
          ) : (
            <h2>Chỉnh sửa nhân sự</h2>
          )}

          <div>
            <Button color="primary" variant="contained" onClick={putEmployee}>
              Lưu thay đổi
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={props.closeModal}
            >
              Huỷ
            </Button>
          </div>
        </div>

        {props.current === ADD_NEW && (
          <div className="am-form-search am-form-add">
            <TextField
              label="Tìm theo email"
              variant="outlined"
              InputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              onChange={(e) =>
                setContent({ ...content, email: e.target.value })
              }
            />

            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setFlag(false);
                getUser();
              }}
            >
              Tìm
            </Button>
          </div>
        )}

        {(props.current !== ADD_NEW || flag) && (
          <div className="am-form-add">
            <h2>Thông tin</h2>
            <TextField
              disabled
              label="Username"
              defaultValue={content?.username}
              variant="outlined"
              margin="dense"
              fullWidth
              InputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              onChange={(e) =>
                setContent({ ...content, username: e.target.value })
              }
            />
            <TextField
              disabled
              label="Email"
              defaultValue={content?.email}
              variant="outlined"
              margin="dense"
              fullWidth
              InputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              onChange={(e) =>
                setContent({ ...content, email: e.target.value })
              }
            />

            <InputLabel id="role-select">Quyền</InputLabel>
            <Select
              value={content?.permission}
              labelId="role-select"
              variant="outlined"
              onChange={(e) => {
                setContent({ ...content, permission: e.target.value });
              }}
            >
              <MenuItem value="customer" style={{ fontSize: "14px" }}>
                Customer
              </MenuItem>
              <MenuItem value="kitchen" style={{ fontSize: "14px" }}>
                Kitchen
              </MenuItem>
              <MenuItem value="clerk" style={{ fontSize: "14px" }}>
                Clerk
              </MenuItem>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
}
