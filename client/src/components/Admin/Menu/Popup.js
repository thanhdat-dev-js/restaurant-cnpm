import classNames from "classnames";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

import "./index.css";

export default function Popup(props) {
  const [content, setContent] = useState(props.data);

  const ADD_NEW = -1;

  // showModal, closeModal , current, data

  function postCategory() {}
  function putCategory() {}
  function deleteCategory() {}

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

        {props.current != ADD_NEW && <h3>Món ăn</h3>}
        {content?.products?.map((product, idx) => (
          <div className="am-product">
            <h1>{product.description}</h1>
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
          </div>
        ))}
      </div>
    </div>
  );
}
