import React from 'react'

const projs = [
    {
        title: 'Simple Portfolio Business Website',
        description: 'A simple portfolio business website for a client, built using React and TailwindCSS',
        image: "https://img.freepik.com/free-psd/digital-marketing-agency-corporate-web-banner-template_106176-4073.jpg"
    },
    {
        title: "An Impressive Eye-Catching Website",
        description: "A website that is visually appealing and user-friendly, built using React and TailwindCSS",
        image: "https://img.freepik.com/free-psd/digital-marketing-agency-corporate-web-banner-template_106176-4073.jpg"
    }
]

const Works = () => {
    const loadHtmlFile = () => {
        window.location.href = '/assets/Base - Tailwind CSS Startup Template.html';
      };
  return (
    <div className='h-screen flex px-[5vw] md:px-[10vw] flex-col justify-center relative bg-[#1c2430] z-0 overflow-hidden'>
        <div>
            <h1 className='text-3xl md:text-4xl text-center text-white font-bold'>Works</h1>
            <p className='text-white text-center'>Here are some of my works</p>
        </div>
        <div>
            <div className='flex flex-wrap'>
                {
                    projs.map((proj, index) => {
                        return (
                            <div key={index} className='w-full md:w-1/2 p-5'>
                                <div className='bg-black rounded-lg'>
                                    <img src={proj.image} alt={proj.title} className='w-full h-60 object-cover rounded-t-lg' />
                                <div className='bg-white p-5 rounded-lg'>
                                    <h1 className='text-xl font-bold'>{proj.title}</h1>
                                    <p className='text-sm'>{proj.description}</p>
                                    <button 
                                        className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'
                                        onClick={loadHtmlFile}
                                    >
                                        View
                                    </button>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Works