import React from 'react'
import { Bar } from "react-chartjs-2";
import { CategoryScale ,BarElement, LinearScale,Chart,ArcElement } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement);
const salesData = {
  labels: ['2014', '2015', '2016', '2017','2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [{
    label: '# of Votes',
    data: [1,3,2,7,5, 12, 7, 11, 10, 17],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
}
const BarChart = () => {
  
  return (
    <>
      <div className=''>

      <Bar
          data={salesData}
          width={600}
          height={400}
          options={{
            maintainAspectRatio: false,
            responsive:true
          }}
          />
      </div>
    </>
  )
}

export default BarChart