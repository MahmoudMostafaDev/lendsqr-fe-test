import React from 'react';
import DropdownInput from './DropdownInput';
import DropdownOptionsContainer from './DropdownOptionsContainer';
import classes from './Dropdown.module.scss';


interface props {
    name: string
    placeholder?: string
    initialValue?: string
    values: string[]
}
const Dropdown: React.FC<props> = ({ values, name, placeholder, initialValue = "" }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [value, setValue] = React.useState(initialValue || null);
    return (
        <div className={classes.container}>
            <DropdownInput value={value} open={setIsOpen} placeholder={placeholder} name={name} />
            <DropdownOptionsContainer isOpen={isOpen} select={setValue} values={values} currentValue={value || ""} close={() => setIsOpen(false)} />
        </div>
    );
}

export default Dropdown;
