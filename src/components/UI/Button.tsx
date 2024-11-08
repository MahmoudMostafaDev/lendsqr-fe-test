import React from 'react';
import classes from './Button.module.scss';
interface props {
    text: string;
    type: string;
    variant: string;
    onClick: Function;
    isSubmit?: boolean;
    disabled?: boolean;
}
const Button: React.FC<props> = ({ text, type = "primary", variant = "positive", onClick, isSubmit = false, disabled = false }) => {
    return (
        <button type={isSubmit ? "submit" : "button"} disabled={disabled} className={classes.button + ' ' + classes[type] + ' ' + classes[variant] + ' ' + (disabled ? classes.disabled : '')} onClick={() => onClick()}>
            {text}
        </button>
    );
}

export default Button;
