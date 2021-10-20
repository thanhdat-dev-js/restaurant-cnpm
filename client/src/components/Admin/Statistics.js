import React from "react";
const { data } = require('./test-data')

export default function Statistics() {
    return <div>
        <h1>This is the statistics page</h1>
        {
            data.map((order) => {
                return <h1>{order.orderID}</h1>;
            })
        }
    </div>;
}