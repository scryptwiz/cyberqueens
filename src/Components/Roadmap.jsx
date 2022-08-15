import { useSelector } from "react-redux"

const Roadmap = () => {
    const roadmapSection = useSelector(state=>state.roadmapSection)
  return (
    <div id="roadmap" className="lg:each_section py-10 md:p-10 lg:px-0 lg:py-16 bg-cyberLightPurple h-fit">
        {roadmapSection.map((item,index)=>{
            return(
                <div key={index} className="contentmax_width h-5/6 my-auto flex flex-col items-center justify-between px-10">
                    <h2 className="top_title">{item.fields.title}</h2>
                    <div className="w-full h-fit mt-7">
                        <img src={item.fields.image.fields.file.url} className='w-full h-fit' alt={item.fields.image.fields.fileName} />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Roadmap