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
import Statistics_NumOfOrders from "./Statistics_NumOfOrders";
import Statistics_revenue from "./Statistics_revenue";
import getStatistic from '../../../midlewares/getStatistic';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Popup from './Popup';

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
            // console.log(dateRange[0]);
            getData(dateRange[0].startDate.toISOString(), dateRange[0].endDate.toISOString());
    }, [dateRange]);

    return (
        <div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
                    <h3>My popup</h3>
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
            <h3>{dateRange[0].startDate.toISOString()} - {dateRange[0].endDate.toISOString()}</h3>
            <a href="#" className="icon-button" onClick={()=> Handle()} >
                    <DateRangeIcon fontSize="large"/>
            </a>
                    {/* <div className="dateRangePicker">
                        {open && <DateRangePicker
                        onChange={item => detDateRange([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={dateRange}
                        direction="horizontal"
                    />}
                    </div> */}
                    <Statistics_NumOfOrders startDate={dateRange[0].startDate} endDate={dateRange[0].endDate} data={data}/>
        </div>
    )
}