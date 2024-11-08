import React, { useRef, useState } from 'react';
import classes from './DateInput.module.scss';
import calenderIcon from "../../../assets/icons/calender.png"
interface props {
    placeholder: string
    name: string
}
const DateInput: React.FC<props> = ({ placeholder, name }) => {
    const [date, setDate] = useState<string>("");
    const datePicker = useRef<HTMLInputElement>(null);
    function handleClick() {
        datePicker.current?.showPicker();
    }
    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setDate(e.target.value);
    }
    return (
        <div className={classes.dateContainer}>
            <input type="date" name={name} onChange={handleInput} value={date} ref={datePicker} className={classes.dateButton + " " + classes.actualInput} />
            <input type='text' readOnly placeholder={placeholder} value={date} className={classes.dateInput} />
            <button type='button' onClick={handleClick} className={classes.dateButton}>
                <img src={calenderIcon} />
            </button>
        </div>
    );
}

export default DateInput;
