import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Home from '../Home/Home';
const CardCllickDetelis = () => {
    const cardBtnDelits = useLoaderData();
    const { image, title, description, price, } = cardBtnDelits;
    return (
        <div>
            <div className='lg:flex items-center justify-around gap-4 border p-3 md:p-5 hover:border-black '>
                <img src={image} alt="" className='w-[280] lg:w-[500px] lg:h-[450px] h-[200px] m-auto bg-slate-400 p-1 rounded-lg' />
                <div className='mt-8 lg:mt-0'>
                    <div>
                        <h1>
                            <span className='text-lg font-bold font-serif text-green-500'>Title : </span>
                            <span className='text-base'>{title}</span>
                        </h1>
                        <h2 className='my-3'>
                            <span className='text-lg font-bold font-serif text-red-500'>Des : </span>
                            <span className='text-neutral-500 italic '>{description}</span>
                        </h2>
                        <p>
                            <span className='text-lg font-bold font-serif text-green-500'>Price : </span>
                            <span className='bg-slate-400 px-2  rounded-md'>{price} $</span>
                        </p>
                    </div>
                    <div className='bg-red-400 rounded-lg py-1 text-center mt-5 font-mono cursor-pointer'>
                        <button>Add Card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCllickDetelis