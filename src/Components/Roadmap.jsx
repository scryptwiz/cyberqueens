import { useState } from "react"
import { useSelector } from "react-redux"
import { AiOutlineClose } from 'react-icons/ai'

const Roadmap = () => {
    const [toggle, setToggle] = useState(false)
    const roadmapSection = useSelector(state=>state.roadmapSection)
  return (
    <div id="roadmap" className="lg:each_section py-10 md:p-10 lg:px-0 lg:py-16 bg-cyberLightPurple/90 h-fit">
        {roadmapSection.map((item,index)=>{
            return(
                <div key={index} className="contentmax_width h-5/6 my-auto flex flex-col items-center justify-between px-10">
                    <h2 className="top_title">{item.fields.title}</h2>
                    <div className="w-full max-h-screen h-fit mt-7">
                        <img src={item.fields.image.fields.file.url} onClick={()=>setToggle(true)} className='w-full' alt={item.fields.image.fields.fileName} />
                        {toggle&&(
                            <div className="w-full h-screen fixed top-0 left-0 bg-gray-500 p-3 flex flex-col z-40">
                                <AiOutlineClose className="text-3xl text-white ml-auto" onClick={()=>setToggle(false)}/>
                                <img src={item.fields.image.fields.file.url} onClick={()=>setToggle(true)} className='w-full my-auto' alt={item.fields.image.fields.fileName} />
                            </div>
                        )}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Roadmap