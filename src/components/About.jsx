import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
            Determined to excel in data science and software development, I've honed my skills through hands-on projects like a gym website and this portfolio. Proficient in HTML, CSS, and JavaScript, I've delved into languages like C, C++, Java (Swing and AWT), and Python (NumPy, Pandas, and Tkinter). Currently, I'm sharpening my expertise in ReactJS for front-end development and MySQL for database management, while also exploring data analysis and the nuances of the stock market during my free time.
            </p>

           {/* <br/> */}

            <p className="text-xl mt-4">
            Moreover, beyond academic pursuits, I've also applied my expertise in tools like Power BI and actively engage in share market ventures during my leisure hours. This multifaceted approach reflects my commitment to problem-solving and innovation, embodying a holistic understanding of data-driven technologies and their real-world applications.
            </p>

        </div>
    </div>
  )
}

export default About