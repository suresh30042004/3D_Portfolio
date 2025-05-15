// File: src/components/Button.jsx

import React from 'react';

const Button = ({ classname = '', id, text }) => {
    return (
        <a
            id={id}
            href="#"
            className={`cta-wrapper ${classname}`}
        >
            <div className="cta-button group flex items-center gap-2 mt-6">
                <div className="bg-circle w-4 h-4 rounded-full bg-blue-500" />
                <p className="text font-medium">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" className="w-5 h-5" />
                </div>
            </div>
        </a>
    );
};

export default Button;
