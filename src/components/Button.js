import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <button
            style={{
                backgroundColor: '#F99B3C',
                // opacity: '0.7',
                border: 'none',
                borderRadius: '19px',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '16px',
                padding: '12px 24px',

            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;