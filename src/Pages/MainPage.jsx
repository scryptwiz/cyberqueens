import React, { useEffect } from 'react'
import HeroSection from '../Components/HeroSection'
import Navbar from '../Components/Navbar'
import { createClient } from 'contentful'
import { useDispatch } from 'react-redux'
import AboutSection from '../Components/AboutSection'
import TraitSection from '../Components/TraitSection'
import Nfts from '../Components/Nfts'
import Roadmap from '../Components/Roadmap'
import OurTeams from '../Components/OurTeams'

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
      const nftssection = await client.getEntries({ content_type: "nftsSection" })
      const roadmapsection = await client.getEntries({ content_type: "roadmapSection" })
      const ourTeamsection = await client.getEntries({ content_type: "ourTeam" })
      dispatch({type:"SET_HERO_SECTION", payload:herosection.items})
      dispatch({type:"SET_ABOUT_SECTION", payload:aboutsection.items})
      dispatch({type:"SET_TRAIT_SECTION", payload:traitsection.items})
      dispatch({type:"SET_NFT_SECTION", payload:nftssection.items})
      dispatch({type:"SET_ROADMAP_SECTION", payload:roadmapsection.items})
      dispatch({type:"SET_OURTEAM_SECTION", payload:ourTeamsection.items})
    }
    getInfo()
  }, [dispatch])
  return (
    <div className='flex flex-col w-full'>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <TraitSection/>
        <Nfts/>
        <Roadmap/>
        <OurTeams/>
    </div>
  )
}

export default MainPage