import React from 'react'
import { Link } from 'react-router-dom'

const SectionOne = () => {
    return (
        <div>
            <div className="hero bg-slate-100 py-4 px-2 rounded-md">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Web design</h1>
                        <p className="py-6 text-lg">
                            Web design involves creating the visual layout and aesthetics of a website, focusing on user experience, graphics, and overall look. Front-end development, on the other hand, involves implementing the design into a functional website using coding languages like HTML, CSS, and JavaScript.Web design refers to the design of websites. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s, design for mobile and tablet browsers has become ever-increasingly important.
                        </p>
                        <Link to={'/Home/GetStartBtn'}>
                            <button className="btn btn-primary">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne