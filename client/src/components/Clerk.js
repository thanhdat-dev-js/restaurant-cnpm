import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../scss/clerk.scss';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import verifyToken from '../midlewares/verifyToken';
import axios from 'axios';
import socketClient from "socket.io-client";
import getOrder from '../midlewares/getOrder';
const SERVER = "http://127.0.0.1:4000/";
var socket = null;

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleTimeString() + ' ' + new Date(dateString).toLocaleDateString();
}
export default function Clerk() {
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState('');
    const history = useHistory();
    function getData(filter = '') {
        var order = getOrder(filter);
        if (order) {
            order.then(res => {
                console.log(res)
                if (res.data.order)
                    setData([...res.data.order])
            })
        }
    }
    useEffect(() => {
        const getInfo = verifyToken();
        if (getInfo) {
            getInfo.then(res => {
                if (res.data.permission !== 'clerk') {
                    history.push("/login");
                }
                else {
                    getData();
                    try {
                        socket = socketClient(SERVER);
                        socket.on('clerk', () => {
                            getData();
                        })
                    }
                    catch (err) {
                        console.log(err)
                    }
                }
            })
        }
    }, []);
    async function handleClick(status, orderID) {
        if (socket) {
            await socket.emit(`${status}`, orderID);
            getData(filter);
        }
    }
    return (
        <div className="clerk">
            <Container fluid='lg'>
                <div className='header'>
                    <Link to='/'>
                        <HomeIcon />
                        <span>Back to home</span>
                    </Link>
                </div>
                <div className='body'>
                    <h1>Clerk</h1>
                    <div>
                        <span>Danh sach cac don hang chua thanh toan</span>
                        <span>Danh sach cac don hang da thanh toan</span>
                        <span>Danh sach toan bo don hang</span>
                    </div>
                </div>
                <div>
                    <table>
                        <tr>
                            <th>STT</th>
                            <th>OrderID</th>
                            <th>Status</th>
                            <th>Process</th>
                            <th>Total</th>
                            <th>Create At</th>
                            <th>Update At</th>
                        </tr>
                        {data && data.map((val, idx) => (
                            <tr>
                                <td>{idx}</td>
                                <td>{val.orderID}</td>
                                <td>{val.status}</td>
                                <td>{val.process}</td>
                                <td>{val.total}</td>
                                <td>{formatDate(val.createdAt)}</td>
                                <td>{formatDate(val.updatedAt)}</td>
                                <td>
                                    <Button className='btn-modal'
                                        disabled={val.status === 'cancel' || val.status === 'confirmed'}
                                        variant="contained" color="secondary"
                                        onClick={() => handleClick('confirmed', val.orderID)}
                                    >Confirmed</Button>
                                </td>
                                <td>
                                    <Button className='btn-modal'
                                        disabled={val.status === 'cancel' || val.status === 'confirmed'}
                                        variant="contained" color="primary"
                                        onClick={() => handleClick('cancel', val.orderID)}
                                    >Cancel</Button>
                                </td>
                            </tr>
                        )
                        )}
                    </table>
                </div>
            </Container>
        </div>
    )
}