import React from "react";
import Hero from "../components/Hero";
import MostPoular from "../components/MostPoular";
import WhyUs from "../components/WhyUs";
import GridCards from "../components/GridCards";
import AppBanner from "../components/AppBanner";
import Comments from "../components/Comments";

export default function Index() {
  return (
    <>
      <Hero />
      <MostPoular />
      <WhyUs />
      <GridCards />
      <AppBanner />
      <Comments />
    </>
  );
}
