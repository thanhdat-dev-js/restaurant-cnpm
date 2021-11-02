import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "../../../scss/clerk.scss";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

import verifyToken from "../../../midlewares/verifyToken";
const SERVER = "http://localhost:4000/";

const formatDate = (dateString) => {
  return (
    new Date(dateString).toLocaleTimeString() +
    " " +
    new Date(dateString).toLocaleDateString()
  );
};

export default function Menu() {
  const [dataTag, setDataTag] = useState();

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
        setDataTag(response);
      });
    } catch (e) {
      console.log(e);
    }
  }

  function handleCategory(action, id) {
    try {
      if (action === "update") {





      } else if (action === "delete") {
        let req = {
          url: SERVER + "category/" + id,
          method: "DELETE",
        };
        axios.request(req).then((res) => console.log(res));
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="clerk">

      <div className="body">

        <table>
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
                  handleCategory("update");
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
                      handleCategory("update", val._id);
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
                      ) && handleCategory("delete", val._id);
                    }}
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
