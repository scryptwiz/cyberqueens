import { useSelector } from "react-redux"

const BlogSection = () => {
    const blogs = useSelector(state=>state.blogSection)
  return (
    <div id="blog" className="lg:each_section py-10 md:p-10 lg:px-0 lg:py-16 bg-cyberMelonPink h-fit">
        <div className="contentmax_width h-fit my-auto flex-col flex items-center justify-between">
            <h2 className="top_title">Whats New With CQ?</h2>
            <div className="flex flex-wrap justify-between gap-5 mt-7 w-full">
                {blogs.map((item,index)=>{
                    return (
                        <a target="_blank" href={item.fields.link} rel="noreferrer" key={index} className="rounded w-52 mx-auto">
                            <div className="w-52 h-52 bg-gray-300 rounded">
                                <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.file.title} />
                            </div>
                            <h2 className="text-left font-medium text-xl text-white mt-2 break-words">{item.fields.title}</h2>
                        </a>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default BlogSection