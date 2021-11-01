import axios from "axios";
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Menubody from './Menubody';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { useHistory } from "react-router-dom";
import verifyToken from '../midlewares/verifyToken';
import socketClient from "socket.io-client";
const SERVER = "http://localhost:4000/";
const classNames = require('classnames');

export default () => {
   const history = useHistory();
   const [dataTag, setDataTag] = useState(() => {
      const { start, end, responsive } = (() => {
         if (window.innerWidth > 992) {
            return {
               start: 0,
               end: 6,
               responsive: 992
            }
         }
         if (window.innerWidth > 768) {
            return {
               start: 0,
               end: 5,
               responsive: 768
            }

         }
         if (window.innerWidth > 576) {
            return {
               start: 0,
               end: 4,
               responsive: 576
            }
         }
         if (window.innerWidth > 478) {
            return {
               start: 0,
               end: 3,
               responsive: 478
            }
         }
         return {
            start: 0,
            end: 2,
            responsive: 477
         }
      })();
      return {
         data: [],
         currentIdx: 0,
         currentIdxProduct: 0,
         quantity: 1,
         start,
         end,
         responsive
      }
   }
   );
   const [showModal, setShowModal] = useState(false);
   const [showCart, setShowCart] = useState(false);
   const [dataCart, setDataCart] = useState(() => {
      const data = JSON.parse(localStorage.getItem('ORDER'));
      return data ? data :
         {
            products: [],
            totalOrder: 0
         }
   });
   const [message, setMessage] = useState(null);
   useEffect(() => {
      try {
         let reqOptions = {
            url: "http://localhost:4000/category",
            method: "GET",
         }
         axios.request(reqOptions).then(function (response) {
            setDataTag({
               ...dataTag,
               data: response.data
            })
         })
      }
      catch (e) {
         console.log(e);
      }
   }, [])
   useEffect(() => {
      var totalOrder = 0;
      dataCart.products.forEach(item => {
         totalOrder += item.totalPrice
      })
      const data = {
         ...dataCart,
         totalOrder
      };
      localStorage.setItem('ORDER', JSON.stringify(data));
      setDataCart(data)
   }, [dataCart.products])
   useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
   });
   useEffect(() => handleWindowResize(), []);
   function handleWindowResize() {
      if (window.innerWidth > 992) {
         if (dataTag.responsive !== 992)
            setDataTag({
               ...dataTag,
               start: 0,
               currentIdx: 1,
               end: 6,
               responsive: 992
            })
      }
      else if (window.innerWidth > 768) {
         if (dataTag.responsive !== 768)
            setDataTag({
               ...dataTag,
               start: 0,
               currentIdx: 1,
               end: 5,
               responsive: 768
            })
      }
      else if (window.innerWidth > 576) {
         if (dataTag.responsive !== 576)
            setDataTag({
               ...dataTag,
               start: 0,
               currentIdx: 1,
               end: 4,
               responsive: 576
            })
      }
      else if (window.innerWidth > 478) {
         if (dataTag.responsive !== 478)
            setDataTag({
               ...dataTag,
               start: 0,
               currentIdx: 1,
               end: 3,
               responsive: 478
            })
      }
      else {
         if (dataTag.responsive !== 477)
            setDataTag({
               ...dataTag,
               start: 0,
               currentIdx: 1,
               end: 2,
               responsive: 477
            })
      }
   }
   function handleClickTag(idx) {
      setDataTag({
         ...dataTag,
         currentIdx: idx
      })
   }
   function onclickprevbtn() {
      if (dataTag.currentIdx === 0) return;
      if (dataTag.start === dataTag.currentIdx)
         setDataTag({
            ...dataTag,
            start: dataTag.start - 1,
            end: dataTag.end - 1,
            currentIdx: dataTag.currentIdx - 1
         })
      else
         setDataTag({
            ...dataTag,
            currentIdx: dataTag.currentIdx - 1,
         })
   }
   function onclicknextbtn() {
      if (dataTag.currentIdx === dataTag.data.length - 1) return;
      if (dataTag.end === dataTag.currentIdx)
         setDataTag({
            ...dataTag,
            start: dataTag.start + 1,
            end: dataTag.end + 1,
            currentIdx: dataTag.currentIdx + 1
         })
      else
         setDataTag({
            ...dataTag,
            currentIdx: dataTag.currentIdx + 1,
         })
   }
   function handleClickIncrease() {
      setDataTag({
         ...dataTag,
         quantity: dataTag.quantity + 1
      })
   }
   function handleClickDecrease() {
      if (dataTag.quantity === 1) return;
      setDataTag({
         ...dataTag,
         quantity: dataTag.quantity - 1
      })
   }
   function handleClickDecreaseCart(idx, currentIdx) {
      const products = dataCart.products.map((item) => {
         if (item.currentIdxProduct === idx && item.currentIdx === currentIdx) {
            const quantity = item.quantity === 1 ? 1 : item.quantity - 1;
            return {
               ...item,
               quantity,
               totalPrice: item.price * quantity
            }
         }
         return item;
      })
      setDataCart({
         ...dataCart,
         products
      })
   }
   function handleClickIncreaseCart(idx, currentIdx) {
      const products = dataCart.products.map((item) => {
         if (item.currentIdxProduct === idx && item.currentIdx === currentIdx) {
            const quantity = item.quantity + 1;
            return {
               ...item,
               quantity,
               totalPrice: item.price * quantity
            }
         }
         return item;
      })
      setDataCart({
         ...dataCart,
         products
      })
   }
   function removeProduct(idx) {
      var products = [];
      dataCart.products.forEach((item, index) => {
         if (idx !== index) {
            products.push(item);
         }
      })
      setDataCart({
         ...dataCart,
         products
      })
   }

   function closeModal() {
      setShowModal(false);
   }
   function openModal(idx) {
      if (window.innerWidth > 800) {
         setShowModal(true);
         setDataTag({
            ...dataTag,
            currentIdx: dataTag.currentIdx,
            currentIdxProduct: idx,
            quantity: 1,
         })
      }
   }
   function closeCart() {
      setShowCart(false);
   }
   function openCart() {
      setShowCart(true);
   }
   function addToCart(value = dataTag.quantity, currentIdx = dataTag.currentIdx, currentIdxProduct = dataTag.currentIdxProduct) {
      var isEmptyOrNull = true;
      const products = dataCart.products.map((item) => {
         if (item.currentIdx === currentIdx) {
            if (item.currentIdxProduct === currentIdxProduct) {
               isEmptyOrNull = false;
               return {
                  ...item,
                  quantity: item.quantity + value,
                  totalPrice: (item.quantity + value) * item.price
               }
            }
         }
         return item;
      })
      if (isEmptyOrNull)
         products.push({
            currentIdx: currentIdx,
            currentIdxProduct: currentIdxProduct,
            quantity: value,
            price: dataTag.data[currentIdx].products[currentIdxProduct].price,
            totalPrice: dataTag.data[currentIdx].products[currentIdxProduct].price * value,
            productID: dataTag.data[currentIdx].products[currentIdxProduct].productID,
            name: dataTag.data[currentIdx].products[currentIdxProduct].name
         })
      setDataCart({
         ...dataCart,
         products
      })
      closeModal();
   }
   function format(n, currency) {
      if (n && currency)
         return currency + n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
         });
   }
   async function handlePayment() {
      try {
         setMessage('Vui lòng đợi thu ngân xác nhận đơn hàng, không chuyển trang hoặc f5');
         const info = verifyToken();
         var email = '';
         if (info) {
            await info.then(res => {
               email = res.data.email;
            })
         }
         var data = {
            email: email,
            total: dataCart.totalOrder,
            products: dataCart.products.map((item) => {
               const {
                  quantity,
                  price,
                  totalPrice,
                  name,
                  productID
               } = item;
               return {
                  quantity,
                  price,
                  totalPrice,
                  name,
                  productID
               }
            })
         }
         const socket = socketClient(SERVER);
         socket.emit('postOrder', data, (res) => {
            if (res.success) {
               socket.on(`${res.orderId}`, (status) => {
                  localStorage.setItem('ORDER', null);
                  socket.disconnect();
                  if (status === 'confirmed') history.push('/payment');
                  else if (status === 'cancel') setMessage('Đơn hàng của bạn đã bị hủy bởi thu nhân');
               })
            }
            else {
               setMessage('Đơn hàng gửi lên bị lỗi');
            }
         });
      }
      catch (err) {
         console.log(err)
      }
   }
   return (
      message ?
         <div className='message'>
            <h1>{message}</h1>
         </div>
         :
         (<div className='menu'>
            <Container fluid='lg'>
               {showModal && <div className={classNames('modal', { open: showModal })}
                  onClick={() => closeModal()}>
                  <div className='modal-body' onClick={(e) => e.stopPropagation()}>
                     <div className='heading'>
                        <h3>Add to cart</h3>
                        <CloseIcon onClick={() => closeModal()} />
                     </div>
                     <div className='container'>
                        <div className='img-wrap'>
                           <div className='img' style={{
                              backgroundImage: `url("${dataTag.data[dataTag.currentIdx].products[dataTag.currentIdxProduct]?.imgURL}")`
                           }}></div>
                        </div>
                        <div className='content'>
                           <div className='title'>
                              <div className='sku'>
                                 <h3>STT</h3>
                                 <p>41</p>
                              </div>
                              <div className='name'>
                                 <h3>{dataTag.data[dataTag.currentIdx].type}</h3>
                                 <p>{dataTag.data[dataTag.currentIdx].products[dataTag.currentIdxProduct]?.name}</p>
                              </div>
                              <div className='price'>
                                 <h3>Unit Price</h3>
                                 <span>{format(dataTag.data[dataTag.currentIdx].products[dataTag.currentIdxProduct]?.price, 'đ')}</span>
                              </div>
                           </div>
                           <div className='quantity'>
                              <h3>Quantity</h3>
                              <div>
                                 <div className='btn btn-decrease' onClick={() => handleClickDecrease()}><RemoveIcon /></div>
                                 <span>{dataTag.quantity}</span>
                                 <div className='btn btn-increase' onClick={() => handleClickIncrease()}><AddIcon /></div>
                              </div>
                           </div>
                           <div className='description'>
                              <h3>Description</h3>
                              <p>{dataTag.data[dataTag.currentIdx].products[dataTag.currentIdxProduct]?.description}</p>
                           </div>
                           <Button className='btn-modal' variant="contained" color="secondary" onClick={() => addToCart()}>
                              <ShoppingCartOutlinedIcon /> <span>Add to cart</span>
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>}
               <div className='header'>
                  <Link to='/'>
                     <HomeIcon />
                     <span>Back to home</span>
                  </Link>
                  <div className='btn-showCart' onClick={() => openCart()}>
                     <ShoppingCartIcon />
                     <span>Cart({dataCart.products.length})</span>
                  </div>
               </div>
               <Menubody data={dataTag.data}
                  start={dataTag.start}
                  end={dataTag.end}
                  currentIdx={dataTag.currentIdx}
                  onclicknextbtn={onclicknextbtn} onclickprevbtn={onclickprevbtn}
                  handleClickTag={handleClickTag}
                  addToCart={addToCart}
                  openModal={openModal}></Menubody>
               <div className={classNames('cart', { cartOpen: showCart })}
                  onClick={() => closeCart()}>
                  <div className='cart-wrap' onClick={(e) => e.stopPropagation()} >
                     <div className='cart-header'>
                        <ShoppingCartIcon className='cart-icon' /><span>YourCart({dataCart.products.length})</span>
                        <CloseIcon className='cart-close' onClick={() => closeCart()} />
                     </div>
                     <div className='container'>
                        {dataTag.data.length !== 0 && dataCart.products.map((item, idx) => (
                           <div className='product' key={idx}>
                              <div className='product-wrap'>
                                 <img src={`${dataTag.data[item.currentIdx].products[item.currentIdxProduct].imgURL}`} />
                              </div>
                              <div className='body'>
                                 <p><span>{idx + 1}. </span>{dataTag.data[item.currentIdx].products[item.currentIdxProduct].name}</p>
                                 <div className='body-wrap'>
                                    <div className='quantity'>
                                       <div className='btn btn-decrease' onClick={() => {
                                          handleClickDecreaseCart(item.currentIdxProduct, item.currentIdx)
                                       }} ><RemoveIcon /></div>
                                       <span>{item.quantity}</span>
                                       <div className='btn btn-increase' onClick={() => {
                                          handleClickIncreaseCart(item.currentIdxProduct, item.currentIdx)
                                       }}><AddIcon /></div>
                                    </div>
                                    <div className='price-wrap'>
                                       <div className='price'>{format(item.totalPrice, 'đ')}</div>
                                       <div>{dataTag.data[item.currentIdx].type}</div>
                                    </div>
                                 </div>
                                 <RemoveCircleOutlineIcon className='product-close' onClick={() => removeProduct(idx)} />
                              </div>
                           </div>
                        ))}
                     </div>
                     <div className='cart-footer'>
                        <div className='cart-footer-wrap'>
                           <h3>Total:</h3>
                           <p>{format(dataCart.totalOrder, 'đ')}</p>
                        </div>
                        <div className='discount'>Khuyen mai</div>
                        <Button className='btn-modal' variant="contained" color="secondary" onClick={handlePayment}>PAYMENT</Button>
                     </div>
                  </div>
               </div>
            </Container>
         </div>)
   )
}