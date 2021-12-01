import { Box, Button, Container, Grid, TextField } from '@material-ui/core'
// import { styled } from '@material-ui/core';
import React, {useEffect} from 'react'
import ReserveNavbar from './ReserveNavbar'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SecurityIcon from '@mui/icons-material/Security';
import { useState } from 'react';

import getProfile from '../midlewares/getProfile';
import putProfile from '../midlewares/putProfile';

function UserProfile() {
	const [profile, setProfile] = useState({})
	const [displayName, setDisplayName] = useState('')
	const [changeDB, setChangeDB] = useState('')

	useEffect(() => {
		const fetch = async () => {
			const pf = await getProfile()
			const theProfile = pf.data['theProfile']
			setProfile(theProfile)
			if (theProfile.fname || theProfile.lname) 
				setDisplayName(theProfile.fname.concat(' ').concat(theProfile.lname))
			// console.log("Profile")
			// console.log(pf.data['theProfile'])
		}
		fetch()
	}, [changeDB])

	const handleOnChangeFname = (e) => {
		setProfile({
			...profile,
			fname: e.target.value
		})
	}

	const handleOnChangeLname = (e) => {
		setProfile({
			...profile,
			lname: e.target.value
		})
	}

	const handleOnChangePhone = (e) => {
		setProfile({
			...profile,
			phone: e.target.value
		})
	}

	const handleOnclickSubmitbtn = (e) => {
		e.preventDefault()
		// console.log("Handle submit")
		// console.log(profile)
		putProfile(profile)
		setChangeDB(!changeDB)
		// console.log(res)
	}

	if (!profile.email) {
		return "loading data"
	}

	return (
		<Container fluid='lg' sx={{}}>
			<ReserveNavbar homeOnly={true}/>
			<Container fluid='lg' sx={{p:2}}>
				<Box sx={{bgcolor: '#F8F8F8',p:2, height: '100vh' }}>
					<Box 
						sx={{
							display:'flex', 
							px: 5, bgcolor:'white', height:'98%'
						}}
					>
						<Box id="sidebar" sx={{maxWidth: '35%', py: 8, pr: 6}} style={{borderRight: '4px solid #dfdfdf'}}>
							<Box 
								id="sidebar-title" 
								sx={{fontWeight:600, 
								fontSize: 20, mb:3}}
							>	
								Thông tin tài khoản
							</Box>
							<Box 
								id='sidebar-list' 
								sx={{display:'flex', flexDirection:'column'}}
							>
								<Box 
									id='sidebar-item' 
									sx={{display:'flex', alignItems:'center', mb: 1, fontSize: 30}}
								>
									<AccountCircleIcon fontSize='inherit'/>
									<Box sx={{ml: 1, fontSize: 18, display: {xs: 'none', md:'block'}}}>Tài khoản</Box>
								</Box>

								<Box 
									id='sidebar-item' 
									sx={{display:'flex', alignItems:'center', fontSize: 30}}
								>
									<SecurityIcon fontSize='inherit' />
									<Box sx={{ml: 1,fontSize: 18, display: {xs: 'none', md:'block'}}}>Cài đặt bảo mật</Box>
								</Box>
							</Box>
						</Box>

						<Box id="body" 
							sx={{
								width: '60%', py: 8, ml:8, 
								display:'flex', flexDirection: 'column'
							}}
						>
							<Box id="body-title" sx={{display:'flex', fontSize: 50, mb: 8}}>
								<AccountCircleIcon fontSize='inherit'/>
								<Box sx={{my: 'auto', ml: 2}}>
									{displayName==='' ?
									<Box sx={{fontSize: 20, }}>Không tên</Box>
									:
									<Box sx={{fontSize: 20, }}>{displayName}</Box>
									}
									<Box sx={{fontSize: 14, }}>{profile.username}</Box>
								</Box>
							</Box>
							<form onSubmit={handleOnclickSubmitbtn}>
								<Box sx={{mb: 3}}>
									<Grid container spacing={3}>
										<Grid item xs={12} md={6} >
											<TextField 
												variant="outlined" 
												fullWidth 
												required
												label='Tên' 
												onChange={handleOnChangeFname}
												defaultValue={profile.fname}
												InputProps={{ style: { fontSize: 14 } }}
												InputLabelProps={{ style: { fontSize: 14 } }}
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextField 
												variant='outlined' 
												fullWidth 
												required
												label='Họ' 
												onChange={handleOnChangeLname}
												defaultValue={profile.lname}
												InputProps={{ style: { fontSize: 14 } }}
												InputLabelProps={{ style: { fontSize: 14 } }}
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextField 
												variant="outlined" 
												fullWidth 
												required
												disabled 
												// label='Địa chỉ email' 
												type='email' 
												defaultValue={profile.email}
												InputProps={{ style: { fontSize: 14 } }}
												InputLabelProps={{ style: { fontSize: 14 } }}
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextField 
												fullWidth 
												variant="outlined" 
												label='Số điện thoại' 
												defaultValue={profile.phone}
												onChange={handleOnChangePhone}
												InputProps={{ style: { fontSize: 14 } }}
												InputLabelProps={{ style: { fontSize: 14 } }}
											/>
										</Grid>
									</Grid>
								</Box>
								<Button 
									fullWidth type="submit" color="secondary" variant="contained"
									
									style={{ fontSize: '14px'}}
								>
									Lưu thay đổi
								</Button>
							</form>
						</Box>
					</Box>
				</Box>
			</Container>
		</Container>
	)
}

export default UserProfile
