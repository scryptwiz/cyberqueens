import { useSelector } from "react-redux"

const TraitSection = () => {
    const traitSection = useSelector(state=>state.traitSection)
  return (
    <div className="lg:each_section py-10 md:p-10 lg:px-0 lg:py-16 trait relative bg-cyberLightPurple h-fit">
        <video autoPlay loop muted playsInline preload data-wf-ignore="true" className="absolute left-0 top-0 h-full lg:h-auto lg:w-full object-cover w-auto vid_dna">
            <source src="/assets/dna.mp4" type="video/mp4"/>
        </video>
        <div className="contentmax_width h-5/6 my-auto flex flex-col items-center justify-between px-10">
            <h2 className="top_title">Traits</h2>
            <div className="w-10/12 flex md:flex-row items-center flex-col mt-10 gap-7 bg-black/70 py-5">
                <div className="w-full rounded-lg text-sm p-5 flex gap-5 justify-around flex-wrap">
                    {traitSection.map((item,index)=>{
                        return(
                            <div key={index} className="w-80 flex justify-between items-center text-white">
                                <div className="flex gap-5 items-center">
                                    <div className="w-10 h-10 bg-white">
                                        <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} className='w-full h-full' />
                                    </div>
                                    <h6 className="tracking-wide font-medium">{item.fields.trait}</h6>
                                </div>
                                <h6 className="tracking-wide font-medium">{item.fields.value}</h6>
                            </div>
                        )
                    })}
                </div>
            </div>
         </div>
    </div>
  )
}

export default TraitSection