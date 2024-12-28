import React from 'react'
import { Link } from 'react-router-dom';

const BackendShowAll = ({ backendCard }) => {
    const { img, name, description } = backendCard;

    return (
        <div>
            <div className="card bg-base-100 shadow-lg p-5 hover:border border-black">
                <img src={img} alt="Shoes" className='max-h-[250px] rounded-lg '/>
                <div className="">
                    <h2 className="text-center text-lg font-semibold font-serif my-5 text-red-500 border">{name}</h2>
                    <p className='mb-5'>{description.slice(0, 200)}....</p>
                    {/* ডেটা পাঠানোর জন্য state ব্যবহার */}
                    <Link
                        to={{
                            pathname: '/Home/FontendCardClickShowOne',
                        }}
                        state={{ backendCard }}
                    >
                        <button className="btn btn-primary w-full">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BackendShowAll