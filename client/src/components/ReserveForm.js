import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { createTheme } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
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
                                    label='Date' type='text' id='date' name='date' 
                                />
                            </div>
                        </div>
                        <div className="form-cell">
                            <div >
                                <TextField 
                                    variant="outlined" 
                                    label='Time' type='text' id='time' name='time' 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-row"> 
                        <div className="form-cell">
                            <div>
                                <TextField 
                                    variant="outlined" 
                                    label='Date' type='text' id='date' name='date' 
                                />
                            </div>
                        </div>
                        <div className="form-cell">
                            <div>
                                <TextField 
                                    variant="outlined" 
                                    label='Time' type='text' id='time' name='time' 
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
                    <div className="form-row"> 
                        <div className="form-cell">
                            <TextField 
                                variant="outlined" 
                                label='Date' type='text' id='date' name='date' 
                            />
                        </div>
                        <div className="form-cell">
                            <TextField 
                                variant="outlined" 
                                label='Time' type='text' id='time' name='time' 
                            />
                        </div>
                    </div>
                    <div className="form-row"> 
                        <div className="form-cell">
                            <TextField 
                                variant="outlined" 
                                label='Date' type='text' id='date' name='date' 
                            />
                        </div>
                        <div className="form-cell">
                            <TextField 
                                variant="outlined" 
                                label='Time' type='text' id='time' name='time' 
                            />
                        </div>
                    </div>
                    <div className="form-btn-row">
                        <Button className="form-btn" variant="contained" color="secondary">
                            Check available tables
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReserveForm
