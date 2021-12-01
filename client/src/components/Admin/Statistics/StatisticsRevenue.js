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

const StatisticsRevenue = (props) => {

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
                if (order.status === "confirmed") {
                    arr[1][index] = arr[1][index] + order.total;
                }
            })
            setGraphData(arr);
        }
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    return (
        <div>
            <h1>Thống kê doanh thu</h1>
            <Bar
                data={{
                    labels: graphData[0],
                    datasets: [
                        {
                            label: 'Doanh Thu',
                            data: graphData[1],
                            backgroundColor: [
                                'rgba(255, 205, 71, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 182, 71, 1)',
                            ],
                            borderWidth: 1,

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
                            beginAtZero: true
                        }
                    }
                }}
            ></Bar>
        </div>
    )
}

export default StatisticsRevenue