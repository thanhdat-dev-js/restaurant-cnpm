import axios from 'axios';

const putProfile = (profile) => {
    try {
        const token = localStorage.getItem('TOKEN') || null;
        if (token) {
            let reqOptions = {
                url: `http://localhost:4000/profile`,
                params: { 
                    token: token,
                    fname: profile.fname,
                    lname: profile.lname,
                    phone: profile.phone,
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

export default putProfile
