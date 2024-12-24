import React from 'react'

const LeftBanner = ({ dataC }) => {

    const { aboutIMG } = dataC;

    return (
        <div>
            <div className='left-banner w-[30vw] bg-[#8184d2] h-[80vh]'>
                <p className=' w-fit px-10 py-2 left-banner-about-me'>
                    About Me
                </p>
                <div className='p-5'>
                    <div className='relative flex justify-end overflow-hidden' style={{borderRadius:"50%"}}>
                        <img className='w-40 h-40 border-2 border-white' style={{borderRadius:"50%"}} src={aboutIMG} alt="" />
                    </div>
                    <div className='text-white'>
                        <h1>
                            I'm
                        </h1>
                        <h1>
                            Ajay <br/> Suresh
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBanner