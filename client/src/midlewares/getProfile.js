import axios from 'axios';
export default function getProfile() {
    try {
        const token = localStorage.getItem('TOKEN') || null;
        if (token) {
            let reqOptions = {
                url: `http://localhost:4000/profile?`,
                params: { 
                    token
                },
                method: "GET",
            }
            return axios.request(reqOptions)
        }
        else return null;
    }
    catch (e) {
        console.log(e);
    }
}