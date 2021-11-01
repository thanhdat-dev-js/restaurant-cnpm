import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../scss/admin.scss';
import HomeIcon from '@material-ui/icons/Home';
import { Container } from '@material-ui/core';
import verifyToken from '../midlewares/verifyToken';
import Statistics from './Admin/Statistics/Statistics';
import Menu from './Admin/Menu/Menu';
import Staff from './Admin/Staff/Staff';

export default function Admin() {
<<<<<<< Updated upstream

    const [Active, SetActive] = useState("Statistics");
=======
    const Statistics = true;
    const Menu = false;
    const Staff = false;
>>>>>>> Stashed changes
    const history = useHistory();
    useEffect(() => {
        const getInfo = verifyToken();
        if (getInfo) {
            getInfo.then(res => {
                console.log(res);
                if (res.data.permission !== 'admin') {

                    history.push("/login");
                }
            })
        }
    }, []);
    useEffect(() => {
        console.log(Active);
    },[Active])
    return (
        <div className="admin">
            <Container fluid='lg'>
                <div className='header'>
                    <Link to='/'>
                        <HomeIcon />
                        <span>Back to home</span>
                    </Link>
                </div>
                <div className='body'>
                    <div className='filter'>
<<<<<<< Updated upstream
                        <span className={`${Active ==="Statistics" && 'option--active'}`} onClick={()=>{SetActive("Statistics")}}>Thống kê</span>
                        <span className={`${Active ==="Staff" && 'option--active'}`} onClick={()=>{SetActive("Staff")}}>Thông tin nhân viên</span>
                        <span className={`${Active ==="Menu" && 'option--active'}`} onClick={()=>{SetActive("Menu")}}>Chỉnh sửa thực đơn</span>
=======
                        <span className={`${Statistics && 'option--active'}`}>Thống kê</span>
                        <span className={`${Menu && 'option--active'}`} >Thông tin nhân viên</span>
                        <Link to='/admin/categories'>
                            <span className={`${Staff && 'option--active'}`}>Chỉnh sửa thực đơn</span>
                        </Link>
>>>>>>> Stashed changes
                    </div>
                </div>
                <div>
                    {Active==="Statistics" && <Statistics/>}
                    {Active==="Staff" && <Staff/>}
                    {Active==="Menu" && <Menu/>}
                </div>
            </Container>
        </div>
    )
}