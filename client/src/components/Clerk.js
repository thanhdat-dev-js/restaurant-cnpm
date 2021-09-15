import { Link } from 'react-router-dom';
import React from 'react';
import '../scss/clerk.scss';
import '../scss/menu.scss';
import HomeIcon from '@material-ui/icons/Home';
import { Container, Grid } from '@material-ui/core';

export default function Clerk() {
    return (
        <div className="menu">
            <Container fluid='lg'>
                <div className='menu-wrap'>
                    <div className='header'>
                        <Link to='/'>
                            <HomeIcon />
                            <span>Back to home</span>
                        </Link>
                        <div >
                            <span>Cart()</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}