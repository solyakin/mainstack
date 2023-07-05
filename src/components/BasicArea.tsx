
import { useState } from "react"
import Chart from "react-apexcharts";
import { AreaGraphType } from "./type";

const BasicArea = ({ views, dateTime } : AreaGraphType) => {

    const [series] = useState([
      {
        name: 'views',
        data: views
      }
    ])

    const [options] = useState(
         {
            chart: {
              height: 350,
              type: 'area',
              toolbar : {
                show : false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight',
              width : 3
            },
            colors : ["#FF5403"],
            xaxis: {
                type: 'datetime',
                categories: dateTime,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
    )
    
  return (
    <div data-testid="area-1">
        {
          <Chart 
          options={options} 
          series={series} 
          type="area" 
          height={350} 
          />
        }
    </div>
  )
}

export default BasicArea