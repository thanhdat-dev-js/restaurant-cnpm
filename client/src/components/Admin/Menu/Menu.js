import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "../../../scss/clerk.scss";
import "./index.css";
import { Button } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
// import classNames from "classnames";

import verifyToken from "../../../midlewares/verifyToken";
import Popup from "./Popup";

const SERVER = "http://localhost:4000/";

const formatDate = (dateString) => {
  return (
    new Date(dateString).toLocaleTimeString() +
    " " +
    new Date(dateString).toLocaleDateString()
  );
};

export default function Menu() {
  const ADD_NEW = -1;

  const [dataTag, setDataTag] = useState({
    data: [],
    current: ADD_NEW,
  });

  const [showModal, setShowModal] = useState(false);
  function closeModal() {
    setShowModal(false);
    getData();
  }

  const history = useHistory();
  useEffect(() => {
    const getInfo = verifyToken();
    if (getInfo) {
      getInfo.then((res) => {
        // console.log(res);
        if (res.data.permission !== "admin") {
          history.push("/login");
        }
      });
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getData() {
    try {
      let reqOptions = {
        url: "http://localhost:4000/category",
        method: "GET",
      };
      axios.request(reqOptions).then(function (response) {
        const data = response.data;
        setDataTag({ data: [...data], current: -1 });
      });
    } catch (e) {
      console.log(e);
    }
  }

  function deleteCategory(id) {
    try {
      let req = {
        url: SERVER + "category/" + id,
        method: "DELETE",
      };
      axios.request(req).then((res) => console.log(res));
      getData();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="admin">
      {showModal && (
        <Popup
          data={dataTag.data[dataTag.current]}
          current={dataTag.current}
          showModal={showModal}
          closeModal={closeModal}
        />
      )}

      <div className="body">
        <table>
          <tbody>
            <tr>
              <th>STT</th>
              <th>Loại</th>
              <th>Đường dẫn ảnh</th>
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

              <td>
                <Button
                  className="btn-modal"
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setDataTag({ ...dataTag, current: ADD_NEW });
                    setShowModal(true);
                  }}
                >
                  <AddBoxIcon sx={{fontSize:'20px'}}></AddBoxIcon>
                </Button>
              </td>
              <td></td>
            </tr>

            {dataTag &&
              dataTag.data.map((val, idx) => (
                <tr>
                  <td>{idx}</td>
                  <td>{val.type}</td>
                  <td>{val.imgURL}</td>
                  <td>{formatDate(val.createdAt)}</td>
                  <td>{formatDate(val.updatedAt)}</td>

                  <td>
                    <Button
                      className="btn-modal"
                      variant="outlined"
                      color="primary"
                      onClick={() => {
                        setDataTag({ ...dataTag, current: idx });
                        setShowModal(true);
                      }}
                    >
                  <EditIcon sx={{fontSize:'20px'}}></EditIcon>
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="btn-modal"
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        window.confirm(
                          `Bạn thực sự muốn xoá mục ${val.type}?\nMọi thay đổi sẽ không được hoàn tác!`
                        ) && deleteCategory(val._id);
                        getData();
                      }}
                    >
                  <DeleteIcon sx={{fontSize:'20px'}}></DeleteIcon>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
