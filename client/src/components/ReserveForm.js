import { Button, TextField} from '@material-ui/core';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider, DatePicker} from '@mui/lab';
import '../scss/reserveform.scss';
import {React, useState} from 'react';

function ReserveForm() {
    const [checkForm, setCheckForm] = useState({
        datetime: null,
        adults: 0,
        kids: 0
    });
    const [confirmForm, setConfirmForm] = useState({
        fname: '',
        lname: '',
        phone: '',
        email: ''
    });

    const handleOnchangeDatetime = (e) => {
        setCheckForm({
            ...checkForm,
            datetime: e.target.value
        });
    }

    const handleOnchangeAdults = (e) => {
        setCheckForm({
            ...checkForm,
            adults: e.target.value,
        });
    }

    const handleOnchangeKids = (e) => {
        setCheckForm({
            ...checkForm,
            kids: e.target.value
        });
    }

    const handleOnclickCheckbtn = (e) => {
    }


    const handleOnchangeFname = (e) => {
        setConfirmForm({
            ...confirmForm,
            fname: e.target.value
        });
    }

    const handleOnchangeLname = (e) => {
        setConfirmForm({
            ...confirmForm,
            lname: e.target.value
        });
    }

    const handleOnchangePhone = (e) => {
        setConfirmForm({
            ...confirmForm,
            phone: e.target.value
        });
    }

    const handleOnchangeEmail = (e) => {
        setConfirmForm({
            ...confirmForm,
            email: e.target.value
        });
    }

    const handleOnclickConfirmbtn = (e) => {
    }

    return (
        
        <div className="reserve-form">
            <h1>{checkForm.datetime||"hello"}</h1>
            <div  className="form-1">
                <h1>Make a reservation</h1>
                <div className="check-table-form">
                    <div className="form-cell">
                        <TextField 
                            variant="outlined" 
                            name="datetime" 
                            type="datetime-local"
                            fullWidth
                            onChange = {handleOnchangeDatetime}
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
                            onChange = {handleOnchangeAdults}
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
                            onChange = {handleOnchangeKids}
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-btn-row">
                        <Button 
                            className="form-btn" variant="contained" color="secondary"
                            onclick={handleOnclickCheckbtn}
                        >
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
                            onChange = {handleOnchangeFname}
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
                            onChange = {handleOnchangeLname}
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
                            onChange = {handleOnchangePhone}
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
                            onChange = {handleOnchangeEmail}
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-btn-row">
                        <Button 
                            className="form-btn" variant="contained" color="secondary"
                            onclick={handleOnclickConfirmbtn}
                        >
                            Confirm reservation
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReserveForm
