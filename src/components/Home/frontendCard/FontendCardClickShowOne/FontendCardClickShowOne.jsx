import React from 'react';
import { useLocation } from 'react-router-dom';
const FontendCardClickShowOne = () => {
    const location = useLocation();
    const { card, backendCard } = location.state || {}; // পাঠানো ডেটা গ্রহণ

    if (!card && !backendCard) {
        return <p>কোনো ডেটা পাওয়া যায়নি।</p>; // ডেটা না থাকলে
    }

    return (
        <div>
            <div>
                {card && (
                    <div className="justify-center gap-6 md:flex bg-white shadow-lg rounded-lg p-5">
                        <div>
                            <img src={card.img} alt={card.name} className="rounded-lg mb-5" />
                        </div>
                        <div className="md:w-[800px]">
                            <h1 className="text-2xl font-bold text-blue-600 mb-5">{card.name}</h1>
                            <p className="text-gray-700">{card.description}</p>
                        </div>
                    </div>
                )}
                {backendCard && (
                    <div className="justify-center gap-6 md:flex bg-white shadow-lg rounded-lg p-5">
                        <div>
                            <img src={backendCard.img} alt={backendCard.name} className="rounded-lg mb-5" />
                        </div>
                        <div className="md:w-[800px]">
                            <h1 className="text-2xl font-bold text-blue-600 mb-5">{backendCard.name}</h1>
                            <p className="text-gray-700">{backendCard.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FontendCardClickShowOne;
