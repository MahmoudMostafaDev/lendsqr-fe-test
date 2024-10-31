import React from 'react';
import { useState } from 'react';
import classes from './MainStyle.module.scss';
//accept phone numbers that can contain country code or just the number
//with different formats
/*
    +1 123 456 7890
    123 456 7890
    1234567890
    (123) 456-7890
    123-456-7890
    +200-123-4567
*/
interface props {
    placeholder: string
    name: string;
    initialValue?: string;
}
const NumberInput: React.FC<props> = ({ placeholder, name, initialValue = "" }) => {
    const [value, setValue] = useState<string>(initialValue);
    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        if (checkIsValidPhoneNumber(e.target.value)) {
            setValue(e.target.value);
        }
    }

    function checkIsValidPhoneNumber(phoneNumber: string) {
        const phoneRegex = /^\+?[0-9\s()-]{0,15}$/;
        return phoneRegex.test(phoneNumber);
    }
    return (
        <input name={name} placeholder={placeholder} type="text" value={value} className={classes.input} onChange={handleInput} />
    );
}

export default NumberInput;
