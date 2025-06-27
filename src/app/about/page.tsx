import AboutHeroSection from '@/@/component/about/AboutHero'
import CompanyIntroSection from '@/@/component/about/CompanyIntro'
import CustomersLoveSection from '@/@/component/about/customer'
import LeadershipSection from '@/@/component/about/leaderShip'
import MissionVisionSection from '@/@/component/about/MissionVision'
import RepeatSatisfiedUsersSection from '@/@/component/about/Repeat'
import React from 'react'

const page = () => {
  return (
    <>
    <AboutHeroSection/>
    <CompanyIntroSection/>
    <CustomersLoveSection/>
    <RepeatSatisfiedUsersSection/>
    <MissionVisionSection/>
    <LeadershipSection/>
    </>
  )
}

export default page