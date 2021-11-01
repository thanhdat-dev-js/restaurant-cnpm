import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../scss/admin.scss';
import HomeIcon from '@material-ui/icons/Home';
import { Container } from '@material-ui/core';
import verifyToken from '../midlewares/verifyToken';
import Statistics_NumOfOrders from './Admin/Statistics_NumOfOrders';
import Statistics_revenue from './Admin/Statistics_revenue';
import HighlightCard from './Admin/HighlightCard';

export default function Admin() {
        const Statistics = true;
        const Menu = false;
        const Staff = false;
    const history = useHistory();
    useEffect(() => {
        const getInfo = verifyToken();
        if (getInfo) {
            getInfo.then(res => {
                console.log(res);
                if (res.data.permission !== 'admin') {

                    history.push("/login");
                }
            })
        }
    }, []);
    useEffect(() => {
    },)
    return (
<div className="admin">
            <Container fluid='lg'>
                <div className='header'>
                    <Link to='/'>
                        <HomeIcon />
                        <span>Back to home</span>
                    </Link>
                </div>
                <div className='body'>
                    <div className='filter'>
                        <span className={`${Statistics && 'option--active'}`}>Thống kê</span>
                        <span className={`${Menu && 'option--active'}`} >Thông tin nhân viên</span>
                        <span className={`${Staff && 'option--active'}`}>Chỉnh sửa thực đơn</span>
                    </div>
                </div>
                <Statistics_NumOfOrders></Statistics_NumOfOrders>
                <h1>Biểu đồ thống kê doanh thu trong vòng 30 ngày</h1>
                <HighlightCard />
                <Statistics_revenue />
                <h1>Biểu đồ thống kê tần suất gọi món trong ngày</h1>
                <p>Vẫn đang làm :'D</p>
            </Container>
        </div>
    )
}