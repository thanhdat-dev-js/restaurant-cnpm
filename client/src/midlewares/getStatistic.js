import axios from 'axios';
export default function getStatistic(startDate,endDate) {
    console.log("at middleware getStatistic");
    console.log(startDate);
    console.log(endDate);
    try {
        const token = localStorage.getItem('TOKEN') || null;
        if (token) {
            let reqOptions = {
                url: `http://localhost:4000/admin/statistics?startTime=${startDate}&endTime=${endDate}`,
                params: { token },
                method: "GET",
            }
            console.log(reqOptions.url)
            return axios.request(reqOptions)
        }
        else return null;
    }
    catch (e) {
        console.log(e);
    }
}
