import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import '../scss/register.scss';


export default function Register() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [registerForm, setRegisterForm] = useState({
        email: '',
        password: '',
        username: ''
    })
    const [error, setError] = useState('');
    function handleOnchangeEmail(e) {
        setRegisterForm({
            ...registerForm,
            email: e.target.value
        })
    }
    function handleOnchangePass(e) {
        setRegisterForm({
            ...registerForm,
            password: e.target.value
        })
    }
    function handleOnchangeUsername(e) {
        setRegisterForm({
            ...registerForm,
            username: e.target.value
        })
    }
    function handleRegister() {
        let reqOptions = {
            url: "http://127.0.0.1:4000/register",
            method: 'POST',
            data: registerForm
        }
        axios.request(reqOptions)
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    history.push('/login');
                }
                else {
                    setError(res.data.message)
                }
            })
            .catch(err => {
                setError(err);
            })
    }
    return (
        <div className='register'>
            <div class='form'>
                <h3>Register</h3>
                <TextField variant="outlined" label='Name' type='text' id='name' name='name' onChange={handleOnchangeUsername} />
                <TextField variant="outlined" label='Email' type='text' id='email' name='email' onChange={handleOnchangeEmail} />
                <TextField variant="outlined" label='password' type='password' id='password' name='password' onChange={handleOnchangePass} />
                <Button variant="contained" color="secondary" onClick={handleRegister}>Register</Button>
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


