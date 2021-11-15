import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "../../../scss/clerk.scss";
import "./index.css";
import { Button, TextField } from "@material-ui/core";
// import CloseIcon from "@mui/icons-material/Close";
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
        url: "http://localhost:4000/category",
        method: "GET",
      };
      axios.request(reqOptions).then(function (response) {
        setDataTag({ ...response });
      });
    } catch (e) {
      console.log(e);
    }
  }

  function postCategory(val) {
    let req = {
      url: SERVER + "category/",
      method: "POST",
      data: {
        type: val.type,
        imgURL: val.imgURL,
        products: [],
      },
    };
    axios.request(req).then((res) => console.log(res));
    getData();
  }

  function putCategory() {}

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
    <div className="clerk">
      
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
                    setShowModal(true);
                    setDataTag({ ...dataTag, current: ADD_NEW });
                    // handleCategory("update", val._id);
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
                  <td>{val.type}</td>
                  <td>{val.imgURL}</td>
                  <td>{formatDate(val.createdAt)}</td>
                  <td>{formatDate(val.updatedAt)}</td>

                  <td>
                    <Button
                      className="btn-modal"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setShowModal(true);
                        setDataTag({ ...dataTag, current: idx });
                        // handleCategory("update", val._id);
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
                      onClick={() => {
                        window.confirm(
                          `Bạn thực sự muốn xoá mục ${val.type}?\nMọi thay đổi sẽ không được hoàn tác!`
                        ) && deleteCategory(val._id);
                      }}
                    >
                      Xoá
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
