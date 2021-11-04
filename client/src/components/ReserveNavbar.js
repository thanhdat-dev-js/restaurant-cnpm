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
							<Link to='/'>
								<HomeIcon />
								<span>Back to home</span>
							</Link>
						</li>
							
					</ul>
					{!homeOnly ? 
						(
						<ul>
							<li>
								<Link to="/reserve">
									<span>Reserve</span>
									<ReceiptIcon />
								</Link>
							</li>
							<li>
								<Link to="/reservelist">
									<span>Reserve List</span>
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
