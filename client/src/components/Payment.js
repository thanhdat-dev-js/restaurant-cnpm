import { Link } from 'react-router-dom';
import '../scss/admin.scss';
import HomeIcon from '@material-ui/icons/Home';
import { Container } from '@material-ui/core';

export default function Payment() {
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
                    <h1>Payment</h1>
                </div>
            </Container>
        </div>
    )
}