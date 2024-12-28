import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='py-10  flex items-center justify-center'>
            <div className='bg-black py-10 px-10 rounded-md'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_MVZqXYoqjRtcEdjdA2BcitSYpAinEfKpA&s" alt="" className='max-w-[150px] m-auto' />
                <form action="" className='space-y-8 mt-3 sm:w-[300px]  md:w-[500px]'>
                    <label className="input input-bordered flex items-center gap-2 ">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="text" className="grow" placeholder="Email" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 ">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" className="grow" placeholder="Username" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 ">
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" className="grow" placeholder='password' required />
                    </label>
                    <div className='flex items-center justify-center gap-3 text-lg border hover:cursor-pointer py-2 rounded-md'>
                        <i className="fa-brands fa-google-plus text-[#4285F4]"></i>
                        <h1>
                            <span className='text-[#4285F4]'>G</span>
                            <span className='text-[#EA4335]'>o</span>
                            <span className='text-[#FBBC05]'>o</span>
                            <span className='text-[#4285F4]'>g</span>
                            <span className='text-[#34A853]'>l</span>
                            <span className='text-[#EA4335]'>e</span>
                        </h1>
                    </div>
                    <button className="btn btn-outline btn-secondary w-full">Login</button>
                </form>
                <div className='mt-6 text-[#968484cd] space-y-2'>
                    <p>Forgot <a className="link link-accent">Password</a> ?</p>
                    <p>Don't have account ? <Link to={'/Login/singUp'} className="link link-accent">Sing Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login