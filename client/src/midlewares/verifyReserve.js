import axios from 'axios';

const verifyReserve = (datetime)  => {
    try {
        const token = localStorage.getItem('TOKEN') || null;
        if (token) {
            let reqOptions = {
                url: `http://localhost:4000/reserve/verify`,
                params: { 
                    token: token,
                    data: {datetime: datetime}
                },
                method: "GET",
            };
            return axios.request(reqOptions);
        }
        return {
            status: false,
            message: 'Error from server.'
        }
    }
    catch (e) {
        console.log(e);
    }
}

export default verifyReserve