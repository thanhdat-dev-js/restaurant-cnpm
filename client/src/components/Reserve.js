import { Container } from '@material-ui/core';
import React from 'react';
import ReserveNavbar from './ReserveNavbar';
import ReserveForm from './ReserveForm';
import '../scss/reserve.scss';

function Reserve() {
	
  return (
    <div className="reserve">
      <ReserveNavbar/>
      <Container fluid="lg">
        <div className="reserve-body"> 
          <div className="reserve-form-container">
            <ReserveForm/>
          </div>
        </div>
      </Container>
    </div>
	)
}

export default Reserve
