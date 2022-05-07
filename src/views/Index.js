import React from "react";
import HeroSection from "../components/HeroSection";
import HourlyForecast from "../components/HourlyForecast";
import Recent from "../components/Recent";
import Today from "../components/Today";
import { useSelector } from "react-redux";
import NoInternet from "../components/NoInternet";

export default function Index() {
  const isOnline = useSelector((state) => state.online.online);

  return (
    <>
      <HeroSection />
      <div className="my-10">
        <Recent />
      </div>
      <div>
        {isOnline && (
          <section className="space-y-10">
            <Today />
            <HourlyForecast />
          </section>
        )}
        {!isOnline && <NoInternet />}
      </div>
    </>
  );
}
