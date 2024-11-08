import React from 'react';
import classes from "./sidebar.module.scss";
import dashboard from "../../assets/icons/work.png";
import SectionItem from './SectionItem';
export interface item {
    icon: string
    name: string
    isActive: boolean
}
interface props {
    label: string
    items: item[]
}
const Section: React.FC<props> = ({ label, items }) => {
    return (
        <div className={classes.section}>
            <h3>{label}</h3>
            <div className={classes.menu}>
                {
                    items.map(item => <SectionItem icon={item.icon} name={item.name} isActive={item.isActive} key={item.name} />)
                }

            </div>

        </div>
    );
}

export default Section;
