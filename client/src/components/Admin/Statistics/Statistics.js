// import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
// import { useHistory } from "react-router-dom";
// import HomeIcon from '@material-ui/icons/Home';
import DownArrow from '@material-ui/icons/ArrowDropDownCircle';
// import { Container, formatMs } from '@material-ui/core';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './index.css';
import {DateRangePicker} from 'react-date-range';
import { addDays } from 'date-fns';
import Statistics_NumOfOrders from "./Statistics_NumOfOrders";
import Statistics_revenue from "./Statistics_revenue";
import getStatistic from '../../../midlewares/getStatistic';

export default function Statistics(){
     const [dateRange, detDateRange] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
    ]);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);
    let optionRef = useRef();
    function getData(startDate, endDate) {
        var orders = getStatistic(startDate, endDate);
        if (orders) {
            orders.then(res => {
                console.log(res.data)
                if (res.data.filtered_orders) {
                    setData([...res.data.filtered_orders]);
                }
            })
        }
    }
    useEffect(() => {
                    getData(dateRange[0].startDate.toISOString(), dateRange[0].endDate.toISOString());
                    // try {
                    //     socket = socketClient(SERVER);
                    //     socket.on('admin', () => {
                    //         getData(dateRange[0].startDate, dateRange[0].endDate);
                    //     })
                    // }
                    // catch (err) {
                    //     console.log(err)
                    // }
    }, [dateRange]);
    useEffect(() => {
        // console.log(dateRange[0]["startDate"]);
        // console.log(dateRange);
        // console.log(open);
        let handler = (event) =>{
            if (!optionRef.current.contains(event.target)){
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    });

    return (
        <div ref={optionRef}>
            <h1>this is the statistics component</h1>
             <a href="#" className="icon-button" onClick={()=> setOpen(!open)} >
                    <DownArrow fontSize="large"/>
                    </a>
                    <div className="dateRangePicker">
                        {open && <DateRangePicker
                        onChange={item => detDateRange([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={dateRange}
                        direction="horizontal"
                    />}
                    </div>
                    <Statistics_NumOfOrders startDate={dateRange[0].startDate} endDate={dateRange[0].endDate}/>
        </div>
    )
}