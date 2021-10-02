import axios from "axios";
import { Container, Grid } from '@material-ui/core';
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
import { useHistory } from "react-router-dom";
import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:4000/";
const classNames = require('classnames');

export default () => {
    const history = useHistory();
    const [dataTag, setDataTag] = useState(
        {
            data: [],
            currentIdx: 0,
            currentIdxProduct: 0,
            quantity: 1,
            start: 0,
            end: 4,
            responsive: true
        });
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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        try {
            let reqOptions = {
                url: "http://127.0.0.1:4000/category",
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
        const handleWindowResize = () => {
            if (window.innerWidth < 700) {
                if (dataTag.responsive)
                    setDataTag({
                        ...dataTag,
                        start: 0,
                        currentIdx: 1,
                        end: 2,
                        responsive: false
                    })
            }
            else if (!dataTag.responsive) {
                setDataTag({
                    ...dataTag,
                    start: 0,
                    currentIdx: 1,
                    end: 4,
                    responsive: true
                })
            }
        }
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    });
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
        if (dataTag.currentIdx == dataTag.data.length - 1) return;
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
    function closeModal() {
        setShowModal(false);
    }
    function openModal(idx) {
        setDataTag({
            data: [...dataTag.data],
            currentIdx: dataTag.currentIdx,
            currentIdxProduct: idx,
            quantity: 1
        })
        setShowModal(true);
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

    async function handlePayment() {
        try {
            setLoading(true);
            var data = {
                email: localStorage.getItem('EMAIL'),
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
                        else if (status === 'cancel') history.push('/')
                    })
                }
                else {
                    setError(true);
                }
            });
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        loading ?
            <h1>Vui long doi thu ngan xac nhan don hang cua ban</h1>
            :
            (<div className='menu'>
                <Container fluid='lg'>
                    {dataTag.data.length !== 0 && <div className={classNames('modal', { open: showModal })}
                        onClick={() => closeModal()}>
                        <div className='modal-body' onClick={(e) => e.stopPropagation()}>
                            <div className='heading'>
                                <h3>Add to cart</h3>
                                <CloseIcon onClick={() => closeModal()} />
                            </div>
                            <div className='container'>
                                <div className='img-wrap'>
                                    <div className='img'></div>
                                </div>
                                <div className='content'>
                                    <div className='title'>
                                        <div className='sku'>
                                            <h3>SKU</h3>
                                            <p>41</p>
                                        </div>
                                        <div className='name'>
                                            <h3>{dataTag.data[dataTag.currentIdx].type}</h3>
                                            <p>{dataTag.data[dataTag.currentIdx].products[dataTag.currentIdxProduct] && dataTag.data[dataTag.currentIdx].products[dataTag.currentIdxProduct].name}</p>
                                        </div>
                                        <div className='price'>
                                            <h3>Unit Price</h3>
                                            <span>{dataTag.data[dataTag.currentIdx].products[dataTag.currentIdxProduct] && dataTag.data[dataTag.currentIdx].products[dataTag.currentIdxProduct].price}</span>
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
                                    <Button className='btn-modal' variant="contained" color="secondary" onClick={() => addToCart()}>
                                        <ShoppingCartOutlinedIcon /> <span>13213</span>
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
                    <Menubody data={dataTag.data} start={dataTag.start} end={dataTag.end} currentIdx={dataTag.currentIdx}
                        onclicknextbtn={onclicknextbtn} onclickprevbtn={onclickprevbtn}
                        handleClickTag={handleClickTag}
                        addToCart={addToCart}
                        openModal={openModal}></Menubody>
                    <div className={classNames('cart', { cartOpen: showCart })} onClick={() => closeCart()}>
                        <div className='cart-wrap' onClick={(e) => e.stopPropagation()} >
                            <div className='cart-header'>
                                <ShoppingCartIcon className='cart-icon' /><span>YourCart({dataCart.products.length})</span>
                            </div>
                            <div className='container'>
                                {dataCart.products.map((item, idx) => (
                                    dataTag.data.length != 0 &&
                                    <div className='product'>
                                        <div className='product-wrap'>
                                            <div className='product-img'></div>
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
                                                    <div className='price'>{item.totalPrice}</div>
                                                    <div>Khuyen mai</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='cart-footer'>
                                <div className='cart-footer-wrap'>
                                    <h3>Total:</h3>
                                    <p>{dataCart.totalOrder}</p>
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