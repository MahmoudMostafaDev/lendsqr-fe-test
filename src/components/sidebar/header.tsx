import React from 'react';
import classes from "./sidebar.module.scss";
import briefcase from "../../assets/icons/briefcase.png";
import dashboard from "../../assets/icons/work.png";
import arrow from "../../assets/icons/downArrow.png";
const Header = () => {
    return (
        <>
            <div className={classes.switchOrganization}>
                <img
                    src={briefcase}
                    alt="Organization"
                    className={classes.organizationIcon}
                />
                <p>Switch Organization</p>
                <img src={arrow} alt="arrow" className={classes.arrowIcon} />
            </div>
            <div className={classes.menuItem}>
                <img src={dashboard} alt="Dashboard" />
                <p>Dashboard</p>
            </div>
        </>

    );
}

export default Header;
