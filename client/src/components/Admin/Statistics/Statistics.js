import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import DownArrow from '@material-ui/icons/ArrowDropDownCircle';
import { Container, formatMs } from '@material-ui/core';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './index.css';
import {DateRangePicker} from 'react-date-range';
import { addDays } from 'date-fns';
import Statistics_NumOfOrders from "./Statistics_NumOfOrders";
import Statistics_revenue from "./Statistics_revenue";

export default function Statistics(){
     const [dateRange, detDateRange] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
    ]);
    const [open, setOpen] = useState(false);
    let optionRef = useRef();
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
        </div>
    )
}