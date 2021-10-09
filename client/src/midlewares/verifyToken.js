import axios from 'axios';
export default function auth() {
    try {
        const token = localStorage.getItem('TOKEN') || null;
        if (token) {
            let reqOptions = {
                url: "http://localhost:4000/info",
                params: { token },
                method: "GET"
            }
            return axios.request(reqOptions)
        }
        else return null;
    }
    catch (e) {
        console.log(e);
    }
}
