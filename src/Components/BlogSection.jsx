import { useSelector } from "react-redux"

const BlogSection = () => {
    const blogs = useSelector(state=>state.blogSection)
  return (
    <div id="blog" className="lg:each_section py-10 md:p-10 lg:px-0 lg:py-16 bg-cyberMelonPink h-fit">
        <div className="contentmax_width h-fit my-auto flex-col flex items-center justify-between">
            <h2 className="top_title">Whats New With CQ?</h2>
            <div className="flex flex-wrap lg:gap-16 gap-10 mt-7 w-full justify-center">
                {blogs.map((item,index)=>{
                    return (
                        <a target="_blank" href={item.fields.link} rel="noreferrer" key={index} className="h-fit bg-cyberDeepPurple p-5 rounded w-52 group">
                            <div className="w-full group-hover:scale-105 duration-75 h-fit bg-gray-300 rounded">
                                <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.file.title} className='rounded' />
                            </div>
                            <h2 className="text-left font-medium text-base text-white mt-2 break-words">{item.fields.title}</h2>
                            <p className="text-xs text-gray-100 mt-2 break-word font-light">{item.fields.content.substring(0, 100) + '..Read More'}</p>
                        </a>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default BlogSection