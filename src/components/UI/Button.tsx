import React from 'react';
import classes from './Button.module.scss';
interface props {
    text: string;
    type: string;
    variant: string;
    onClick: Function;
}
const Button: React.FC<props> = ({ text, type = "primary", variant = "positive", onClick }) => {
    return (
        <button className={classes.button + ' ' + classes[type] + ' ' + classes[variant]} onClick={() => onClick()}>
            {text}
        </button>
    );
}

export default Button;
