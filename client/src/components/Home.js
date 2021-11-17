import React, { useState, useEffect } from 'react';
// import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ReceiptIcon from '@material-ui/icons/Receipt';
// import ReceiptIcon from '@material-ui/icons/Receipt';
import verifyToken from '../midlewares/verifyToken';
import ReactTypingEffect from 'react-typing-effect';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import '../scss/home.scss';
export default () => {
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
        <div className="home">
            <div fluid='lg'>
                <div className="header">
                    <ul>
                        {permission === 'customer' && <li>
                            <Link to="/menu">
                                <span>Menu</span>
                                <MenuBookIcon />
                            </Link>
                        </li>}
                        {permission === 'clerk' && 
                        <>
                        <li>
                            <Link to="/clerk">
                                <span>Clerk</span>
                                <MenuBookIcon />
                            </Link>
                        </li>
                        <li>
                            <Link to="/reservelist">
                                <span>Reserve List</span>
                                <ReceiptIcon />
                            </Link>
                        </li>
                        </>}
                        {permission === 'admin' && <li>
                            <Link to="/admin">
                                <span>admin</span>
                                <MenuBookIcon />
                            </Link>
                        </li>}
                        {permission === 'kitchen' && <li>
                            <Link to="/kitchen">
                                <span>Kichen</span>
                                <MenuBookIcon />
                            </Link>
                        </li>}
                    </ul>
                    <ul>
                        {isAuthen ?
                            <>
                                <li>
                                    <Link to="/profile">
                                        <span>Profile</span>
                                        <AccountCircleIcon />
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={handleLogout}>
                                        <span>Log out</span>
                                        <ExitToAppIcon />
                                    </Link>
                                </li>
                            </>
                            :
                            <> <li>
                                <Link to="/login">
                                    <span>Login</span>
                                </Link>
                            </li>
                                <li>
                                    <Link to="/register">
                                        <span>Register</span>
                                    </Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
                <div className="typing-effect" >
                    <img src="https://logopond.com/logos/e6b478cef54b8fb8acfd1b4dee22f543.png" alt='logo'/>;
                    <ReactTypingEffect
                        speed={80}
                        text={["Chào mừng quý khách ghé thăm nhà hàng sushi của chúng tôi!!!"]}
                        cursorRenderer={cursor => <h1>{cursor}</h1>}
                        displayTextRenderer={(text, i) => {
                            return (
                                <h1>
                                    {text.split('').map((char, i) => {
                                        const key = `${i}`;
                                        return (
                                            <span className="text-styled"
                                                key={key}
                                            >{char}</span>
                                        );
                                    })}
                                </h1>
                            );
                        }}
                    />
                </div>
            </div >
        </div >
    )
}