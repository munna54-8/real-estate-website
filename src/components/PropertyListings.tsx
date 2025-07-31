import React from 'react';

const PropertyListings: React.FC = () => {
    const properties = [
        {
            id: 1,
            title: 'Modern Family Home',
            image: 'img/modern.jpeg',
            description: 'A beautiful modern home with spacious rooms and a large backyard.',
            price: '$500,000'
        },
        {
            id: 2,
            title: 'Luxury Apartment',
            image: 'img/luxury.jpeg',
            description: 'A luxurious apartment in the heart of the city with stunning views.',
            price: '$1,200,000'
        },
        {
            id: 3,
            title: 'Cozy Cottage',
            image: 'img/cottage.jpg',
            description: 'A charming cottage perfect for a weekend getaway.',
            price: '$300,000'
        },
        {
            id: 4,
            title: 'Spacious Villa',
            image: 'img/Spacious.jpeg',
            description: 'A spacious villa with a private pool and garden.',
            price: '$750,000'
        },
        {
            id: 5,
            title: 'Urban Loft',
            image: 'img/Urban Loft.jpeg',
            description: 'An urban loft with modern finishes and an open floor plan.',
            price: '$600,000'
        },
          {
            id: 6,
            title: 'Urban Loft',
            image: 'img/Urban Loft.jpeg',
            description: 'An urban loft with modern finishes and an open floor plan.',
            price: '$600,000'
        }
    ];

    return (
        <section className="py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Property Listings</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map(property => (
                    <div key={property.id} className="border rounded-lg overflow-hidden shadow-lg">
                        <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{property.title}</h3>
                            <p className="text-gray-600">{property.description}</p>
                            <p className="text-lg font-bold mt-2">{property.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PropertyListings;