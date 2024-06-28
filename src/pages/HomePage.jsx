import React from 'react'

import Hero from '../components/Hero';
import HomeCard from '../components/HomeCard';
import JobList from '../components/JobList';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
        <Hero title="React developer is crazy!!" subTitle="If only minor version has changed, occur very critical effect!!"/>
        <HomeCard/>
        <JobList limit={3}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePage
