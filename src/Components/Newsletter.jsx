import { useSelector } from 'react-redux'

const Newsletter = () => {
    const newsletter = useSelector(state=>state.newsLetterSection)
  return (
    <div className="lg:each_section py-10 md:p-10 lg:px-0 lg:py-16 bg-cyberLightPurple/90 h-fit">
        {newsletter.map((item,index)=>{
            return(
                <div key={index} className="contentmax_width h-5/6 my-auto flex flex-col lg:flex-row items-center px-10 gap-5">
                    <div className='w-full h-fit md:w-1/2 '>
                        <img src={item.fields.image.fields.file.url} className='w-full md:w-52' alt={item.fields.image.fields.title} />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-3xl md:text-5xl text-cyberPurple'>{item.fields.title}</h1>
                        <p className='text-white text-xm text-left'>{item.fields.subContent}</p>
                        <div className='flex items-center'>
                            <input type="text" className='md:px-4 px-3 text-sm font-light w-9/12 py-2 rounded-l-md bg-white border-none outline-none' placeholder='Email Address...' />
                            <button className='text-white px-3 py-2 rounded-r-md text-sm bg-cyberMelonPink'>Subscribe</button>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Newsletter