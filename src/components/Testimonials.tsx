import React from 'react';

const testimonials = [
    {
        quote: "This service was a game changer for me! Highly recommend.",
        author: "John Doe"
    },
    {
        quote: "Professional and reliable. I found my dream home thanks to them!",
        author: "Jane Smith"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
                <div className="flex flex-col space-y-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-lg italic">"{testimonial.quote}"</p>
                            <p className="mt-4 font-semibold">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;