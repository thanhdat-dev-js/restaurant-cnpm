import axios from 'axios';
const verifyReserve = (datetime)  => {
    try {
        return {
            status: true,
        }
    }
    catch (e) {
        console.log(e);
    }
}

export default verifyReserve