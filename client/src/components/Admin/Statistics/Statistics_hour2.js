import React, {useEffect, useState} from "react";
// import { useMemo } from "react";
import {PolarArea } from "react-chartjs-2";

const dateDiff = (startDate, endDate) => {
    const date1 = startDate;
    const date2 = endDate;
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
}

const Statistics_hour2 = (props) =>{

    const {data} = props;
    console.log(data);
    const start_hour=7;
    const end_hour =23;
    const NumOfHours =end_hour - start_hour;
    //const numOfDays = dateDiff(startDate, endDate) + 1;
    const [graphData, setGraphData] = useState(Array.from(Array(2), _ => Array(NumOfHours+1).fill(0)));
    var arr = Array.from(Array(2), _ => Array(NumOfHours+1).fill(0));
    // arr[0] for Day
    // arr[1] for Confirmed
    // arr[2] for Cancelled
    
    useEffect(async () => {
    //i is the number of day in the data
    for(let i = start_hour; i < end_hour+1; i++){
        //let Day = new Date(endDate - 86400000*i).setHours(0,0,0,0);
        arr[0][i-start_hour] = i.toString();
    }
    await data.forEach((order) =>{
        const TimeOfOrder = new Date(order.updatedAt).getHours();
        arr[1][TimeOfOrder-start_hour]++;
        console.log(arr[1], 'arr');
    })
    setGraphData(arr);
    // console.log(arr);
    // setGData();
    }, [data]);
    var arr1=[];
    const gio="giờ";
    for(let i = start_hour; i < end_hour; i++){
        arr1[i-start_hour]=i.toString() +' '+ gio;
    }
    return (
    <div>
        <h1>Bảng thống kê tần suất nhận đơn ở các khung giờ (PolarArea) </h1>
        <PolarArea 
            data = {{
                labels: arr1,
                datasets: [
                    {
                        label: 'Số đơn',
                        data: graphData[1],
                        fill: true,
                        backgroundColor:[
                            'rgba(255, 0, 0, 0.2)',
                            'rgba(255, 0, 0, 0.4)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.8)',
                            'rgba(255, 178, 0, 0.2)',
                            'rgba(255, 178, 0, 0.4)',
                            'rgba(255, 178, 0, 0.6)',
                            'rgba(255, 178, 0, 0.8)',
                            'rgba(0, 113, 122, 0.2)',
                            'rgba(0, 113, 122, 0.4)',
                            'rgba(0, 113, 122, 0.6)',
                            'rgba(0, 113, 122, 0.8)',
                            'rgba(0, 180, 41, 0.2)',
                            'rgba(0, 180, 41, 0.4)',
                            'rgba(0, 180, 41, 0.6)',
                            'rgba(0, 180, 41, 0.8)',
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 1,
                    },
                    
                ]
            }}
            width={300}
            height={100}
            options = {{
                maintainAspectRatio: true,
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true
                    }
                }
            }}
        ></PolarArea >
    </div>
    )
}

export default Statistics_hour2