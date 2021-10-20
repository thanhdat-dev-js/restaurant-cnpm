import React, {useEffect, useState} from "react";
import {Bar} from 'react-chartjs-2'
const {data} = require ('./test-data.js')


const Statistics_NumOfOrders = () =>{
    const [confirmed, setconfirmed] = useState(0)
    const [cancel, setcancel] = useState(0)
    
    useEffect(() => {
    console.log("use effect")
    data.forEach((order) =>{
        if (order.status === "cancel"){
            console.log("counted cancel")
            setcancel(cancel + 1)
        }
        else if (order.status === "confirmed"){
            console.log("counted confirmed")
            setconfirmed(confirmed + 1)
        }
    })
}, [])
    return (
    <div>
        <h1>Đây là bảng số liệu đơn trong ngày</h1>
        <Bar
            data = {{
                labels: ['confirmed', 'cancel'],
                datasets: [
                    {
                        labels: '#s of orders',
                        data: [`${confirmed}`,`${cancel}`],
                        backgroundColor:[
                            'red','blue'
                        ],
                        borderWidth: 1,
                        
                    }
                ]
            }}
            width={600}
            height={400}
            options={{
                scales:{
                    yAxes:[
                        {
                            ticks:{
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }}
        ></Bar>
    </div>
    )
}

export default Statistics_NumOfOrders