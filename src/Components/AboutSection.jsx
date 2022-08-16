import { useSelector } from "react-redux"
import Slider from "react-slick";

const AboutSection = () => {
    const aboutSection = useSelector(state=>state.aboutSection)
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        speed: 100,
        autoplay: true,
        fade: true,
      };
  return (
    <div id="aboutus" className="lg:each_section relative py-10 md:p-10 lg:px-0 lg:py-16 bg-cyberMelonPink h-fit">
        {aboutSection.map((item,index)=>{
            return(
                <div key={index} className="contentmax_width h-fit my-auto flex md:flex-row flex-col items-center justify-between">
                    <div className="w-full md:w-1/2 lg:flex flex-col items-center">
                        <Slider className="w-10/12 lg:max-w-5xl mx-auto" {...settings}>
                            {item.fields.images.map((item,index)=>{
                                return (
                                    <div key={index} className="bg-green-500">
                                        <img src={item.fields.file.url} alt={item.fields.title} className='w-full'/>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-3 px-7 md:mt-0 mt-5">
                        <h1 className="font-medium text-2xl text-white ">{item.fields.title}</h1>
                        {item.fields.contents.map((item,index)=>{
                            return (
                                <p className="text-white text-sm" key={index}>{item.content}</p>
                            )
                        })}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default AboutSection