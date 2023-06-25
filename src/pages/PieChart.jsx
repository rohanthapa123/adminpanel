import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { CategoryScale ,BarElement, LinearScale,Chart,ArcElement } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement);
const trafficData = {
  labels: [
    'Red',
    'Green',
    'Yellow'
],
datasets: [{
  data: [20, 25,30,50, 100],
  backgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ],
  hoverBackgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ]
}]
};
const PieChart = () => {
  return (
    <>
      <Doughnut
       data={trafficData}
       width={400}
       height={400}
    />
    </>
  )
}

export default PieChart