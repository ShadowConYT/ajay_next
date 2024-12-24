import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Works = () => {

    const image = 'https://placehold.co/1920x750';
    const mockWorks = [
        {title: "Accend's Billder", desc: 'A billing system that uses AI to predict the bill amount based on the items scanned', img: image, techStack: ["Python", "Java"], link: 'https://youtu.be/1Q2e1J8X1ZQ'},
        {title: "Alokah's E-Commerce", desc: "An E-Commerce store with payment gateway and user authentication", img: image, techStack: ["Python", "Java", "JS"], link: 'https://youtu.be/1Q2e1J8X1ZQ'},
        {title: "Muscle Monitor", desc: "A fitness app that uses AI to track your workout and suggest improvements", img: image, techStack: ["Python", "Jio"], link: 'https://youtu.be/1Q2e1J8X1ZQ'},
        // {title: "Portfolio", desc: "A portfolio website that showcases my works and projects", img: image, techStack: ["Python", "Luck"], link: 'https://youtu.be/1Q2e1J8X1ZQ'},
    ]

    const WorksCard = ({title, desc, img, techStack, link}) => {
        return (
            <div className='md:w-[35vw] lg:w-[35vw] border-[#2f3c50] border-[1px] bg-[#00000] flex flex-col rounded-2xl items-center justify-center'>
                <div>
                    <img src={img} alt={title} className='rounded-t-2xl' />
                </div>
                <div className='p-2 text-white mx-3'>
                    <div className='border-b-[1px] border-[#2f3c50] mb-1 p-2 flex justify-between'>
                        <div>
                            <h2 className='font-bold'>{title}</h2>
                            <p className=''>
                                {
                                    techStack.map((tech, index) => {
                                        return <span key={index} className='bg-[#2f3c50] mr-2 text-xs text-yellow-400 rounded-md px-3 py-1'>{tech}</span>
                                    })
                                }
                            </p>
                        </div>
                        <Link to={link} className='text-white'>
                            <MdArrowOutward />
                        </Link>
                    </div>
                    <p>{desc}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-dvh w-[75vw] my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <div className='flex flex-col'>
                        <div className='text-left lg:mb-10'>
                            <h1 className='text-white font-extrabold text-4xl'>Projects Undertaken</h1>
                            <p className='text-[--sub-text-color]'>Here&apos;s Some of my project I worked on.</p>
                            <Link to='/projects' className='text-yellow-400 flex items-center'>Explore More <MdOutlineKeyboardDoubleArrowRight /></Link>
                        </div>
                        {
                            mockWorks.map((work, index) => {
                                return (
                                    <div key={index} 
                                        className={`flex ${index % 2 == 0 ? 'hidden' : 'block'} my-10`}
                                    >
                                        <WorksCard {...work} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    {
                        mockWorks.map((work, index) => {
                            return (
                                <div key={index} 
                                    className={`flex ${index % 2 == 1 ? 'hidden' : 'block'} ${index == 0 ? 'mb-10' : 'my-10'}`}
                                >
                                    <WorksCard {...work} />
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