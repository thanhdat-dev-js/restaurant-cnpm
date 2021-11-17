import { React, useState } from 'react'
import { Button, TextField, Box , Modal} from '@material-ui/core'

import verifyReserve from '../midlewares/verifyReserve'
import postReserve from '../midlewares/postReserve';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReserveFormCarousel from './ReserveFormCarousel';

function ReserveForm() {
    const [checking, setChecking] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
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
    const [modalOpen, setModalOpen] = useState(false);

    const handleOnchangeDatetime = (e) => setCheckForm({...checkForm,datetime: e.target.value});

    const handleOnchangeAdults = (e) => setCheckForm({...checkForm,adults: e.target.value});


    const handleOnchangeKids = (e) => setCheckForm({...checkForm,kids: e.target.value});

    const handleOnclickCheckbtn = (e) => {
        e.preventDefault();
        const ret =  verifyReserve(checkForm.datetime);
        if (ret) {
            ret.then((res) => {
                if (res.data.status===false) {
                    setErrorMsg(res.data.message);
                }
                else {
                    setChecking(false);
                    // console.log(res.data.status);
                    // console.log(res.data);
                }
            })
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
        setModalOpen(true);
        setErrorMsg('');
    }

    return (
        <Box 
            className="reserve-form" 
            sx={{bgColor: '#fff', color: '#000A43', 
                textAlign: 'center', minWidth: 180, width: '80%',
                display:'flex', justifyContent: 'space-evenly',
                flexDirection: {xs: 'column', md: 'row'},
                
            }}
            my={{xs: 5, md: 0}}
        >
            <Box sx={{my: 'auto',mx: 'auto'}} mb={{xs: 5, md: 'auto'}}>
                <img 
                    src="https://logopond.com/logos/e6b478cef54b8fb8acfd1b4dee22f543.png" 
                    alt='logo'
                    width='100%'
                    height='100%'
                    />
            </Box>
            {checking ? 
                <Box className="check-form" sx={{my: 'auto',mx: 'auto', maxWidth: 350, width: '100%'}}>
                    {/* <ReserveFormCarousel sx={{zIndex:'auto', position: 'absolute'}}/> */}
                    <Box sx={{maxWidth:350}}>
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
                                // onClick={handleOnclickCheckbtn}
                                style={{ fontSize: '14px'}}
                            >
                                Check available tables
                            </Button>
                            <Box sx={{color: 'red', fontSize: 16, textAlign: 'left', mt: 1}}>{errorMsg}</Box>
                        </form>
                    </Box>
                </Box>

            :
                <>
                <Box className="confirm-form" sx={{my: 'auto', mx: 'auto'}}>
                    
                    <Box sx={{mb: 4, fontSize:30, fontWeight: 700}}>How can we contact you?</Box>
                    <Box mb={3}>
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
                                // onClick={handleOnclickConfirmbtn}
                                style={{ fontSize: '14px'}}
                                mb={3}
                            >
                                Confirm reservation
                            </Button>
                        </form>
                    </Box>
                    <Button 
                        fullWidth color="secondary" variant="contained"
                        onClick={()=>{setErrorMsg('');setChecking(true); }}
                    >
                        
                        <ArrowBackIosIcon/>
                        <Box sx={{fontSize: '14px'}}>Change info</Box>
                    </Button>
                </Box>
                <Modal
                    open={modalOpen}
                    onClose={()=>{setModalOpen(false); setChecking(true);}}
                    aria-labelledby="modal-modal-title"
                >
                    <Box sx={{maxWidth: '50%', display: 'flex', justifyContent: 'center'}}>
                        <Box sx={{border: '1px solid'}}>Notification</Box>
                        <Box>Your reservation has been recorded.</Box>
                        
                    </Box>
                </Modal>
                </>
            }
        </Box>
    )
}

export default ReserveForm
