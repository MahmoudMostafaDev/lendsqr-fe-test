import React from 'react';
import classes from './Button.module.scss';
interface props {
    text: string;
    type: string;
    variant: string;
}
const Button: React.FC<props> = ({ text, type = "primary", variant = "positive" }) => {
    return (
        <button className={classes.button + ' ' + classes[type] + ' ' + classes[variant]}>
            {text}
        </button>
    );
}

export default Button;
