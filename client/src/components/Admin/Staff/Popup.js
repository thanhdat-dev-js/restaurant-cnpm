import classNames from "classnames";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

const SERVER = "http://localhost:4000/";

export default function Popup(props) {
  const [content, setContent] = useState(props.data);

  const ADD_NEW = -1;

  function getUser() {
    setContent("user");
  }

  function putEmployee() {
    alert("Thành công");
    props.closeModal();
  }

  return (
    <div className={classNames("am-modal", { open: props.showModal })}>
      {props.current == ADD_NEW ? (
        <div className="am-form">
          <div className="am-form-header">
            <h2>Tìm người</h2>
            <div>
              <Button color="primary" variant="contained">
                Lưu thay đổi
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={props.closeModal}
              >
                Thoát
              </Button>
            </div>
          </div>

          <div className="am-form-search">
            <TextField
              label="Tìm theo email"
              variant="outlined"
              onChange={(e) =>
                setContent({ ...content, email: e.target.value })
              }
            />

            <Button color="secondary" variant="contained" onClick={getUser}>
              Tìm
            </Button>
          </div>
        </div>
      ) : (
        <div className="am-form">
          <div className="am-form-header">
            <h2>Chỉnh sửa nhân sự</h2>

            <div>
              <Button color="primary" variant="contained" onClick={putEmployee}>
                Lưu thay đổi
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={props.closeModal}
              >
                Thoát
              </Button>
            </div>
          </div>

          <TextField
            label="Username"
            defaultValue={content.username}
            variant="outlined"
            margin="dense"
            fullWidth="true"
            onChange={(e) =>
              setContent({ ...content, username: e.target.value })
            }
          />
          <TextField
            label="Email"
            defaultValue={content.email}
            variant="outlined"
            margin="dense"
            fullWidth="true"
            onChange={(e) => setContent({ ...content, email: e.target.value })}
          />
          <TextField
            label="Quyền"
            defaultValue={content.permission}
            variant="outlined"
            margin="dense"
            fullWidth="true"
            onChange={(e) =>
              setContent({ ...content, permission: e.target.value })
            }
          />
        </div>
      )}
    </div>
  );
}
