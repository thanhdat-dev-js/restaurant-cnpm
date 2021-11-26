// import { Link } from 'react-router-dom';
import React, { useEffect, useState} from 'react';
// import { useHistory } from "react-router-dom";
// import HomeIcon from '@material-ui/icons/Home';
// import { Container, formatMs } from '@material-ui/core';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './index.css';
import {DateRangePicker} from 'react-date-range';
import { addDays } from 'date-fns';
import StatisticsNumOfOrders from "./StatisticsNumOfOrders";
import StatisticsRevenue from "./StatisticsRevenue";
import StatisticsHour from "./StatisticsHour";
import getStatistic from '../../../midlewares/getStatistic';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Popup from './Popup';
import { TextField } from '@mui/material';
import StatisticsNumOfProducts from './StatisticsNumOfProducts';
const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
}
export default function Statistics(){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [dateRange, detDateRange] = useState([
{
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
}
    ]);
    const [data, setData] = useState([]);
    // let optionRef = useRef();
    function getData(startDate, endDate) {
        var orders = getStatistic(startDate, endDate);
        if (orders) {
            orders.then(res => {
                // console.log(res.data)
                if (res.data) {
                    setData(res.data);
                }
            })
        }
    }
    const Handle = () =>{
        console.log('handling edit button')
        setButtonPopup(true);
    }
    useEffect(() => {
            async function updateDate(){
                let temptDate = [...dateRange];
                temptDate[0].startDate.setTime(temptDate[0].startDate.getTime() + 60*60*1000);
                // temptDate[0].endDate.setHours(0,0,0,0);
            }
            updateDate();
            getData(dateRange[0].startDate.toISOString(), dateRange[0].endDate.toISOString());
    }, [dateRange]);

    return (
        <div className="Statistics">
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                    <div className="dateRangePicker">
                        <DateRangePicker
                        onChange={item => detDateRange([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={dateRange}
                        direction="horizontal"
                    />
                    </div>
            </Popup>
            <div className="dateRange">
                <TextField className="TextField"
                    id="outlined-read-only-input"
                    label="End Date"
                    InputLabelProps={{style: {fontSize: 17}}}
                    value={formatDate(dateRange[0].endDate)}
                    InputProps={{
                        readOnly: true,
                        style:{fontSize: 17}
                        }}
                />
                <TextField className="TextField"
                    id="outlined-read-only-input"
                    label="Start Date"
                    InputLabelProps={{style: {fontSize: 17}}}
                    value={formatDate(dateRange[0].startDate)}
                    InputProps={{
                        readOnly: true,
                        style:{fontSize: 17}
                        }}
                />

                    <DateRangeIcon fontSize="large" onClick={()=> Handle()}/>
            
            </div>

                    <StatisticsNumOfOrders startDate={dateRange[0].startDate} endDate={dateRange[0].endDate} data={data}/>
                    <StatisticsRevenue startDate={dateRange[0].startDate} endDate={dateRange[0].endDate} data={data}/>
                    <StatisticsHour data={data}/>
                    <StatisticsNumOfProducts data={data}/>

        </div>
    )
}