import React from 'react';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/sidebar';
import classes from './DashboardRootLayout.module.scss';
import arrow from "../assets/icons/downArrowTwo.png"
import { Outlet } from 'react-router-dom';
const DashboardRootLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false)
    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.body}>
                <Sidebar isOpen={isSidebarOpen} />
                <div className={classes.dashboardContainer}>
                    <button className={classes.sidebarButton + " " + (isSidebarOpen ? classes.middle : "")} onClick={() => setIsSidebarOpen(prev => !prev)}>
                        <img src={arrow} alt="" />
                    </button>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DashboardRootLayout;
