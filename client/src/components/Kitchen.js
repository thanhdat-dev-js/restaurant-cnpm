import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../scss/clerk.scss';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import verifyToken from '../midlewares/verifyToken';
import socketClient from "socket.io-client";
import getOrder from '../midlewares/getOrder';
import classNames from 'classnames';
const SERVER = "http://127.0.0.1:4000/";
var socket = null;

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleTimeString() + ' ' + new Date(dateString).toLocaleDateString();
}
export default function Kitchen() {
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState('cooking');
    const history = useHistory();
    function getData(filter) {
        var order = getOrder('', filter);
        if (order) {
            order.then(res => {
                if (res.data.order) {
                    setData([...res.data.order]);
                    setFilter(filter);
                }
            })
        }
    }
    useEffect(() => {
        const getInfo = verifyToken();
        if (getInfo) {
            getInfo.then(res => {
                if (res.data.permission !== 'kitchen') {
                    history.push("/login");
                }
                else {
                    getData(filter);
                    try {
                        socket = socketClient(SERVER);
                        socket.on('kitchen', () => {
                            getData(filter);
                        })
                    }
                    catch (err) {
                        console.log(err)
                    }
                }
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    async function handleClick(status, orderID) {
        if (socket) {
            await socket.emit(`${status}`, orderID);
            getData(filter);
        }
    }
    return (
        <div className="kitchen">
            <Container fluid='lg'>
                <div className='body'>
                    <div className='filter'>
                        <div className='header'>
                            <Link to='/'>
                                <HomeIcon />
                                <span>Back to home</span>
                            </Link>
                        </div>

                        <div className="wrapper">
                            <span className={classNames({ active: filter === 'unconfirmed' })} onClick={() => getData('unconfirmed')}>Chưa thanh toán</span>
                            <span className={classNames({ active: filter === 'confirmed' })} onClick={() => getData('confirmed')}>Đã thanh toán</span>
                            <span className={classNames({ active: filter === 'cancel' })} onClick={() => getData('cancel')}>Đã bị hủy</span>
                        </div>
                        <p>Danh sách đơn hàng</p>
                    </div>
                    <table>
                        <tr>
                            <th>STT</th>
                            <th>OrderID</th>
                            <th>Process</th>
                            <th>Total</th>
                            <th>Create At</th>
                            <th>Update At</th>
                            {filter === 'cooking' && <th>Hoàn thành</th>}
                        </tr>
                        {data && data.map((val, idx) => (
                            <tr>
                                <td>{idx}</td>
                                <td>{val.orderID}</td>
                                <td>{val.process}</td>
                                <td>{val.total}</td>
                                <td>{formatDate(val.createdAt)}</td>
                                <td>{formatDate(val.updatedAt)}</td>
                                {
                                    filter === 'cooking' &&
                                    <td>
                                        <Button className='btn-modal'
                                            disabled={val.status === 'done'}
                                            variant="contained" color="secondary"
                                            onClick={() => handleClick('done', val.orderID)}
                                        >Done</Button>
                                    </td>
                                }
                            </tr>
                        )
                        )}
                    </table>
                </div>
            </Container>
        </div>
    )
}