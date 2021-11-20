import React, { useEffect, useState } from "react";
// import { useMemo } from "react";
import { Bar } from 'react-chartjs-2';

const dateDiff = (startDate, endDate) => {
    const date1 = startDate;
    const date2 = endDate;
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
}

const StatisticsNumOfOrders = (props) => {

    const { startDate, endDate, data } = props;
    // console.log(data);
    const numOfDays = dateDiff(startDate, endDate) + 1;
    const [graphData, setGraphData] = useState(Array.from(Array(3), _ => Array(numOfDays).fill(0)));
    var arr = Array.from(Array(3), _ => Array(numOfDays).fill(0));
    // arr[0] for Day
    // arr[1] for Confirmed
    // arr[2] for Cancelled

    useEffect(() => {
        async function fetchData() {
            for (let i = 0; i < numOfDays; i++) {
                let Day = new Date(endDate - 86400000 * i).setHours(0, 0, 0, 0);
                arr[0][numOfDays - i - 1] = new Date(Day).toLocaleDateString();
            }
            await data.forEach((order) => {
                const dayOfOrder = new Date(order.updatedAt).setHours(0, 0, 0, 0);
                const index = arr[0].findIndex((day) => {
                    return day === new Date(dayOfOrder).toLocaleDateString();
                })
                if (order.status === "cancel") {
                    arr[2][index]++;
                }
                else if (order.status === "confirmed") {
                    arr[1][index]++;
                }
            })
            setGraphData(arr);
        }
        fetchData();

        // console.log(arr);
        // setGData();
    }, [data]);
    return (
        <div>
            <h1>Số lượng đơn trong ngày</h1>
            <Bar
                data={{
                    labels: graphData[0],
                    datasets: [
                        {
                            label: 'Xác nhận',
                            data: graphData[1],
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.2)',
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                            ],

                            borderWidth: 1,

                        },
                        {
                            label: 'Huỷ',
                            data: graphData[2],

                            borderWidth: 1,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                            ],
                        },

                    ]
                }}
                width={300}
                height={100}
                options={{
                    maintainAspectRatio: true,
                    scales: {
                        x: {
                            stacked: true
                        },
                        y: {
                            stacked: true,
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }}
            ></Bar>
        </div>
    )
}

export default StatisticsNumOfOrders