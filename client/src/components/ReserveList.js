import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ReserveNavbar from './ReserveNavbar';
import ReserveEdit from './ReserveEdit';
import ReserveDelete from './ReserveDelete';
import '../scss/reservelist.scss';
import { Container } from '@material-ui/core';
import verifyToken from '../midlewares/verifyToken';
import socketClient from "socket.io-client";
import getReserve from '../midlewares/getReserve';
const SERVER = "http://localhost:4000/";
var socket = null;

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleTimeString() + ' ' + new Date(dateString).toLocaleDateString();
}

function ReserveList() {
    const [data, setData] = useState(null);
    const history = useHistory();
    function getData(userEmail) {
        var reserve = getReserve(userEmail);
        if (reserve) {
            reserve.then(res => {
                if (res.data.reserve_filter) {
                    setData([...res.data.reserve_filter]);
                }
            })
        }
    }
    
    useEffect(() => {
        const getInfo = verifyToken();
        if (getInfo) {
            getInfo.then(res => {
                if (res.data.permission !== 'clerk' && res.data.permission !== 'customer') {
                    history.push("/login");
                }
                else if (res.data.permission === 'clerk') {
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
                else if (res.data.permission === 'customer') {
                    getData(res.data.email);
                    try {
                        socket = socketClient(SERVER);
                        socket.on('customer', () => {
                            getData(res.data.email);
                        })
                    }
                    catch (err) {
                        console.log(err)
                    }
                }
            })
        }
    }, [history]);

    return (
        <div>
            <ReserveNavbar/>
            <div className="reserve-list">
                <Container fluid='lg'>
                    <div>
                        <div className="reserve-title">
                            <p>Danh sách đặt bàn</p>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Thời gian</th>
                                    <th>Họ tên khách hàng</th>
                                    <th>Số lượng khách</th>
                                    <th>Số điện thoại</th>
                                    <th>Chỉnh sửa</th>
                                    <th>Xóa</th>
                                </tr>
                                {data && data.map((data) => (
                                    <tr key={data._id}>
                                        <td>{formatDate(data.date)}</td>
                                        <td>{data.firstName + ' ' + data.lastName}</td>
                                        <td>{data.kidsNumber + data.adultsNumber}</td>
                                        <td>{data.phone}</td>
                                        <td><ReserveEdit id={data._id} fname={data.firstName} lname={data.lastName} phone={data.phone} email={data.email} /></td>
                                        <td><ReserveDelete id={data._id} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </div>
        </div>        
    )
}

export default ReserveList;