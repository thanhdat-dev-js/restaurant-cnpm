import React from 'react';

import ReserveNavbar from './ReserveNavbar';
import ReserveEdit from './ReserveEdit';
import ReserveDelete from './ReserveDelete';
import '../scss/reservelist.scss';

import { Container } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'

function ReserveList() {
    var data = [
        {
            datetime: "2021-10-24 07:22 CH",
            adults: 2,
            children: 2,
            fname: "Edward",
            lname: "Cullen",
            phone: "123456789",
            email: "edward@gmail.com"
        },
        {
            datetime: "2021-10-24 07:22 CH",
            adults: 2,
            children: 2,
            fname: "Alice",
            lname: "Cullen",
            phone: "987654321",
            email: "alice@gmail.com"
        },
    ]
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
                            {data.map((data) => {
                                return (
                                <tr>
                                    <td>{data.datetime}</td>
                                    <td>{data.fname + ' ' + data.lname}</td>
                                    <td>{data.children + data.adults}</td>
                                    <td>{data.phone}</td>
                                    <td><ReserveEdit fname={data.fname} lname={data.lname} phone={data.phone} email={data.email}/></td>
                                    <td><ReserveDelete /></td>
                                </tr>
                            )})}
                        </table>
                    </div>
                </Container>
            </div>
        </div>        
    )
}

export default ReserveList;