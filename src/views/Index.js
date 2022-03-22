import React from "react";
import HeroSection from "../components/HeroSection";
import Today from "../components/Today";

export default function Index() {
  return <>
		<HeroSection />
		<div className="mt-10">
			<Today />
		</div>
	</>;
}
