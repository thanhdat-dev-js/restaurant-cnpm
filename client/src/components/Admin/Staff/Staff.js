import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "../../../scss/clerk.scss";
import { Button, TextField } from "@material-ui/core";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";

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

export default function Staff() {
  const history = useHistory();

  const [dataTag, setDataTag] = useState({
    data: [],
    current: -1,
  });
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    getData();
  };

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
        url: SERVER + "admin/employee",
        method: "GET",
      };
      axios.request(reqOptions).then(function (response) {
        const newdata = response.data;
        setDataTag({ data: [...newdata], current: -1 });
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="clerk">
      {showModal && (
        <Popup
          showModal={showModal}
          closeModal={closeModal}
          data={dataTag.data?.[dataTag.current]}
          current={dataTag.current}
        />
      )}

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
                  setDataTag({ ...dataTag, current: -1 });
                  console.log(dataTag);
                  setShowModal(true);
                }}
              >
                <AddBoxIcon sx={{ fontSize: "20px" }}></AddBoxIcon>
              </Button>
            </td>
          </tr>

          {dataTag &&
            dataTag.data.map((val, idx) => (
              <tr key={idx}>
                <td>{idx}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.permission}</td>
                <td>{formatDate(val.createdAt)}</td>
                <td>{formatDate(val.updatedAt)}</td>

                <td>
                  <Button
                    className="btn-modal"
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      setDataTag({ ...dataTag, current: idx });
                      console.log(dataTag);
                      setShowModal(true);
                    }}
                  >
                    <EditIcon sx={{ fontSize: "20px" }}></EditIcon>
                  </Button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
