import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';

import verifyToken from '../midlewares/verifyToken';
import '../scss/reservenavbar.scss';

function ReserveNavbar(props) {
	const homeOnly = props.homeOnly || false;
	const [isAuthen, setIsAuthen] = useState(false);
	const [permission, setPermission] = useState('customer');
	useEffect(() => {
		const getInfo = verifyToken();
		if (getInfo) {
			getInfo.then(res => {
				if (res.data.permission) {
					setIsAuthen(true);
					setPermission(res.data.permission);
				}
			})
		}
	}, [permission, isAuthen]);
	return (
		<div className="reserve_navbar">
			<Container fluid='lg'>

				<div className="header">
								
					<ul>
						<li>
							<Link to='/' sx={{}}>
								<HomeIcon id='home-icon' />
								<span>Về trang chủ</span>
							</Link>
						</li>
							
					</ul>
					{!homeOnly && permission === 'customer' ? 
						(
						<ul>
							<li>
								<Link to="/reserve">
									<span>Đặt bàn</span>
									<ReceiptIcon />
								</Link>
							</li>
							
							<li>
								<Link to="/reservelist">
									<span>Danh sách bàn đặt</span>
									<ReceiptIcon />
								</Link>
							</li>
						</ul>
						)
						:
						''
					}
				</div>
				{/* {loading ? <HashLoader loading={loading} color='blue' margin=''></HashLoader> : <div className="body"></div>} */}
			</Container >
		</div >
	)
}

export default ReserveNavbar
