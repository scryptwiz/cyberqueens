import { useSelector } from "react-redux"

const OurTeams = () => {
    const ourTeamSection = useSelector(state=>state.ourTeamSection)
  return (
    <div className="lg:each_section py-10 md:p-10 lg:px-0 lg:py-16 bg-cyberDeepPurple h-fit">
        <div className="contentmax_width h-fit my-auto flex-col flex items-center justify-between">
            <h2 className="top_title">Our Team</h2>
            <div className="flex flex-wrap justify-between gap-5 mt-7">
                {ourTeamSection.map((item,index)=>{
                    return (
                        <div key={index} className="mx-auto bg-cyberLightPurple/20 p-3 rounded border border-cyberWatermelon/20">
                            <div className="w-32 h-32 bg-gray-300 rounded">
                                <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.file.title} />
                            </div>
                            <h2 className="text-center font-medium text-sm text-white mt-2">{item.fields.name}</h2>
                            <p className="text-center font-light text-xs text-white">{item.fields.role}</p>
                        </div>
                    )
                })}
            </div>
        </div>  
    </div>
  )
}

export default OurTeams