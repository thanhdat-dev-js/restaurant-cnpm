import { Box, Button, Container, Grid, TextField } from '@material-ui/core'
import { styled } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import ReserveNavbar from './ReserveNavbar'
import ReceiptIcon from '@material-ui/icons/Receipt';
import { useState, useEffect } from 'react';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
})

function UserProfile() {
	const userFirstName = "Edward";
	const userLastName = "Cullen";
	const userEmail = "cullen.edward@gmail.com";

	const [profile, setProfile] = useState({
		"FirstName": "Edward",
		"LastName": "Cullen",
		"Email": "cullen.edward@gmail.com",
		"Phone": "0123456789"
	});
	return (
		<Container fluid='lg' sx={{}}>
			<ReserveNavbar homeOnly={true}/>
			<Container fluid='lg' sx={{p:2}}>
				<Box sx={{bgcolor: '#F8F8F8',p:2 }}>
					<Box fullWidth sx={{display:'flex', bgcolor:'white', py: 5, px: 3, justifyContent:'space-between'}}>
						<Grid container>
							<Grid item xs={4} id="sidebar">
								<Box id="sidebar-title" sx={{fontWeight:600, fontSize: 20}}>User Profile</Box>
								<Box id='sidebar-list' sx={{display:'flex', flexDirection:'column'}}>
									<Box id='sidebar-item' sx={{display:'flex', alignItems:'center'}}>
										<ReceiptIcon />
										<Box sx={{fontSize: 18}}>My Profile</Box>
									</Box>
									<Box id='sidebar-item' sx={{display:'flex', alignItems:'center'}}>
										<ReceiptIcon />
										<Box sx={{fontSize: 18}}>Security Setting</Box>
									</Box>
								</Box>
							</Grid>

							<Grid item xs={8} id="body" sx={{display:'flex', flexDirection: 'column'}}>
								<Box id="body-title" sx={{display:'flex', }}>
									<AccountCircleIcon sx={{width: 80, height: 80}}/>
									<Box sx={{display:'flex', flexDirection: 'column', my:'auto'}}>
										<Box sx={{fontSize: 20}}>{profile.FirstName} {profile.LastName}</Box>
										<Box sx={{fontSize: 16}}>{profile.Email}</Box>
									</Box>
								</Box>
								<Grid container spacing={2}>
									<Grid item xs={12} md={6} >
										<TextField fullWidth label='First Name' variant="outlined" name="FirstName" placeholder={profile.FirstName}/>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField fullWidth label='Last Name' variant="outlined" name="LastName"/>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField fullWidth label='Email' type='email' variant="outlined" />
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField fullWidth label='Phone number' variant="outlined" />
									</Grid>
								</Grid>
								<Button fullWidth>Save Changes</Button>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</Container>
	)
}

export default UserProfile
