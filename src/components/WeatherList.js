import React from "react";
import WeatherListItem from "./WeatherListItem";

function WeatherList({ listData }) {
  return (
    <div className="h-72 md:h-auto overflow-scroll">
      {listData.map((item) => {
        return <WeatherListItem data={item} key={item.time_epoch} />;
      })}
    </div>
  );
}

export default WeatherList;
