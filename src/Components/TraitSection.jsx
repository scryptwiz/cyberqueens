import { useSelector } from "react-redux"

const TraitSection = () => {
    const traitSection = useSelector(state=>state.traitSection)
  return (
    <div className="lg:each_section py-10 md:p-10 lg:px-0 lg:py-16 bg-cyberLightPurple h-fit">
        {traitSection.map((item,index)=>{
            return(
                <div key={index} className="contentmax_width h-5/6 my-auto flex flex-col items-center justify-between px-10">
                    <h2 className="top_title">{item.fields.title}</h2>
                    <div className="w-full flex md:flex-row items-center flex-col mt-10 gap-7">
                        <p className="text-lg text-white w-full md:w-1/2">{item.fields.description}</p>
                        <div className="md:w-1/2 w-full rounded-lg text-sm p-5 bg-cyberMelonPink flex justify-between gap-3 flex-wrap">
                            {item.fields.traits.map((item,index)=>{
                                return(
                                    <div key={index} className="w-1/3 flex justify-between text-white">
                                        <h6 className="tracking-wide font-medium">{item.trait}</h6>
                                        <h6 className="tracking-wide font-medium">{item.value}</h6>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default TraitSection