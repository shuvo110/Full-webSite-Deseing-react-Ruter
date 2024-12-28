import React from 'react'
import { Link } from 'react-router-dom'

const NavBer = () => {
    return (
        <div className='shadow-lg bg-black text-white p-4 flex items-center justify-between sticky top-0 z-40'>
            <a href="#">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/011/621/340/small/initial-sp-letter-royal-luxury-logo-template-in-art-for-luxurious-branding-projects-and-other-illustration-vector.jpg" alt="" className='rounded-full w-[50px] h-[50px]' />
            </a>

            <ul className='hidden md:flex items-center gap-x-16 text-lg font-serif'>
                <Link className='hover:text-red-500' to={'/Home'}>Home</Link>
                <Link className='hover:text-red-500' to={'/Product'}>Product</Link>
                <Link className='hover:text-red-500' to={'/Contact'}>Contact</Link>
                <Link className='hover:text-red-500' to={'/About'}>About</Link>
            </ul>
            <Link to={'/Login'}>
                <button class="btn btn-outline btn-error">Login</button>
            </Link>
        </div>
    )
}

export default NavBer