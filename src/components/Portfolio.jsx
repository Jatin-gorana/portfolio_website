import React from 'react'
import arrayDestruct from "../assets/portfolio/mobana.png";
import installNode from "../assets/portfolio/todolist.webp";
import navbar from "../assets/portfolio/xogame.jpg";
import reactParallax from "../assets/portfolio/smtp.png";
import reactSmooth from "../assets/portfolio/webscrapping.png";
import reactWeather from "../assets/portfolio/texttospeech.png";


const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src: arrayDestruct,
            name: "Mobile Analysis"
        },
        {
            id: 2,
            src: installNode,
            name: "Todo List",
        },
        {
            id: 3,
            src: navbar,
            name: "X-O game",
        },
        {
            id: 4,
            src: reactParallax,
            name: "SMTP Library",
        },
        {
            id: 5,
            src: reactSmooth,
            name: "Web Scrapping",
        },
        {
            id: 6,
            src: reactWeather,
            name: "Text to Speech",
        },
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-4">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {portfolio.map(({id,src,name})=> (
                
                <div key={id} className="shadow-md shadow-gray-800 rounded-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button> */}
                        <button className="px-6 py-3 m-4 duration-200 hover:scale-105">{name}</button>
                    </div>
                </div>
            ))}

           </div> 
        </div>
    </div>
  )
}

export default Portfolio