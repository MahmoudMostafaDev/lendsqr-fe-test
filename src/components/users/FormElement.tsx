import React from 'react';
import classes from "./User.module.scss"
interface props {
    label: string;
    name: string;
    children?: React.ReactNode
}
const FormElement: React.FC<props> = ({ label, name, children }) => {
    return (
        <div className={classes.formElement}>
            <label htmlFor={name}>{label}</label>
            {children}
        </div>
    );
}

export default FormElement;
