import { React, useState } from 'react'
import { Button, TextField, Box } from '@material-ui/core'

import '../scss/reserveform.scss'
import verifyReserve from '../midlewares/verifyReserve'
import postReserve from '../midlewares/postReserve';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ReserveForm() {
    const [checking, setChecking] = useState(true)
    const [checkForm, setCheckForm] = useState({
        status: false,
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

    const handleOnchangeDatetime = (e) => setCheckForm({...checkForm,datetime: e.target.value});

    const handleOnchangeAdults = (e) => setCheckForm({...checkForm,adults: e.target.value});


    const handleOnchangeKids = (e) => setCheckForm({...checkForm,kids: e.target.value});

    const handleOnclickCheckbtn = (e) => {
        e.preventDefault();
        const ret = verifyReserve(checkForm.datetime);
        if (ret.status) {
            setCheckForm({
                ...checkForm,
                status: true
            });
            setChecking(false);
        }
    }


    const handleOnchangeFname = (e) => setConfirmForm({...confirmForm,fname: e.target.value});

    const handleOnchangeLname = (e) => setConfirmForm({...confirmForm,lname: e.target.value});

    const handleOnchangePhone = (e) => setConfirmForm({...confirmForm,phone: e.target.value});

    const handleOnchangeEmail = (e) => setConfirmForm({...confirmForm,email: e.target.value});

    const handleOnclickConfirmbtn = (e) => {
        e.preventDefault();
        const res = postReserve({
            ...checkForm,
            ...confirmForm,
            firstName: confirmForm.fname,
            lastName: confirmForm.lname
        });
        console.log(res);
    }

    return (

        <Box 
            className="reserve-form" 
            sx={{mb:4, bgColor: '#fff', color: '#000A43', 
                textAlign: 'center', minWidth: 200, maxWidth: 350,  width:'80%'}}
        >
            {checking ? 
            
                <Box className="check-form">
                    <Box sx={{mb:4, fontSize: 30, fontWeight: 700}}>Make a reservation</Box>
                    <form className="check-table-form" onSubmit={handleOnclickCheckbtn}>
                        <Box className="form-cell" sx={{mb:3}}>
                            <TextField
                                required fullWidth variant="outlined" type="datetime-local"
                                onChange={handleOnchangeDatetime}
                                InputProps={{ style: { fontSize: 14 } }}
                                InputLabelProps={{ style: { fontSize: 14 } }}
                            />
                        </Box>

                        <Box className="form-cell" sx={{mb:3}}>
                            <TextField
                                required fullWidth type="number" label="Adults"
                                variant="outlined" placeholder="Number of adults"
                                onChange={handleOnchangeAdults}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 16 } }}
                            />
                        </Box>

                        <Box className="form-cell" sx={{mb:3}}>
                            <TextField
                                required fullWidth type="number" label="Children"
                                variant="outlined" placeholder="Number of children"
                                onChange={handleOnchangeKids}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 16 } }}
                            />
                        </Box>

                        <Button
                            fullWidth type="submit" variant="contained" color="secondary"
                            onclick={handleOnclickCheckbtn}
                            style={{ fontSize: '14px' }}
                        >
                            Check available tables
                        </Button>
                    </form>
                </Box>

            :
                <>
                <Box 
                    sx={{display:'flex', alignItems:'center'}}
                    onClick={()=>{setChecking(true);}}
                >
                    <ArrowBackIosIcon/>
                    <Box>Change info</Box>
                </Box>
                <Box className="confirm-form">
                    <Box sx={{mb:4, fontSize:30, fontWeight: 700}}>How can we contact you?</Box>
                    <form className="personal-info-form" onSubmit={handleOnclickConfirmbtn}>
                        <Box className="form-cell" sx={{mb:3}}>
                            <TextField
                                required fullWidth label="First name"
                                variant="outlined" placeholder="Your first name"
                                onChange={handleOnchangeFname}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 16 } }}
                            />
                        </Box>
                        <Box className="form-cell" sx={{mb:3}}>
                            <TextField
                                required fullWidth label="Last name"
                                variant="outlined" placeholder="Your last name"
                                onChange={handleOnchangeLname}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 16 } }}
                            />
                        </Box>
                        <Box className="form-cell" sx={{mb:3}}>
                            <TextField
                                required fullWidth type="tel" variant="outlined" 
                                label="Phone number" placeholder="Your phone number"
                                onChange={handleOnchangePhone}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 16 } }}
                            />
                        </Box>
                        <Box className="form-cell" sx={{mb:3}}>
                            <TextField
                                required fullWidth type="email" variant="outlined"
                                label="Email address" placeholder="Your email address"
                                onChange={handleOnchangeEmail}
                                InputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{ style: { fontSize: 16 } }}
                            />
                        </Box>

                        <Button
                            fullWidth type="submit" color="secondary" variant="contained"
                            style={{ fontSize: '14px' }}
                        >
                            Confirm reservation
                        </Button>
                    </form>
                </Box>
                </>
            }
        </Box>
    )
}

export default ReserveForm
