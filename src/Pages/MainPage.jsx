import React, { useEffect } from 'react'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'
import { createClient } from 'contentful'
import { useDispatch } from 'react-redux'
import AboutSection from '../Components/AboutSection'
import TraitSection from '../Components/TraitSection'

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getInfo = async () => {
      const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
      });
      const herosection = await client.getEntries({ content_type: "heroSection" })
      const aboutsection = await client.getEntries({ content_type: "aboutSection" })
      const traitsection = await client.getEntries({ content_type: "traitSection" })
      dispatch({type:"SET_HERO_SECTION", payload:herosection.items})
      dispatch({type:"SET_ABOUT_SECTION", payload:aboutsection.items})
      dispatch({type:"SET_TRAIT_SECTION", payload:traitsection.items})
    }
    getInfo()
  }, [dispatch])
  return (
    <div className='flex flex-col w-full'>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <TraitSection/>
    </div>
  )
}

export default MainPage