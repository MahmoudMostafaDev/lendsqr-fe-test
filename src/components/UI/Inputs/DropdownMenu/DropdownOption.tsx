import React from 'react';
import classes from './Dropdown.module.scss';
interface props {
    select: Function;
    value: string;
    close: Function;
    isSelected: boolean;
}
const DropdownOption: React.FC<props> = ({ select, isSelected, value, close }) => {
    return (
        <div className={classes.option + " " + (isSelected ? classes.active + " " : "")} onClick={() => { select(value); close(); }}>
            {value}
        </div >
    );
}

export default DropdownOption;
