import React from 'react';

const Services: React.FC = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                <p className="mb-12 text-gray-600">
                    We offer a range of services to help you with your real estate needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Buying</h3>
                        <p>Expert assistance in finding your dream home.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Selling</h3>
                        <p>Get the best value for your property with our help.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Rental</h3>
                        <p>Find the perfect rental property that fits your needs.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Investment</h3>
                        <p>Guidance on real estate investments for maximum returns.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;