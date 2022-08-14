import React from 'react'
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

const Nfts = () => {
    const nftSection = useSelector(state=>state.nftsSection)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
            }
            },
            {
                arrows: false,
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    };
  return (
    <div className="lg:each_section py-10 md:p-10 lg:px-0 lg:py-16 bg-cyberDeepPurple h-fit">
        {nftSection.map((item,index)=>{
            return(
                <div key={index} className="contentmax_width h-fit my-auto flex items-center justify-between">
                    <Slider className="w-full lg:max-w-5xl mx-auto" {...settings}>
                        {item.fields.images.map((item,index)=>{
                            return (
                                <div key={index} className='p-7'>
                                    <div className="bg-cyberLightPurple/20 p-3 rounded-lg">
                                        <img src={item.fields.file.url} alt={item.fields.title} className='w-full rounded-lg'/>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            )
        })}
    </div>
  )
}

export default Nfts