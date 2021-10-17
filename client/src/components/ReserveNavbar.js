import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import ReceiptIcon from '@material-ui/icons/Receipt';

import verifyToken from '../midlewares/verifyToken';
import '../scss/reservenavbar.scss';

function ReserveNavbar() {
    const [isAuthen, setIsAuthen] = useState(false);
    const [permission, setPermission] = useState('customer');
    useEffect(() => {
        const getInfo = verifyToken();
        if (getInfo) {
            getInfo.then(res => {
                if (res.data.permission) {
                    setIsAuthen(true);
                    setPermission(res.data.permission);
                }
            })
        }
    }, [permission, isAuthen]);
    function handleLogout(e) {
        e.preventDefault();
        localStorage.setItem('TOKEN', null);
        setIsAuthen(false);
        setPermission('customer');
    }
    return (
        <div className="reserve_navbar">
            <Container fluid='lg'>

                <div className="header">
                    <ul>
                        <li>
                            <Link to="/menu">
                                <span>Menu</span>
                                <MenuBookIcon />
                            </Link>
                        </li>
                        
                    </ul>
                    <ul>
                        <li>
                            <Link to="/reserve">
                                <span>Reserve</span>
                                <ReceiptIcon />
                            </Link>
                        </li>
                        <li>
                            <Link to="/reservelist">
                                <span>Reserve List</span>
                                <ReceiptIcon />
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* {loading ? <HashLoader loading={loading} color='blue' margin=''></HashLoader> : <div className="body"></div>} */}
            </Container >
        </div >
    )
}

export default ReserveNavbar
