import React from 'react'
import powerbi from "../assets/powerbi.webp";
import excel from "../assets/excel.png";
// import js from "../assets/javascript.png";
import reactt from "../assets/react.png";
import tableau from "../assets/tableau.png";
// import cpp from "../assets/cpp.png";
// import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import pythonn from "../assets/python.webp";
import java from "../assets/java.png";
import mysqll from "../assets/mysql.png";


const Experience = () => {

    const exp = [
        {
            id: 1,
            src: pythonn,
            title: 'Python',
            style: 'shadow-yellow-400',
        },
        {
            id: 2,
            src: mysqll,
            title: 'MySQL',
            style: 'shadow-orange-500',
        },
        {
            id: 3,
            src: excel,
            title: 'Excel',
            style: 'shadow-green-600',
        },
        {
            id: 4,
            src: powerbi,
            title: 'PowerBI',
            style: 'shadow-yellow-600',
        },
        {
            id: 5,
            src: tableau,
            title: 'Tableau',
            style: 'shadow-blue-700',
        },
        {
            id: 6,
            src: java,
            title: 'Java',
            style: 'shadow-red-500',
        },
        {
            id: 7,
            src: reactt,
            title: 'ReactJS',
            style: 'shadow-sky-400',
         },
        {
            id: 8,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-sky-500',
        },
        // {
        //     id: 9,
        //     src: github,
        //     title: 'Github',
        //     style: 'shadow-orange-500',
        // },
    ]

  return (
    <div name="skills" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {exp.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto" />
                    <p className="mt-4">{title}</p>
                </div>
                ))}

                
            </div>
        </div>
    </div>
  )
}

export default Experience