// import Image from "next/image";

import DownloadAppSection from "../component/home/DoenloadSection";
// import DreamSection from "../component/DreamSection";
import HeroSection from "../component/home/HeroPage";
import IntegrationsSection from "../component/home/IntregationSection";
import PayoutSection from "../component/home/Story";
import WorkingProcess from "../component/home/WorkingProcess";
// import InstantCreditSection from "../component/InstantCreditSection";
// import StatsCounter from "../component/StartCount";
import TestimonialSection from "../component/home/Testinomial";
import ThreeStepProcess from "../component/home/ThreeStepProcess";
import WhyRamFincorp from "../component/home/Whyramfincorp";

export default function Home() {
  return (
    <>
    <HeroSection/>
    {/* <StatsCounter/> */}
    <ThreeStepProcess/>
    <WhyRamFincorp/>
    <WorkingProcess/>
    <IntegrationsSection/>
    <PayoutSection/>
    {/* <InstantCreditSection/> */}
    {/* < DreamSection/> */}
    <DownloadAppSection/>
    <TestimonialSection/>
    </>
  );
}
