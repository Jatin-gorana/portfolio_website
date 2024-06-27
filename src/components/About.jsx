import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-fit md:h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-6 pt-7">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
            Aspiring BE student specializing in Artificial Intelligence and Data Science, determined to excel in Data Analysis, I have honed my skills through hands-on projects and coursework. Proficient in Python (NumPy, Pandas, and Matplotlib), Power BI and MySQL, I have a strong foundation in extracting insights from data and presenting them effectively.
            </p>

           {/* <br/> */}

            <p className="text-xl mt-4">
            I have experience building web applications using HTML, Tailwind CSS, and ReactJS, and have worked with programming languages such as C, C++, and Java (DSA). Currently, I am enhancing my expertise in Data Analysis techniques and tools.
            In my free time, I explore data analysis applications in various domains, including the stock market, to better understand real-world data challenges. My goal is to leverage my analytical skills and technical knowledge to contribute to impactful decision-making as a Data Analyst.
            </p>

        </div>
    </div>
  )
}

export default About