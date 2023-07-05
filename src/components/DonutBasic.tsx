import Chart from 'react-apexcharts';
import { DonutType } from './type';

const DonutBasic = ({countries, colors, percentArr} : DonutType) => {

    const series = percentArr;

    const options = {
        chart: {
          type: 'donut',
          width : 250,
          toolbar : {
            show : false
          }
        },
        dataLabels: {
          enabled: false
        },
        colors : colors,
        labels : countries,
        legend: {
          show : false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show : false
            }
          }
        }]
      }
  return (
    <div>
        <Chart options={options} series={series} type="donut"/>
    </div>
  )
}

export default DonutBasic