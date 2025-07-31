import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-2">About Me</h2>
                <p className="text-center text-gray-600 mb-8 font-semibold">
                    meerans.tamil | Real Estate Consultant in Dubai
                </p>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <p className="text-lg text-gray-700">
                            I am dedicated to helping you find your dream home in Dubai. With years of experience, I guide you through every step of buying, selling, or renting property, ensuring a smooth and trustworthy process.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="img/unkown img.jpeg" // Place your image in public/img/your-photo.jpg
                            alt="Meerans Tamil - Real Estate Consultant"
                            className="rounded-lg shadow-lg w-64 h-64 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;