import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Input, Button } from '@material-ui/core';
import '../scss/login.scss';


import axios from 'axios';

export default function Login() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
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
            url: "http://127.0.0.1:4000/login",
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
                setError(err);
            })
    }
    return (
        <div className='login'>
            <div >
                <label for='email'>Email</label>
                <Input type='text' id='email' name='email' onChange={handleOnchangeEmail} />
                <label for='password'>Password</label>
                <Input type='password' id='password' name='password' onChange={handleOnchangePass} />
                <Button variant="contained" color="secondary" onClick={handleLogin} >Login</Button>
            </div>
            {
                error && <div>
                    <h1>{error}</h1>
                </div>
            }
        </div>
    )
}
