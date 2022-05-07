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

  let isSmallScreen = window.screen.width < 768

  let options = {
    chart: {
      id: "basic-bar",
      toolbar: false,
      width: "100%",
      height: "auto",
    },
    xaxis: {
      categories: time,
    },
    dataLabels: {
    	enabled: !isSmallScreen
    },
    stroke: {
      curve: "straight",
    },
    markers: {
      size: 0,
    },
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
