import { useSelector } from "react-redux"

const OurTeams = () => {
    const ourTeamSection = useSelector(state=>state.ourTeamSection)
    console.log(ourTeamSection)
  return (
    <div className="lg:each_section py-10 md:p-10 lg:px-0 lg:py-16 bg-cyberDeepPurple h-fit">
        <div className="contentmax_width h-fit my-auto flex-col flex items-center justify-between">
            <h2 className="top_title">Our Team</h2>
            <div className="flex flex-wrap justify-between gap-20 mt-7">
                {ourTeamSection.map((item,index)=>{
                    return (
                        <div key={index} className="bg-cyberLightPurple/20 p-5 rounded border border-cyberWatermelon/20">
                            <div className="w-52 h-52 bg-gray-300 rounded">
                                <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.file.title} />
                            </div>
                            <h2 className="text-center font-medium text-xl text-white mt-2">{item.fields.name}</h2>
                            <p className="text-center font-light text-sm text-white">{item.fields.role}</p>
                        </div>
                    )
                })}
            </div>
        </div>  
    </div>
  )
}

export default OurTeams