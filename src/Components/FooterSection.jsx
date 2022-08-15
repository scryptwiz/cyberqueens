import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const FooterSection = () => {
    const socialMedias = useSelector(state=>state.socialMedia)
  return (
    <div className='w-full  bg-white'>
        <nav className='contentmax_width  w-full py-5 px-7  flex  items-center flex-col lg:flex-row gap-7'>
            <Link to='/' className="text-black font-semibold text-3xl md:w-1/2 w-full text-center md:text-left">Cyber Queens</Link>
            <div className="flex flex-col lg:justify-start justify-center md:w-1/2 w-fix mx-auto gap-2">
                <h2 className="md:text-3xl  font-light text-center md:text-left">Join Our Community</h2>
                <div className="flex gap-3 flex-wrap">
                    {socialMedias.map((item,index)=>{
                        return (
                            <a href={item.fields.link} rel="noreferrer" target='_blank' key={index} className="bg-cyberLightPurple p-2 rounded">
                                <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} className='w-5' />
                            </a>
                        )   
                    })}
                </div>
                <p className="text-sm font-light">Digital Ownership Licence</p>
            </div>
        </nav>
    </div>
  )
}

export default FooterSection