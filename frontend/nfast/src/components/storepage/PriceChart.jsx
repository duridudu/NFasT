// import React from "react";
// import { Line } from "react-chartjs-2";
// import styled from "styled-components";
// // import Chart from "chart.js/auto";

// const Wrapper = styled.div`
//   width: 100%;
// `;

// const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       data: [80, 90, 80, 90, 80, 90, 80],
//       borderColor: "tomato",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//     },
//     {
//       label: "My Second dataset",
//       data: [10, 20, 10, 20, 10, 20, 10],
//       borderColor: "darkblue",
//       backgroundColor: "rgba(54, 162, 235, 0.2)",
//     },
//   ],
//   options: {
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Month",
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Value",
//         },
//         type: "linear",
//         min: 0,
//         max: 100,
//       },
//     },
//   },
// };

// function LineGraph() {
//   return (
//     <Wrapper>
//       <Line data={data} options={data.options} />
//     </Wrapper>
//   );
// }

// export default LineGraph;
import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);
const Wrapper = styled.div`
  width: 100%;
`;

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      data: [80, 90, 80, 90, 80, 90, 80],
      borderColor: "tomato",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "My Second dataset",
      data: [10, 20, 10, 20, 10, 20, 10],
      borderColor: "darkblue",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
    },
  ],
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        type: "linear",
        min: 0,
        max: 100,
      },
    },
  },
};

function LineGraph() {
  return (
    <Wrapper>
      <Line data={data} options={data.options} />
    </Wrapper>
  );
}
export default LineGraph;