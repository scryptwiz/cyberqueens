import { useSelector } from "react-redux"

const HeroSection = () => {
    const heroSection = useSelector(state=>state.heroSection)
  return (
    <div className="each_section py-10 md:p-10 lg:p-0 bg-cyberLightPurple">
        {heroSection.map((items,index)=>{
            return (
                <div key={index} className="contentmax_width h-5/6 my-auto flex items-center justify-between">
                    <div className="flex flex-col items-start gap-5 w-full lg:w-1/2 px-7">
                        <h1 className="text-4xl md:text-5xl text-white">{items.fields.title}</h1>
                        <h1 className="text-sm text-white">{items.fields.description}</h1>
                    </div>
                    <div className="hidden lg:w-1/2 lg:block">
                        <img src={items.fields.image.fields.file.url} className='w-full h-fit object-contain' alt={items.fields.image.fields.title} />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default HeroSection