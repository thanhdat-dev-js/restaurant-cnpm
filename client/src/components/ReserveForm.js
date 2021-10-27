import { Button, TextField} from '@material-ui/core';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider, DatePicker} from '@mui/lab';
import '../scss/reserveform.scss';
import React from 'react';

function ReserveForm() {
    const [datetime, setDatetime] = React.useState(null);
    const [adults, setAdults] = React.useState(0);
    const [kids, setKids] = React.useState(0);
    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    
    return (
        
        <div className="reserve-form">
            <div  className="form-1">
                <h1>Make a reservation</h1>
                <div className="check-table-form">
                    <div className="form-cell">
                        <TextField 
                            variant="outlined" 
                            name="datetime" 
                            type="datetime-local"
                            fullWidth
                            InputProps={{style: {fontSize: 14}}}
                            InputLabelProps={{style: {fontSize: 14}}}
                        />
                    </div>
                    
                    <div className="form-cell">
                        <TextField 
                            variant="outlined" 
                            label="Adults"
                            name="adults" 
                            type="number"
                            placeholder="Number of adults"
                            fullWidth
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-cell">
                        <TextField 
                            variant="outlined" 
                            label="Children"
                            name="children" 
                            type="number"
                            placeholder="Number of children"
                            fullWidth
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
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
                            placeholder="Your first name"
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-cell">
                        <TextField 
                            variant="outlined" 
                            label="Last name"
                            name="lname" 
                            placeholder="Your last name"
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-cell">
                        <TextField 
                            variant="outlined" 
                            label="Phone number"
                            name="phone" 
                            type="tel"
                            placeholder="Your phone number"
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-cell">
                        <TextField 
                            variant="outlined" 
                            label="Email address"
                            name="email" 
                            type="email"
                            placeholder="Your email address"
                            InputProps={{style: {fontSize: 16}}}
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
