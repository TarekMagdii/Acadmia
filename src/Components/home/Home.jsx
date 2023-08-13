import React from 'react'
import Hero from './hero/Hero';
import AboutCard from './../about/AboutCard';
import HAbout from './HAbout';
import Test from './testiomonal/Test';
import Hblog from './Hblog';
import Hprice from './Hprice';



const Home = () => {
  return (
    <>
      <Hero/>
      <AboutCard/>
      <HAbout/>
      <Test/>
      <Hblog/>
      <Hprice/>
    </>
  )
}

export default Home
