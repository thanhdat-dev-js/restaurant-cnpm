import { Button, TextField} from '@material-ui/core';
import {AdapterDateFns,LocalizationProvider} from '@mui/lab';
import '../scss/reserveform.scss';
import React from 'react';

function ReserveForm() {
    // const theme = createTheme({
    //     status: {
    //         danger: '#e53e3e',
    //     },
    //     palette: {
    //         primary: {
    //             main: '#0971f1',
    //             darker: '#053e85',
    //         },
    //         neutral: {
    //             main: '#64748B',
    //             contrastText: '#fff',
    //         },
    //     },
    // });
    return (
        <div className="reserve-form">
            <div  className="form-1">
                <h1>Make a reservation</h1>
                <div className="check-table-form">
                    <div className="form-row"> 
                        <div className="form-cell">
                            <div>
                                <TextField 
                                    variant="outlined" 
                                    label="Date"
                                    name="date" 
                                    placeholder="Date to reserve ..."
                                    InputLabelProps={{style: {fontSize: 16}}}
                                />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>...</LocalizationProvider>
                            </div>
                        </div>
                        <div className="form-cell">
                            <div >
                                <TextField 
                                    variant="outlined" 
                                    label="Time"
                                    name="time" 
                                    placeholder="Time to come ..."
                                    InputLabelProps={{style: {fontSize: 16}}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-row"> 
                        <div className="form-cell">
                            <div>
                                <TextField 
                                    variant="outlined" 
                                    label="Adults"
                                    name="adults" 
                                    placeholder="Number of adults ..."
                                    InputLabelProps={{style: {fontSize: 16}}}
                                />
                            </div>
                        </div>
                        <div className="form-cell">
                            <div>
                                <TextField 
                                    variant="outlined" 
                                    label="Children"
                                    name="children" 
                                    placeholder="Number of children ..."
                                    InputLabelProps={{style: {fontSize: 16}}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-btn-row">
                        <Button className="form-btn" variant="contained" color="secondary">
                            Check available tables
                        </Button>
                    </div>
                </div>
            </div>
            <div  className="form-2">

                <h1>How can we contact you?</h1>
                <div className="personal-info-form">
                    <div className="form-cell">
                        <TextField 
                            variant="outlined" 
                            label="First name"
                            name="fname" 
                            placeholder="Your first name ..."
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-cell">
                        <TextField 
                            variant="outlined" 
                            label="Last name"
                            name="lname" 
                            placeholder="Your last name ..."
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-cell">
                        <TextField 
                            variant="outlined" 
                            label="Phone number"
                            name="phone" 
                            placeholder="Your phone number ..."
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-cell">
                        <TextField 
                            variant="outlined" 
                            label="Email address"
                            name="email" 
                            placeholder="Your email address ..."
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-btn-row">
                        <Button className="form-btn" variant="contained" color="secondary">
                            Confirm reservation
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReserveForm
