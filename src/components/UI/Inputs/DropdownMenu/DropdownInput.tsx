import React from 'react';
import classes from './DropdownInput.module.scss';
import downArrow from '../../../../assets/icons/downArrow.png';
interface props {
    value: string | null;
    open: Function;
    placeholder?: string;
    name: string
}
const DropdownInput: React.FC<props> = ({ value, open, placeholder, name }) => {
    return (
        <div className={classes.menuContainer}>
            <input type="text" name={name} className={classes.menuInput} value={value || ""} placeholder={placeholder} readOnly />
            <button type="button" className={classes.dropButton} onClick={() => open((opened: boolean) => !opened)}>
                <img src={downArrow} />
            </button>
        </div>
    );
}

export default DropdownInput;
