import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Admin() {
    return (
        <Container fluid='lg'>
            <h1>Admin</h1>
            <Link to="/">
                Home
            </Link>
        </Container>
    )
}