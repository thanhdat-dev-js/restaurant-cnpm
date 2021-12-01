import React, { useEffect, useState } from "react";
// import { useMemo } from "react";
import { Line } from "react-chartjs-2";


const StatisticsHour = (props) => {

    const { data } = props;
    // console.log(data);
    const start_hour = 7;
    const end_hour = 23;
    const NumOfHours = end_hour - start_hour;
    //const numOfDays = dateDiff(startDate, endDate) + 1;
    const [graphData, setGraphData] = useState(Array.from(Array(2), _ => Array(NumOfHours + 1).fill(0)));
    var arr = Array.from(Array(2), _ => Array(NumOfHours + 1).fill(0));
    // arr[0] for Day
    // arr[1] for Confirmed
    // arr[2] for Cancelled

    useEffect(() => {
        async function fetchData() {
            for (let i = start_hour; i < end_hour + 1; i++) {
                arr[0][i - start_hour] = i.toString();
            }
            await data.forEach((order) => {
                const TimeOfOrder = new Date(order.updatedAt).getHours();
                arr[1][TimeOfOrder - start_hour]++;
                // console.log(arr[1], 'arr');
            })
            setGraphData(arr);
        }
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
    var arr1 = [];
    const gio = "giờ";
    for (let i = start_hour; i < end_hour; i++) {
        arr1[i - start_hour] = i.toString() + ' ' + gio;
    }
    return (
        <div>
            <h1>Tần suất nhận đơn ở các khung giờ</h1>
            <Line
                data={{
                    labels: arr1,
                    datasets: [
                        {
                            label: 'Số đơn',
                            data: graphData[1],
                            fill: true,
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.2)',
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)',
                            ],
                            borderWidth: 2,
                            tension: 0.3,
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
            ></Line>
        </div>
    )
}

export default StatisticsHour