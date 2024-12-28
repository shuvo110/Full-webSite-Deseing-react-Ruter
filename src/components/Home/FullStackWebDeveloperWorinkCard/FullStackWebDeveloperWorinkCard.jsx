
import React, { useEffect, useState } from 'react'
import FrontendCard from '../frontendCard/FrontendCard';
import BackendShowAll from '../backendCard/BackendShowAll/BackendShowAll';
const FullStackWebDeveloperWorinkCard = () => {
    const [frontend, setFrontend] = useState([]);
    const [backend, setBackend] = useState([]);
    useEffect(() => {
        fetch('FullStackWebCard.json')
            .then(res => res.json())
            .then(result => {
                setFrontend(result.frontend.modules);
                setBackend(result.backend.modules);
            })
    }, [])

    return (
        <div>
            <div className='my-16'>
                <div className="text-lg md:text-3xl font-bold font-serif my-5 md:my-10"><span className='text-5xl text-red-600'>F</span>ull stack web developer <span className='text-green-500'>কি কি শিখতে হবে</span><i className="fa-solid fa-code ml-2"></i></div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd22VdKrgBD3t_9emeR6aN0N851aq_7Y8AjTiuxDb3Rl0NeJ7RkRbbZnwd83dL2Tfg8lk&usqp=CAU"
                            className="max-w-sm rounded-lg " />
                        <div>
                            <p className="py-6">
                                ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট কোর্সটি ওয়েব এর একটি কমপ্লিট কোর্স। একটি ওয়েবসাইটের কাঠামো ডিজাইন থেকে শুরু করে এর ডাটাবেজ ম্যানেজমেন্ট, রেসপন্সিভ করা, সব কিছুই শেখানো হয় এই কোর্স। ফ্রন্ট এন্ড অংশে শেখানো হয় এইচটিএমএল, সিএসএস, বুটস্ট্র্যাপ, জেকুয়েরি। ব্যাক এন্ড অংশে থাকবে পিএইচপি, ওওপি এবং মাইএসকিউএল।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fontend Card */}
            <div>
                <h1 className='text-lg md:text-2xl font-semibold font-mono my-5 underline underline-offset-8'><i className="fa-solid fa-gears text-red-500"></i> <span className='text-green-600'>ফ্রন্ট</span> এন্ড অংশে থাকবে</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
                    {
                        frontend.map(card => <FrontendCard
                            key={card.id}
                            card={card}
                        ></FrontendCard>)
                    }
                </div>
            </div>

            <div>
                <h1 className='text-lg md:text-2xl font-semibold font-mono my-5 underline underline-offset-8'><i className="fa-solid fa-gears text-red-500"></i> <span className='text-green-600'>ব্যাক</span>  এন্ড অংশে থাকবে</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10  lg:px-20'>
                    {
                        backend.map(backendCard => <BackendShowAll
                            key={backendCard.id}
                            backendCard={backendCard}
                        ></BackendShowAll>)
                    }
                </div>
            </div>

        </div>
    )
}

export default FullStackWebDeveloperWorinkCard