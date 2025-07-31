import React from 'react';

const WhatsAppButton: React.FC = () => {
    const whatsappNumber = '1234567890'; // Replace with your WhatsApp number

    const handleClick = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    return (
        <button 
            onClick={handleClick} 
            className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
            <i className="fab fa-whatsapp"></i> {/* Font Awesome WhatsApp icon */}
        </button>
    );
};

export default WhatsAppButton;