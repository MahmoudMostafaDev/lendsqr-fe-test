import React from 'react';
import classes from "./sidebar.module.scss"
import dashboard from "../../assets/icons/work.png";
interface Props {
    icon: string;
    name: string;
    isActive: boolean;
}
const SectionItem: React.FC<Props> = ({ icon, name, isActive }) => {
    return (
        <div className={classes.menuItem + " " + (isActive ? classes.active : "")}>
            <img src={icon} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default SectionItem;
