import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import KitchenIcon from '@material-ui/icons/Kitchen';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { HashLoader } from 'react-spinners';
import verifyToken from '../midlewares/verifyToken';
import '../scss/home.scss';
export default () => {
    const [isAuthen, setIsAuthen] = useState(false);
    const [permission, setPermission] = useState('customer');
    useEffect(() => {
        const getInfo = verifyToken();
        if (getInfo) {
            getInfo.then(res => {
                console.log(res);
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
        <div className="home">
            <Container fluid='lg'>
                <div className="wrap">
                    <div className="header">
                        <ul>
                            {permission === 'customer' && <li>
                                <Link to="/menu">
                                    <span>Menu</span>
                                    <MenuBookIcon />
                                </Link>
                            </li>}
                            {permission === 'clerk' && <li>
                                <Link to="/clerk">
                                    <span>Clerk</span>
                                    <MenuBookIcon />
                                </Link>
                            </li>}

                        </ul>
                        <ul>
                            {permission === 'customer' && <li>
                                <Link to="/menu">
                                    <span>Cart(0)</span>
                                    <ShoppingCartIcon />
                                </Link>
                            </li>}
                            {isAuthen ?
                                <>
                                    <li>
                                        <Link to="/user">
                                            <span>user</span>
                                            <ReceiptIcon />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleLogout}>
                                            <span>Log out</span>
                                            <ReceiptIcon />
                                        </Link>
                                    </li>
                                </>
                                :
                                <> <li>
                                    <Link to="/login">
                                        <span>Login</span>
                                        <ReceiptIcon />
                                    </Link>
                                </li>
                                    <li>
                                        <Link to="/register">
                                            <span>Register</span>
                                            <ReceiptIcon />
                                        </Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                {/* {loading ? <HashLoader loading={loading} color='blue' margin=''></HashLoader> : <div className="body"></div>} */}
            </Container >
        </div >
    )
}