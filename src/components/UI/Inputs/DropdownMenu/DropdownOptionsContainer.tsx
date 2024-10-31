import React from 'react';
import DropdownOption from './DropdownOption';
import classes from './Dropdown.module.scss';

interface props {
    isOpen: boolean;
    select: Function;
    values: string[];
    currentValue?: string;
    close: Function;
}
const DropdownOptionsContainer: React.FC<props> = ({ isOpen = false, select, values, currentValue, close }) => {
    return (
        <div className={classes.optionsContainer + " " + (!isOpen ? " " + classes.hide : "")}>
            {values.map(value => <DropdownOption select={select} isSelected={currentValue == value} value={value} key={value} close={close} />)}
        </div>
    );
}

export default DropdownOptionsContainer;
