import React, { useState, useEffect } from "react"
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from "react-chartjs-2"
import Title from "./title"
import cx from "classnames"
import { canvasContainer } from "./chart-radar.module.scss"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ChartRadar = () => {
//   const [chartData, setChartData] = useState({})

//   const chart = () => {
//     setChartData({
    //   labels: [
    //     "HTML5",
    //     "CSS3",
    //     "JavaScript",
    //     "Python",
    //     "Git",
    //     "SQL",
    //     "Gatsby.js",
    //     "MongoDB",
    //     "React.js",
    //     "Node.js",
    //   ],
//       datasets: [
//         {
        //   label: "Interests",
        //   backgroundColor: "rgba(73,174,186,0.2)",
        //   borderColor: "rgba(73,174,186,1)",
        //   pointBackgroundColor: "rgba(255,99,132,1)",
        //   pointBorderColor: "#fff",
        //   pointHoverBackgroundColor: "#fff",
        //   pointHoverBorderColor: "rgba(255,99,132,1)",
        //   data: [85, 70, 90, 70, 75, 65, 75, 70, 85, 65],
//         },
//       ],
//     })
//   }

  const options = {
    scales: {
        r: {
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    let label = context.dataset.label || ''

                    if (label) {
                        label += ': '
                    }
                    if (context.raw !== null) {
                        label += context.raw + '%'
                    }
                    return label
                }
            }
        }
    },
    maintainAspectRatio: false,
  }

//   useEffect(() => {
//     chart()
//   }, [])

  const data = {
    labels: [
        "HTML5",
        "Python",
        "CSS3",
        "MongoDB",
        "SQL",
        "React.js",
        "JavaScript",
        "Gatsby.js",
        "Git",
        "Node.js",
    ],  
    datasets: [
    {
        data: [99, 55, 95, 65, 95, 50, 95, 65, 94, 55],
        label: "Interest",
        backgroundColor: "rgba(73,174,186,0.2)",
        borderColor: "rgba(73,174,186,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",  
        // backgroundColor: 'rgba(255, 99, 132, 0.2)',
        // borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 3,
    },
    ],
};

  return (
    <section className="section bg-grey">
      <Title title="Interested In" />
      <div className={`section-center ${canvasContainer}`}>
        <Radar data={data} options={options} />
      </div>
    </section>
  )
}
export default ChartRadar
