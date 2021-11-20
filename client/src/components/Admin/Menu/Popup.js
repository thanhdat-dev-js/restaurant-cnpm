// import classNames from "classnames";
import { Button, TextField } from "@material-ui/core";
import { useState, useRef } from "react";
import axios from "axios";
import shortid from 'shortid'

import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";

import "./index.css";
const SERVER = "http://localhost:4000/";

export default function Popup(props) {
  const [content, setContent] = useState(props.data);
  const ADD_NEW = -1;

  // showModal, closeModal , current, data

  function postCategory() {
    try {
      if (window.confirm("Bạn có chắc không?")) {
        let req = {
          url: SERVER + "category/",
          method: "POST",
          data: content,
        };
        axios.request(req).then(() => props.closeModal());
      }
    } catch (err) {
      console.log(err);
    }
  }
  function putCategory() {
    try {
      if (window.confirm("Bạn có chắc không?")) {
        let req = {
          url: SERVER + "category/" + content._id,
          method: "PUT",
          data: content,
        };
        axios.request(req).then(() => props.closeModal());
      }
    } catch (err) {
      console.log(err);
    }
  }

  const newDishRef = useRef();
  function scrollToBottom() {
    newDishRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="am-modal open">
      <div className="am-form">
        <div className="am-form-header">
          {props.current === ADD_NEW ? (
            <h2>Thêm danh mục</h2>
          ) : (
            <h2>Chỉnh sửa danh mục</h2>
          )}

          <div>
            <Button
              color="primary"
              variant="contained"
              onClick={props.current === ADD_NEW ? postCategory : putCategory}
            >
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

        <div className="am-form-add">
          <h3>Mục</h3>
          <TextField
            label="Loại"
            required
            defaultValue={content?.type}
            variant="outlined"
            margin="dense"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            onChange={(e) => setContent({ ...content, type: e.target.value })}
          />

          <TextField
            label="Đường dẫn ảnh"
            required
            defaultValue={content?.imgURL}
            variant="outlined"
            margin="dense"
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            onChange={(e) => setContent({ ...content, imgURL: e.target.value })}
          />
        </div>

        {props.current !== ADD_NEW && (
          <div className="am-form-add">
            <h3>Món ăn</h3>

            <Button
              color="primary"
              variant="outlined"
              onClick={() => {
                setContent({
                  ...content,
                  products: [
                    ...content?.products,
                    {
                      productID: shortid.generate(),
                      name: "",
                      imgURL: "",
                      price: "",
                      description: "",
                    },
                  ],
                });
                scrollToBottom();
              }}
            >
              <AddBoxIcon sx={{ fontSize: "20px" }}></AddBoxIcon>
            </Button>
          </div>
        )}

        {content?.products?.map((product, idx) => (
          <div key={product.productID} className="am-product">
            {/* <TextField
              label="ID"
              defaultValue={product.productID}
              variant="outlined"
              margin="dense"
              InputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              onChange={(e) =>
                setContent({
                  ...content,
                  products: content?.products?.map((p) =>
                    p.productID === product.productID
                      ? { ...p, productID: e.target.value }
                      : p
                  ),
                })
              }
            /> */}
            <TextField
              label="Tên"
              defaultValue={product.name}
              variant="outlined"
              margin="dense"
              InputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              onChange={(e) =>
                setContent({
                  ...content,
                  products: content?.products?.map((p) =>
                    p.productID === product.productID
                      ? { ...p, name: e.target.value }
                      : p
                  ),
                })
              }
            />
            <TextField
              label="Đường dẫn ảnh"
              defaultValue={product.imgURL}
              variant="outlined"
              margin="dense"
              InputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              onChange={(e) =>
                setContent({
                  ...content,
                  products: content?.products?.map((p) =>
                    p.productID === product.productID
                      ? { ...p, imgURL: e.target.value }
                      : p
                  ),
                })
              }
            />
            <TextField
              label="Giá"
              defaultValue={product.price}
              variant="outlined"
              margin="dense"
              InputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              onChange={(e) =>
                setContent({
                  ...content,
                  products: content?.products?.map((p) =>
                    p.productID === product.productID
                      ? { ...p, price: e.target.value }
                      : p
                  ),
                })
              }
            />
            <TextField
              label="Mô tả"
              defaultValue={product.description}
              variant="outlined"
              margin="dense"
              InputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
              onChange={(e) =>
                setContent({
                  ...content,
                  products: content?.products?.map((p) =>
                    p.productID === product.productID
                      ? { ...p, description: e.target.value }
                      : p
                  ),
                })
              }
            />

            <Button
              color="secondary"
              variant="outlined"
              onClick={() => {
                setContent({
                  ...content,
                  products: content?.products?.filter(
                    (p) => p.productID !== product.productID
                  ),
                });
              }}
            >
              <DeleteIcon sx={{ fontSize: "20px" }}></DeleteIcon>
            </Button>
          </div>
        ))}

        <div ref={newDishRef}></div>
      </div>
    </div>
  );
}
