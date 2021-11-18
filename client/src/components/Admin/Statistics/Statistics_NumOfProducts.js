import React, {useEffect, useState} from "react";
// import { useMemo } from "react";
import {Bar} from 'react-chartjs-2';
import { TextField } from "@mui/material";

const Statistics_NumOfProducts = (props) =>{
    // const data1 = data
    const {data} = props;
    const [NoOfProducts, setNoOfProducts] = useState(0);
    // console.log(data);
    const [graphData, setGraphData] = useState(Array.from(Array(2), _ => Array(NoOfProducts).fill(0)));
    const [ProductsCount,setProductsCount] = useState(new Map());

    
    useEffect(async () => {

    let productsCnt = new Map();
    await data.forEach((order) =>{
        const products = order.products;
        products.forEach((product) =>{
            // console.log("product", product)
            if (productsCnt.has(product.name)){
                let cnt = productsCnt.get(product.name)
                productsCnt.set(product.name, cnt + product.quantity)
            }
            else {
                productsCnt.set(product.name, product.quantity)
            }
                
        })
    })
    setProductsCount(new Map([...productsCnt.entries()].sort((a,b) => b[1] - a[1])));
    console.log(ProductsCount);
    setNoOfProducts(ProductsCount.size);
    }, [data]);
    useEffect(()=>{
        var arr = Array.from(Array(2), _ => Array(NoOfProducts).fill(0));
        arr[0] = [...ProductsCount.keys()].splice(0, NoOfProducts);
        arr[1] = [...ProductsCount.values()].splice(0, NoOfProducts);
        setGraphData(arr);
    }, [NoOfProducts])
    function handleChangeNoOfProducts(e){
        let value = e.target.value;
        if (value ==""){
            value = 1
        }
        console.log(value);
        setNoOfProducts(value);
    }
    return (
    <div className="NumOfProducts">
        <div className="Header">
        <h1>Đây là bảng thống kê theo số lần món được đặt</h1>
         <TextField 
             onChange = {handleChangeNoOfProducts} 
             value = {NoOfProducts} 
             type="text"
             label="Số lượng món"                
             InputProps={{style: {fontSize: 17}}}
             InputLabelProps={{style: {fontSize: 17}}}
        />
        </div>
        <Bar
            data = {{
                labels: graphData[0],
                datasets: [
                    {
                        label: 'Số lượng',
                        data: graphData[1],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.2)'
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
                        beginAtZero: true,
                        ticks:{
                            stepSize: 10
                        }
                    }
                }
            }}
        ></Bar>
    </div>
    )
}

export default Statistics_NumOfProducts