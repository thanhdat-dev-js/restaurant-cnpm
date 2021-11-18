import { Box, Button, Container, Grid, TextField } from '@material-ui/core'
import { styled } from '@material-ui/core';
import React, { Profiler } from 'react'
import ReserveNavbar from './ReserveNavbar'

import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SecurityIcon from '@mui/icons-material/Security';
import { useState } from 'react';

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
				<Box sx={{bgcolor: '#F8F8F8',p:2, height: '100vh' }}>
					<Box 
						fullWidth 
						sx={{
							display:'flex', 
							px: 5, bgcolor:'white', height:'98%'
						}}
					>
						<Box id="sidebar" sx={{maxWidth: '35%', py: 8, pr: 6}} style={{borderRight: '1px solid grey'}}>
							<Box 
								id="sidebar-title" 
								sx={{fontWeight:600, 
								fontSize: 20, mb:3}}
							>
								User Profile
							</Box>
							<Box 
								id='sidebar-list' 
								sx={{display:'flex', flexDirection:'column'}}
							>
								<Box 
									id='sidebar-item' 
									sx={{display:'flex', alignItems:'center', mb: 1, fontSize: 22}}
								>
									<AccountCircleIcon fontSize='inherit'/>
									<Box sx={{ml: 1, fontSize: 18}}>My Profile</Box>
								</Box>

								<Box 
									id='sidebar-item' 
									sx={{display:'flex', alignItems:'center', fontSize: 22}}
								>
									<SecurityIcon fontSize='inherit' />
									<Box sx={{ml: 1,fontSize: 18}}>Security Settings</Box>
								</Box>
							</Box>
						</Box>

						<Box id="body" 
							sx={{
								width: '60%', py: 8, ml: 8, 
								display:'flex', flexDirection: 'column'
							}}
						>
							<Box id="body-title" sx={{display:'flex', fontSize: 50, mb: 8}}>
								<AccountCircleIcon fontSize='inherit' x={{}}/>
								<Box sx={{fontSize: 20, my: 'auto', ml: 2}}>{profile.FirstName} {profile.LastName}</Box>
							</Box>
							<Box sx={{mb: 3}}>
								<Grid container spacing={3}>
									<Grid item xs={12} md={6} >
										<TextField 
											fullWidth 
											label='First Name' 
											variant="outlined" 
											name="FirstName" 
											defaultValue={profile['FirstName']}
											placeholder={profile.FirstName}
											InputProps={{ style: { fontSize: 14 } }}
											InputLabelProps={{ style: { fontSize: 14 } }}
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField 
											fullWidth 
											label='Last Name' 
											variant='outlined' 
											defaultValue={profile['LastName']}
											name='LastName'
											InputProps={{ style: { fontSize: 14 } }}
											InputLabelProps={{ style: { fontSize: 14 } }}
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField 
											fullWidth 
											disabled 
											label='Email' 
											type='email' 
											defaultValue={profile['Email']}
											variant="outlined" 
											InputProps={{ style: { fontSize: 14 } }}
											InputLabelProps={{ style: { fontSize: 14 } }}
										/>
									</Grid>
									<Grid item xs={12} md={6}>
										<TextField 
											fullWidth 
											defaultValue={profile['Phone']}
											label='Phone number' 
											variant="outlined" 
											InputProps={{ style: { fontSize: 14 } }}
											InputLabelProps={{ style: { fontSize: 14 } }}
										/>
									</Grid>
								</Grid>
							</Box>
							<Button 
								fullWidth type="submit" color="secondary" variant="contained"
								// onClick={handleOnclickConfirmbtn}
								style={{ fontSize: '14px'}}
							>
								Save Changes
							</Button>
						</Box>
					</Box>
				</Box>
			</Container>
		</Container>
	)
}

export default UserProfile
