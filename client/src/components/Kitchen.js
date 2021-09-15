import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../scss/kitchen.scss';

export default () => {
    return (
        <Container fluid='lg'>
            <h1>Kitchen</h1>
            <Link to="/">
                home
            </Link>
        </Container>
    )
}