import React, {useEffect, useState} from "react";
import {Bar} from 'react-chartjs-2'
const {data} = require ('./test-data.js')



const Statistics_revenue = () =>{

    const [orderedData, setOrderedData] = useState([]);
    var numOfDays = 30;
    var endTime = new Date();
    var arr = Array.from(Array(3), _ => Array(numOfDays).fill(0));
    
    // arr[0] for Day
    // arr[2] for Confirmed
    // arr[3] for Cancelled
    
    useEffect(() => {
    //i is the number of day in the data
    for(let i = 1; i <= numOfDays; i++){
        let Day = new Date(endTime - 86400000*i).setHours(0,0,0,0);
        // console.log(Day);
        // arr[0][numOfDays - i] = (Day.getDate()).toString();
        // arr[1][numOfDays - i] = (Day.getMonth()).toString();
        // daysLabel.push(arr[0][numOfDays - i] + "/" + arr[1][numOfDays-i]);
        arr[0][numOfDays - i] = new Date(Day).toLocaleDateString();
    }

    data.forEach((order) =>{
        // console.log()
        const dayOfOrder = new Date(order.updatedAt.$date).setHours(0,0,0,0);
        console.log(dayOfOrder);
        // find the right index of the order in the arr
        const index = arr[0].findIndex((day) => {
            return day === new Date(dayOfOrder).toLocaleDateString(); 
        })
        console.log("index ", index);

        if (order.status === "confirmed"){
            arr[1][index] += order.total;
        }
    })

        console.log("use effect")
    console.log(endTime);
    console.log(arr);
    }, [])
    return (
    <div>
        
        <Bar
            data = {{
                labels: arr[0],
                datasets: [
                    {
                        label: 'Tổng doanh thu',
                        data: arr[1],
                        backgroundColor:[
                            'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
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

export default Statistics_revenue