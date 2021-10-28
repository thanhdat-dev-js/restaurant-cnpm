import '../scss/payment.scss';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Payment() {
    const [value, setValue] = useState(null);
    const [show, setShow] = useState(false);
    const handleClickConfirm = () => {
        if (value === 'online') {
            setShow(true);
        }
        if (value === 'offline') {
            setShow(true);
        }
    }
    const clickRadio = (cur) => {
        setValue(cur);
    }
    useEffect(() => {
        console.log(value);
    })
    return (
        <div className="payment">
            <div className="main">
                {show ?
                    <div className='qr'>
                        {value === 'online' &&
                            <>
                                <h1>Scan me</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="tiny" width="200" height="200">
                                    <rect shape-rendering="optimizeSpeed" x="0" y="0" width="200" height="200" fill="white" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="19" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="47" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="89" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="103" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="145" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="166" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="173" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="12" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="19" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="19" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="89" y="19" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="19" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="103" y="19" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="19" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="19" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="89" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="110" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="166" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="26" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="89" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="103" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="110" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="117" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="166" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="33" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="110" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="166" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="40" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="47" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="47" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="47" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="47" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="47" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="47" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="19" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="47" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="110" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="145" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="166" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="173" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="54" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="61" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="61" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="61" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="19" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="47" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="61" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="103" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="117" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="68" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="19" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="47" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="61" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="117" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="145" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="166" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="173" y="75" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="61" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="89" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="117" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="145" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="173" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="82" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="47" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="61" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="89" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="117" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="131" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="145" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="89" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="19" y="96" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="96" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="96" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="61" y="96" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="96" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="96" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="96" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="110" y="96" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="117" y="96" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="96" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="145" y="96" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="96" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="19" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="47" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="61" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="110" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="117" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="145" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="173" y="103" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="110" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="110" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="110" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="61" y="110" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="110" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="117" y="110" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="110" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="110" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="110" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="173" y="110" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="110" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="61" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="110" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="117" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="131" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="145" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="166" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="117" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="47" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="61" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="103" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="131" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="145" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="166" y="124" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="131" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="131" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="131" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="103" y="131" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="131" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="131" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="166" y="131" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="19" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="47" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="138" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="145" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="145" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="145" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="145" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="145" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="89" y="145" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="110" y="145" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="117" y="145" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="145" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="145" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="89" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="117" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="131" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="145" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="166" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="173" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="152" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="75" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="103" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="110" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="131" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="173" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="159" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="103" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="110" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="117" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="145" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="166" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="166" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="173" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="173" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="173" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="173" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="103" y="173" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="173" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="131" y="173" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="145" y="173" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="152" y="173" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="173" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="12" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="19" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="26" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="33" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="40" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="47" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="54" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="68" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="82" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="89" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="96" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="103" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="124" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="131" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="138" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="159" y="180" width="7" height="7" fill="black" />
                                    <rect shape-rendering="optimizeSpeed" x="180" y="180" width="7" height="7" fill="black" />
                                </svg>
                            </>
                        }
                        {
                            value === 'offline' && <h1>Vui lòng thanh toán tiền để thu ngân xác nhận</h1>
                        }
                        <Link to='/'>Back to home</Link>
                    </div>
                    :
                    <>
                        <h1>Vui lòng chọn hình thức thanh toán</h1>
                        <FormControl component="fieldset">
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel value="1" onClick={() => clickRadio('offline')} control={<Radio color="secondary" />} label="Thanh toán bằng tiền mặt" />
                                <FormControlLabel value="2" onClick={() => clickRadio('online')} control={<Radio color="secondary" />} label="Thanh toán bằng QR code" />
                            </RadioGroup>
                        </FormControl>
                        <Button className='btn-modal' variant="contained" color="secondary" onClick={() => handleClickConfirm()}>
                            Xác nhận
                        </Button>
                    </>}
            </div>
        </div>
    )
}