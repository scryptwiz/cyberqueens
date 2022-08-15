import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const socialMedias = useSelector(state=>state.socialMedia)
  return (
    <div className='border-b border-gray-200 w-full sticky top-0 bg-white z-40'>
        <nav className='contentmax_width hidden w-full py-5 px-7 bg-white md:flex justify-between'>
            <Link to='/' className='font-semibold text-xl text-gray-800'>Cybey Queens</Link>
            <ul className='flex gap-5 items-center text-sm text-gray-800'>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
            <ul className='flex items-center gap-4'>
                    {socialMedias.map((item,index)=>{
                        return (
                        <li key={index}>
                            <div className='bg-cyberLightPurple p-1 rounded-full'>
                                <a href={item.fields.link} rel="noreferrer" target="_blank" ><img className='w-5' src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} /></a>
                            </div>
                        </li>
                        )
                    })}
                <button className='bg-cyberLightPurple text-white text-sm px-3 py-1 rounded'>Connect Wallet</button>
            </ul>
        </nav>
        <nav className='bg-white py-4 sticky top-0 px-7 flex justify-between w-full items-center md:hidden shadow'>
            <Link to='/' className='font-semibold text-xl text-gray-800'>Cyber Queens</Link>
            {!toggle&&<HiMenuAlt3 className='text-3xl cursor-pointer text-gray-700' onClick={()=>setToggle(true)}/>}
        </nav>
        {toggle&&(<div className='w-full h-screen fixed top-0 bg-black/70 z-40 flex md:hidden'>
            <div className='w-10/12 bg-white p-10'>
                <Link to='/' className='text-xl font-medium'>Cyber Queens</Link>
                <div className='flex flex-col gap-10 mt-20'>
                    <a href='#aboutus' className='text-lg text-gray-700' onClick={()=>setToggle(false)}>About</a>
                    <a href='#roadmap' className='text-lg text-gray-700' onClick={()=>setToggle(false)}>Roadmap</a>
                    <a href='#blog' className='text-lg text-gray-700' onClick={()=>setToggle(false)}>Blog</a>
                    <div className='flex flex-col gap-5'>
                        <ul className='flex gap-3 items-center'>
                            {socialMedias.map((item,index)=>{
                                return (
                                <li key={index}>
                                    <div className='bg-cyberLightPurple p-1 rounded-full'>
                                        <a onClick={()=>setToggle(false)} href={item.fields.link} rel="noreferrer" target="_blank" ><img className='w-5' src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} /></a>
                                    </div>
                                </li>
                                )
                            })}
                        </ul>
                        <button onClick={()=>setToggle(false)} className='bg-cyberLightPurple text-white text-sm px-3 py-1 rounded w-fit'>Connect Wallet</button>
                    </div>
                </div>
            </div>
            <div className='w-2/12 py-10 flex'>
                <AiOutlineClose className='text-3xl cursor-pointer text-gray-100 mx-auto' onClick={()=>setToggle(false)} />
            </div>
        </div>)}
    </div>
  )
}

export default Navbar