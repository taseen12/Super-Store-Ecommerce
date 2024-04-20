import React, { useContext } from 'react'
import HeroSection from "./components/HeroSection";
import { AppContext, useProductContext } from './context/ProductContext';
// import { AppContext} from './context/ProductContext';

const About = () => {
  const {myName} = useProductContext();
  const data ={
  }
  return (
  <>
  {myName}
  <HeroSection myData={data}/>
  </>
    )
};

export default About