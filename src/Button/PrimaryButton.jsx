import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="px-4 py-1 btn border-none bg-gradient-to-r from-primary to-secondary text-white">{children}</button>
        </div>
    );
};

export default PrimaryButton;