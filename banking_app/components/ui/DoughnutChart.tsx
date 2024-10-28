"use client";
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    accounts: any; // Replace 'any' with a more specific type if possible
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ accounts }) => {
    const data = {
        labels: ["Bank 1", "Bank 2", "Bank 3"], // Labels should be at the same level as datasets
        datasets: [
            {
                label: "Banks",
                data: [1250, 2500, 3750],
                backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
            }
        ]
    };

    return <Doughnut 
             data={data} 
             options={{
                cutout:"60%",
                plugins: {
                    legend: {
                        display: false
                }}
             }}/>; // Pass the data object directly
};

export default DoughnutChart;
