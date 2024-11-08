import React, { forwardRef, useEffect } from 'react';
import FormElement from './FormElement';
import Dropdown from '../UI/Inputs/DropdownMenu/Dropdown';
import classes from "./User.module.scss"
import Input from '../UI/Inputs/Input';
import DateInput from '../UI/Inputs/DateInput';
import PhoneNumberInput from '../UI/Inputs/PhoneNumberInput';
import Button from '../UI/Button';
import { removeOpenFromRefWhenClickOutside } from '../../util/utilites';

interface props {

}
export type Ref = HTMLFormElement;
const FilterPop = forwardRef<Ref, props>((props, ref) => {

    useEffect(() => {
        removeOpenFromRefWhenClickOutside(ref, classes);
    }, []);
    return (
        <form ref={ref} className={classes.Resultfilter}>
            <FormElement label="Organization" name="Organization" >
                <Dropdown name="Organization" values={["Lendsqr", "Paystack"]} placeholder='Select' />
            </FormElement>
            <FormElement label="Username" name="Username" >
                <Input placeholder="Username" name="Username" type="text" />
            </FormElement>
            <FormElement label="Email" name="Email" >
                <Input placeholder="Email" name="Email" type="Email" />
            </FormElement>
            <FormElement label="Date" name="Date" >
                <DateInput placeholder="Date" name="Date" />
            </FormElement>
            <FormElement label="Phone Number" name="Phone Number" >
                <PhoneNumberInput placeholder="Phone Number" name="Phone Number" />
            </FormElement>
            <FormElement label="Status" name="Status" >
                <Dropdown name="Status" values={["Active", "Inactive", "Pending", "Blacklisted"]} placeholder='Select' />
            </FormElement>
            <div className={classes.buttons}>
                <Button text="Reset" type="secondary" variant="netural" onClick={() => { ref instanceof Object && 'current' in ref && ref?.current?.classList.remove(classes.open); }} />
                <Button text="Filter" type="primary" variant="positive" onClick={() => { ref instanceof Object && 'current' in ref && ref?.current?.classList.remove(classes.open); }} />
            </div>
        </form>
    );
}
)
export default FilterPop;
