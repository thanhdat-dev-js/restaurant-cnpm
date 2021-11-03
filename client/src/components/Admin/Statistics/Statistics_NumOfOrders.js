import React, {useEffect, useState} from "react";
import {Bar} from 'react-chartjs-2';
const {data} = require ('./test-data.js')

const dateDiff = (startDate, endDate) => {
    const date1 = startDate;
    const date2 = endDate;
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
}

const Statistics_NumOfOrders = (props) =>{

    const {startDate, endDate} = props;
    const numOfDays = dateDiff(startDate, endDate) + 1;
    const [graphData, setGraphData] = useState(Array.from(Array(3), _ => Array(numOfDays).fill(0)));
    var arr = Array.from(Array(3), _ => Array(numOfDays).fill(0));

    // arr[0] for Day
    // arr[1] for Confirmed
    // arr[2] for Cancelled
    
    useEffect(() => {
    //i is the number of day in the data
    for(let i = 1; i <= numOfDays; i++){
        let Day = new Date(endDate - 86400000*i).setHours(0,0,0,0);
        arr[0][numOfDays - i] = new Date(Day).toLocaleDateString();
    }

    data.forEach((order) =>{
        // console.log()
        const dayOfOrder = new Date(order.updatedAt.$date).setHours(0,0,0,0);
        // console.log(dayOfOrder);
        // find the right index of the order in the arr
        const index = arr[0].findIndex((day) => {
            return day === new Date(dayOfOrder).toLocaleDateString(); 
        })
        // console.log("index ", index);
        //count order that is cancelled
        if (order.status === "cancel"){
            arr[2][index]++;
        }
        // count order that is confirmed
        else if (order.status === "confirmed"){
            arr[1][index]++;
        }
    })
    setGraphData(arr);
    }, [startDate,endDate]);
    return (
    <div>
        <h1>Đây là bảng số liệu đơn trong ngày</h1>
        <Bar
            data = {{
                labels: graphData[0],
                datasets: [
                    {
                        label: 'confirmed',
                        data: graphData[1],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1,
                        
                    },
                    {
                        label: 'cancel',
                        data: graphData[2],
                        backgroundColor:[
                            'rgba(54, 162, 235, 0.2)',
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
        ></Bar>
    </div>
    )
}

export default Statistics_NumOfOrders