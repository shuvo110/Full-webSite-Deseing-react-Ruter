import React from 'react'

const Footer = () => {
    return (
        <div className='p-5 md:p-16 mt-6 bg-slate-200'>
            <footer className='grid md:grid-cols-2  lg:grid-cols-4 '>
                <div>
                    <div>
                        <a href="#">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/011/621/340/small/initial-sp-letter-royal-luxury-logo-template-in-art-for-luxurious-branding-projects-and-other-illustration-vector.jpg" alt="" className='rounded-full w-[50px] h-[50px]' />
                        </a>
                    </div>
                    <h1 className='text-lg font-sans font-semibold my-4'>Social Media</h1>
                    <div className='text-2xl space-x-4'>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div>
                    <h1 className='font-lg font-sans mb-5 font-semibold'>SHOP</h1>
                    <li className='my-3'><a href="#" className='py-1 hover:text-green-500 hover:pl-6 transition-all duration-500 ease-in-out'>Products</a></li>
                    <li className='my-3'><a href="#" className='py-1 hover:text-green-500 hover:pl-6 transition-all duration-500 ease-in-out'>Overview</a></li>
                    <li className='my-3'><a href="#" className='py-1 hover:text-green-500 hover:pl-6 transition-all duration-500 ease-in-out'>Pricing</a></li>
                    <li className='my-3'><a href="#" className='py-1 hover:text-green-500 hover:pl-6 transition-all duration-500 ease-in-out'>Releases</a></li>
                </div>
                <div>
                    <h1 className='font-lg font-sans mb-5 font-semibold'>Company</h1>
                    <li className='my-3'><a href="#" className='py-1 hover:text-green-500 hover:pl-6 transition-all duration-500 ease-in-out'>About us</a></li>
                    <li className='my-3'><a href="#" className='py-1 hover:text-green-500 hover:pl-6 transition-all duration-500 ease-in-out'>Contact</a></li>
                    <li className='my-3'><a href="#" className='py-1 hover:text-green-500 hover:pl-6 transition-all duration-500 ease-in-out'>News</a></li>
                    <li className='my-3'><a href="#" className='py-1 hover:text-green-500 hover:pl-6 transition-all duration-500 ease-in-out'>Support</a></li>
                </div>
                <div>
                    <h1 className='font-lg font-sans mb-5 font-semibold'>Stay up to date</h1>
                    <div className='flex items-center'>
                        <form>
                            <input type="email" name="" id="" placeholder='Enter your email' required className='h-[40px] p-3 outline-none ' />
                            <input type="submit" value="Submit" className='bg-red-400 py-2 px-4 cursor-pointer' />
                        </form>
                    </div>
                </div>

            </footer >
            <hr />
            <div>
                <marquee behavior="alternate" direction="left" className=" text-red-600">Full Stack web developer ( <span className='text-lg font-serif text-green-500'>Shuvo Roy</span> ) </marquee>
            </div>
        </div >
    )
}

export default Footer