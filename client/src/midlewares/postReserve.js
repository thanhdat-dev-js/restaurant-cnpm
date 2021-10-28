import axios from 'axios';

const postReserve = (reserveInfo) => {
    try {
        const token = localStorage.getItem('TOKEN') || null;
        if (token) {
            let reqOptions = {
                url: `http://localhost:4000/reserve`,
                params: { 
                    token: token,
                    data: reserveInfo
                },
                method: "POST",
            }
            return axios.request(reqOptions)
        }
        else return null;
    }
    catch (e) {
        console.log(e);
    }
}

export default postReserve
