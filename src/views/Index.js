import React from "react";
import HeroSection from "../components/HeroSection";
import HourlyForecast from "../components/HourlyForecast";
import Recent from "../components/Recent";
import Today from "../components/Today";

export default function Index() {
  return <>
		<HeroSection />
		<div className="my-10">
			<Recent />
			<Today />
		</div>
		<div className="my-10">
			<HourlyForecast />
		</div>
	</>;
}
