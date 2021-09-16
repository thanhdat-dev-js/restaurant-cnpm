import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../scss/clerk.scss';
import HomeIcon from '@material-ui/icons/Home';
import { Container } from '@material-ui/core';
import verifyToken from '../midlewares/verifyToken';

export default function Clerk() {
    const history = useHistory();
    useEffect(() => {
        const getInfo = verifyToken();
        if (getInfo) {
            getInfo.then(res => {
                console.log(res);
                if (res.data.permission !== 'clerk') {
                    history.push("/login");
                }
            })
        }
    }, []);
    useEffect(() => {

    })
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
                </div>
            </Container>
        </div>
    )
}