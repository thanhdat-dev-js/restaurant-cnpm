import { React, useState } from 'react'
import { Button, TextField, Box , Modal} from '@material-ui/core'

import verifyReserve from '../midlewares/verifyReserve'
import postReserve from '../midlewares/postReserve';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function ReserveForm() {
    const [checking, setChecking] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [checkForm, setCheckForm] = useState({
        status: false,
        datetime: '',
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
                    setErrorMsg(res.data.message)
                    return 
                }
                else {
                    console.log(checkForm)
                    if (parseInt(checkForm['adults'])<=0 ||
                    parseInt(checkForm['children'])<=0) {
                        setErrorMsg('Vui lòng không điền số lượng âm.')
                        return
                    }
                    else if (parseInt(checkForm['adults'])===0) {
                        setErrorMsg('Cần có ít nhất một người lớn để tiến hành đặt bàn.')
                        return
                    }
                    setChecking(false)
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
        resetCheckForm();
    }

    const resetCheckForm = () => {
        setCheckForm({
            status: false,
            datetime: '',
            adults: 0,
            kids: 0
        })
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
                        <Box sx={{mb:4, fontSize: 30, fontWeight: 700}}>Thông tin đặt bàn</Box>
                        <form className="check-table-form" onSubmit={handleOnclickCheckbtn}>
                            <Box className="form-cell" sx={{mb:3}}>
                                <TextField
                                    required fullWidth variant="outlined" type="datetime-local"
                                    onChange={handleOnchangeDatetime}
                                    defaultValue={checkForm['datetime']}
                                    InputProps={{ style: { fontSize: 14 } }}
                                    InputLabelProps={{ style: { fontSize: 14 } }}
                                />
                            </Box>

                            <Box className="form-cell" sx={{mb:3}}>
                                <TextField
                                    required fullWidth type="number" label="Người lớn"
                                    variant="outlined" placeholder="Số lượng người lớn"
                                    onChange={handleOnchangeAdults}
                                    defaultValue={checkForm['adults']}
                                    InputProps={{ style: { fontSize: 16 } }}
                                    InputLabelProps={{ style: { fontSize: 16 } }}
                                />
                            </Box>

                            <Box className="form-cell" sx={{mb:3}}>
                                <TextField
                                    required fullWidth type="number" label="Trẻ em"
                                    variant="outlined" placeholder="Số lượng trẻ em"
                                    defaultValue={checkForm['kids']}
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
                                Kiểm tra bàn trống
                            </Button>
                            <Box sx={{color: 'red', fontSize: 16, textAlign: 'left', mt: 1}}>{errorMsg}</Box>
                        </form>
                    </Box>
                </Box>

            :
                <>
                <Box className="confirm-form" sx={{my: 'auto', mx: 'auto', maxWidth:350, width: '100%'}}>
                    
                    <Box sx={{mb: 4, fontSize:30, fontWeight: 700}}>Thông tin liên hệ</Box>
                    <Box mb={3}>
                        <form className="personal-info-form" onSubmit={handleOnclickConfirmbtn}>
                            <Box className="form-cell" sx={{mb:3}}>
                                <TextField
                                    required fullWidth label="Tên"
                                    variant="outlined" placeholder="Tên"
                                    onChange={handleOnchangeFname}
                                    InputProps={{ style: { fontSize: 16 } }}
                                    InputLabelProps={{ style: { fontSize: 16 } }}
                                />
                            </Box>
                            <Box className="form-cell" sx={{mb:3}}>
                                <TextField
                                    required fullWidth label="Họ"
                                    variant="outlined" placeholder="Họ"
                                    onChange={handleOnchangeLname}
                                    InputProps={{ style: { fontSize: 16 } }}
                                    InputLabelProps={{ style: { fontSize: 16 } }}
                                />
                            </Box>
                            <Box className="form-cell" sx={{mb:3}}>
                                <TextField
                                    required fullWidth type="tel" variant="outlined" 
                                    label="Số điện thoại" placeholder="Số điện thoại"
                                    onChange={handleOnchangePhone}
                                    InputProps={{ style: { fontSize: 16 } }}
                                    InputLabelProps={{ style: { fontSize: 16 } }}
                                />
                            </Box>
                            <Box className="form-cell" sx={{mb:3}}>
                                <TextField
                                    required fullWidth type="email" variant="outlined"
                                    label="Địa chỉ email" placeholder="Địa chỉ email"
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
                                Xác nhận đặt bàn
                            </Button>
                        </form>
                    </Box>
                    <Button 
                        fullWidth color="error" variant="contained"
                        onClick={()=>{setErrorMsg('');setChecking(true); }}
                    >
                        
                        <ArrowBackIosIcon/>
                        <Box sx={{fontSize: '14px'}}>Thay đổi thông tin</Box>
                    </Button>
                </Box>
                <Modal
                    open={modalOpen}
                    onClose={()=>{setModalOpen(false); setChecking(true);}}
                    aria-labelledby="modal-modal-title"
                >
                    <Box sx={{position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '60%',
                        bgcolor: '#fff',
                        boxShadow: 24,
                        p: 3,}}
                    >
                        <Box sx={{}}>
                            <Box sx={{fontSize: 18}}>Việc đặt bàn đã được hoàn tất. Nhân viên sẽ liên hệ quý khách để xác nhận trong giây lát.</Box>
                        </Box>
                        
                    </Box>
                </Modal>
                </>
            }
        </Box>
    )
}

export default ReserveForm
