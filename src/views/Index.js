import React from "react";
import HeroSection from "../components/HeroSection";
import HourlyForecast from "../components/HourlyForecast";
import Today from "../components/Today";

export default function Index() {
  return <>
		<HeroSection />
		<div className="my-10">
			<Today />
		</div>
		<div className="my-10">
			<HourlyForecast />
		</div>
	</>;
}
