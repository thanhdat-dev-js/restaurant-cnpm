import {React, useState} from 'react'
import { Button, TextField} from '@material-ui/core'

import '../scss/reserveform.scss'
import verifyReserve from '../midlewares/verifyReserve'



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
        verifyReserve(checkForm.datetime);
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
            <div  className="form-1">
                <h1>Make a reservation</h1>
                <form className="check-table-form">
                    <div className="form-cell">
                        <TextField 
                            required
                            fullWidth
                            variant="outlined" 
                            name="datetime" 
                            type="datetime-local"
                            onChange = {handleOnchangeDatetime}
                            InputProps={{style: {fontSize: 14}}}
                            InputLabelProps={{style: {fontSize: 14}}}
                        />
                    </div>
                    
                    <div className="form-cell">
                        <TextField 
                            required
                            fullWidth
                            type="number"
                            name="adults" 
                            label="Adults"
                            variant="outlined" 
                            placeholder="Number of adults"
                            onChange = {handleOnchangeAdults}
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>

                    <div className="form-cell">
                        <TextField 
                            required
                            fullWidth
                            type="number"
                            name="children" 
                            label="Children"
                            variant="outlined" 
                            placeholder="Number of children"
                            onChange = {handleOnchangeKids}
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>

                    <div className="form-btn-row">
                        <Button 
                            fullWidth
                            type="submit"
                            variant="contained" color="secondary"
                            onclick={handleOnclickCheckbtn}
                            style={{ fontSize: '14px'}}
                            sx = {{mt: 1,}}
                        >
                            Check available tables
                        </Button>
                    </div>
                </form>
            </div>
            <div  className="form-2">
                <h1>How can we contact you?</h1>
                <div className="personal-info-form">
                    <div className="form-cell">
                        <TextField 
                            required
                            fullWidth
                            label="First name"
                            variant="outlined" 
                            placeholder="Your first name"
                            onChange = {handleOnchangeFname}
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-cell">
                        <TextField 
                            required
                            fullWidth
                            label="Last name"
                            variant="outlined" 
                            placeholder="Your last name"
                            onChange = {handleOnchangeLname}
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-cell">
                        <TextField 
                            required
                            fullWidth
                            type="tel"
                            variant="outlined" 
                            label="Phone number"
                            placeholder="Your phone number"
                            onChange = {handleOnchangePhone}
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-cell">
                        <TextField 
                            required
                            fullWidth
                            type="email"
                            variant="outlined" 
                            label="Email address"
                            placeholder="Your email address"
                            onChange = {handleOnchangeEmail}
                            InputProps={{style: {fontSize: 16}}}
                            InputLabelProps={{style: {fontSize: 16}}}
                        />
                    </div>
                    <div className="form-btn-row">
                        <Button 
                            fullWidth
                            color="secondary" variant="contained"
                            onclick={handleOnclickConfirmbtn}
                            style={{ fontSize: '14px'}}
                            sx = {{mt: 1,}}
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
