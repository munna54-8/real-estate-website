import React from 'react';

const GoogleMap: React.FC = () => {
    return (
        <div className="w-full h-96">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509292!2d144.9537353153164!3d-37.81720997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f3b7%3A0x5045675218ceed30!2sYour%20Office%20Location!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default GoogleMap;