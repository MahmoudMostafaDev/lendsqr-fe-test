import React from 'react';
import './Button.scss';
interface props {
    text: string;
    type: string;
    variant: string;
}
const Button: React.FC<props> = ({ text, type, variant = "positive" }) => {
    return (
        <button className='button secondary netural'>
            {text}
        </button>
    );
}

export default Button;
