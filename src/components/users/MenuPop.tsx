import React, { forwardRef, useEffect } from 'react';
import classes from './User.module.scss';
import view from "../../assets/icons/view.png"
import blacklist from "../../assets/icons/blacklist.png"
import activate from "../../assets/icons/activate.png"
import { removeOpenFromRefWhenClickOutside } from '../../util/utilites';

interface props {

}

export type RefUL = HTMLUListElement;
const MenuPop = forwardRef<RefUL, props>((props, ref) => {
    useEffect(() => {
        removeOpenFromRefWhenClickOutside(ref, classes);
    }, [])
    return (
        <ul className={classes.menuPop} ref={ref}>
            <li>
                <img src={view} alt="view icon" />
                <p>View Details</p>
            </li>
            <li>
                <img src={blacklist} alt="blacklist icon" />
                <p>Blacklist User</p>
            </li>
            <li>
                <img src={activate} alt="activate icon" />
                <p>Activate User</p>
            </li>
        </ul>
    );
});

export default MenuPop;
