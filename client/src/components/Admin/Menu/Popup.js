import classNames from "classnames";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

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
        axios.request(req).then(props.closeModal());
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
        axios.request(req).then(props.closeModal());
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={classNames("am-modal", { open: props.showModal })}>
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
              Thoát
            </Button>
          </div>
        </div>

        <h3>Mục</h3>
        <TextField
          label="Loại"
          defaultValue={content?.type}
          variant="outlined"
          margin="dense"
          onChange={(e) => setContent({ ...content, type: e.target.value })}
        />

        <TextField
          label="Đường dẫn ảnh"
          defaultValue={content?.imgURL}
          variant="outlined"
          margin="dense"
          onChange={(e) => setContent({ ...content, imgURL: e.target.value })}
        />

        <h3>Món ăn</h3>

        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            props.current == ADD_NEW
              ? setContent({
                  ...content,
                  products: [
                    {
                      productID: " ",
                      name: " ",
                      imgURL: " ",
                      price: " ",
                      description: " ",
                    },
                  ],
                })
              : setContent({
                  ...content,
                  products: [
                    ...content?.products,
                    {
                      productID: " ",
                      name: " ",
                      imgURL: " ",
                      price: " ",
                      description: " ",
                    },
                  ],
                });
          }}
        >
          Thêm món
        </Button>

        {content?.products?.map((product, idx) => (
          <div className="am-product">
            <TextField
              label="ID"
              defaultValue={product.productID}
              variant="outlined"
              margin="dense"
              onChange={(e) =>
                setContent({
                  ...content,
                  products: content?.products?.map((p) =>
                    p.productID == product.productID
                      ? { ...p, productID: e.target.value }
                      : p
                  ),
                })
              }
            />
            <TextField
              label="Tên"
              defaultValue={product.name}
              variant="outlined"
              margin="dense"
              onChange={(e) =>
                setContent({
                  ...content,
                  products: content?.products?.map((p) =>
                    p.productID == product.productID
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
              onChange={(e) =>
                setContent({
                  ...content,
                  products: content?.products?.map((p) =>
                    p.productID == product.productID
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
              onChange={(e) =>
                setContent({
                  ...content,
                  products: content?.products?.map((p) =>
                    p.productID == product.productID
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
              onChange={(e) =>
                setContent({
                  ...content,
                  products: content?.products?.map((p) =>
                    p.productID == product.productID
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
                    (p) => p.productID !== product.productID && p
                  ),
                });
              }}
            >
              Xoá món
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
