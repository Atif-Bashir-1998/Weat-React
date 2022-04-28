import React from "react";
import Chart from "react-apexcharts";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

function Graph({ graphData }) {
  const celsiusScale = useSelector((state) => state.weather.celsiusScale);

  let time = graphData.map((item) => dayjs(item.time).format("HH:mm"));
  let temp = graphData.map((item) =>
    celsiusScale ? item.temp_c : item.temp_f
  );

  let options = {
    chart: {
      id: "basic-bar",
      toolbar: false,
      width: "100%",
      height: "auto",
      // curve: "smooth",
    },
    xaxis: {
      categories: time,
    },
    // dataLabels: {
    // 	enabled: false
    // },
    stroke: {
      curve: "straight",
    },
    markers: {
      size: 0,
    },
    // annotations: {
    // 	position: 'front',
    // 	points: [
    // 		{
    // 			x: time[targetIndex],
    // 			y: temp[targetIndex],
    // 			marker: {
    // 				size: 8,
    // 				fillColor: "red",
    // 				strokeColor: "#F44336",
    // 				radius: 2,
    // 				strokeWidth: 1,
    // 				cssClass: "apexcharts-custom-class",
    // 			},
    // 			label: {
    // 				borderColor: "#FF4560",
    // 				offsetY: 0,
    // 				style: {
    // 					color: "#fff",
    // 					background: "#FF4560",
    // 				},

    // 				// text: "Now",
    // 			},
    // 		},
    // 	]
    // }
  };

  let series = [
    {
      name: "Temperature",
      data: temp,
    },
  ];

  return (
    <>
      <Chart options={options} series={series} type="area" />
    </>
  );
}

export default Graph;
