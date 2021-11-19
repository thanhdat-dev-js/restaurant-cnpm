import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';
import '../scss/login.scss';


import axios from 'axios';

export default function Login() {
    const history = useHistory();
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('');
    function handleOnchangeEmail(e) {
        setLoginForm({
            ...loginForm,
            email: e.target.value
        })
    }
    function handleOnchangePass(e) {
        setLoginForm({
            ...loginForm,
            password: e.target.value
        })
    }
    function handleLogin() {
        let reqOptions = {
            url: "http://localhost:4000/login",
            method: 'POST',
            data: loginForm
        }
        axios.request(reqOptions)
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    localStorage.setItem('TOKEN', res.data.token);
                    history.push('/');
                }
                else {
                    localStorage.setItem('TOKEN', '');
                    setError(res.data.message)
                }
            })
            .catch(err => {
                setError(`${err}`)
            })
    }
    return (
        <div className='login'>
            <div class='form'>
                <h3><img src="https://logopond.com/logos/e6b478cef54b8fb8acfd1b4dee22f543.png" height="70" alt='logo' /></h3>
                <TextField variant="outlined" label='Email' type='text' id='email' name='email' onChange={handleOnchangeEmail} />
                <TextField variant="outlined" label='Password' type='password' id='password' name='password' onChange={handleOnchangePass} />
                <Button variant="contained" color="secondary" onClick={handleLogin}>Đăng nhập</Button>
            </div>
            {
                error &&
                <div className='error'>
                    <h3>{error}</h3>
                </div>
            }
        </div>
    )
}
