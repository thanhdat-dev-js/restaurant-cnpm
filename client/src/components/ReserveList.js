import React from 'react';

import ReserveNavbar from './ReserveNavbar';
import ReserveEdit from './ReserveEdit';
import ReserveDelete from './ReserveDelete';
import '../scss/reservelist.scss';

import { Container } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'

function ReserveList() {
    return (
        <div>
            <ReserveNavbar/>
            <div className="reserve-list">
                <Container fluid='lg'>
                    <div>
                        <div className="reserve-title">
                            <p>Customer Reservation</p>
                        </div>
                        <table>
                            <tr>
                                <th>Date and time</th>
                                <th>Customer's Full Name</th>
                                <th>Number of People</th>
                                <th>Phone Number</th>
                                <th><Edit fontSize="large"/></th>
                                <th><Delete fontSize="large"/></th>
                            </tr>
                        </table>
                    </div>
                </Container>
            </div>
        </div>        
    )
}

export default ReserveList;