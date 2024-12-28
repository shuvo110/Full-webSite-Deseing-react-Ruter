import React from 'react';
import { Link } from 'react-router-dom';

const FrontendCard = ({ card }) => {
    const { img, name, description } = card;

    return (
        <div>
            <div className="card bg-base-100 shadow-lg p-5">
                <img src={img} alt="Shoes" className='max-h-[200px] rounded-lg ' />
                <div className="">
                    <h2 className="text-center text-lg font-semibold font-serif my-3">{name}</h2>
                    <p className='mb-5'>{description.slice(0, 200)}....</p>
                    {/* ডেটা পাঠানোর জন্য state ব্যবহার */}
                    <Link
                        to={{
                            pathname: '/Home/FontendCardClickShowOne',
                        }}
                        state={{ card }}
                    >
                        <button className="btn btn-primary w-full">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FrontendCard;
