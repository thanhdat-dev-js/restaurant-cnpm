import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "../../../scss/clerk.scss";
import { Button, TextField } from "@material-ui/core";
import classNames from "classnames";

import verifyToken from "../../../midlewares/verifyToken";
// const SERVER = "http://localhost:4000/";

const formatDate = (dateString) => {
  return (
    new Date(dateString).toLocaleTimeString() +
    " " +
    new Date(dateString).toLocaleDateString()
  );
};

export default function Staff() {
  const [dataTag, setDataTag] = useState({
    data: [],
    current: -1
  });
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const history = useHistory();
  useEffect(() => {
    const getInfo = verifyToken();
    if (getInfo) {
      getInfo.then((res) => {
        console.log(res);
        if (res.data.permission !== "admin") {
          history.push("/login");
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    try {
      let reqOptions = {
        url: "http://localhost:4000/admin/employee",
        method: "GET",
      };
      axios.request(reqOptions).then(function (response) {
        setDataTag({ ...response });
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="clerk">

      {showModal && 
        <div className={classNames("am-modal", { open: showModal })}>
        
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
                  onClick={closeModal}
                >
                  Thoát
                </Button>
              </div>
            </div>

            <TextField
              label='Tìm theo email'
              variant='outlined'
            >


            </TextField>

          </div>
        
        </div>
      }


      <div className="body">

        <table>
          <tr>
            <th>STT</th>
            <th>Username</th>
            <th>Email</th>
            <th>Quyền</th>
            <th>Được tạo vào</th>
            <th>Cập nhật vào</th>
            <th>Cập nhật</th>
            <th>Xoá</th>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td>
              <Button
                className="btn-modal"
                variant="contained"
                color="primary"
                onClick={() => {
                  setShowModal(true)
                }}
              >
                Thêm mới
              </Button>
            </td>
            <td></td>
          </tr>

          {dataTag &&
            dataTag.data.map((val, idx) => (
              <tr>
                <td>{idx}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.permission}</td>
                <td>{formatDate(val.createdAt)}</td>
                <td>{formatDate(val.updatedAt)}</td>

                <td>
                  <Button
                    className="btn-modal"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setShowModal(true)
                    }}
                  >
                    Cập nhật
                  </Button>
                </td>
                <td>
                  <Button
                    className="btn-modal"
                    variant="outlined"
                    color="secondary"
                    // onClick={() => {
                    //   window.confirm(
                    //     `Bạn thực sự muốn xoá mục ${val.type}?\nMọi thay đổi sẽ không được hoàn tác!`
                    //   ) && handleCategory("delete", val._id);
                    // }}
                  >
                    Xoá
                  </Button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
