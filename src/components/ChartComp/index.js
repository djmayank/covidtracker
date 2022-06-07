import React from "react";
import {
  ChartComponent as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function ChartComp(props) {
  const { data } = props;
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 1
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Covid active cases statewise (Top 10 states with most active cases)"
      }
    },
    scales: {
      yAxis: {
        ticks: {
          beginAtZero: true,
          autoSkip: false
        }
      },
      xAxis: {
        ticks: {}
      }
    }
  };

  const labels = [];
  const activeCaseData = [];

  let sortable = [];
  for (var c_data in data) {
    sortable.push([c_data, data[c_data]]);
  }

  sortable.sort(function (a, b) {
    return parseInt(b[1].active) - parseInt(a[1].active);
  });

  let objSorted = {};
  sortable.forEach(function (item, index) {
    objSorted[index - 1] = item[1];
  });

  objSorted &&
    Object.keys(objSorted).map(item => {
      if (item < 11 && item > 0) {
        labels.push(objSorted[item].state_name);
        activeCaseData.push(objSorted[item].active);
      }
    });

  const dataset = {
    labels,
    datasets: [
      {
        label: "Covid active cases",
        data: activeCaseData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)"
      }
    ]
  };

  return <Bar options={options} data={dataset} />;
}

export default ChartComp;
