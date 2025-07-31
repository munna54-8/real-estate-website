import React from 'react';

const HeroBanner: React.FC = () => {
    return (
        <div className="relative bg-blue-600 text-white h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}></div>
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-bold">Helping You Find Your Dream Home</h1>
                <p className="mt-4 text-lg">Your journey to a new home starts here.</p>
            </div>
        </div>
    );
};

export default HeroBanner;