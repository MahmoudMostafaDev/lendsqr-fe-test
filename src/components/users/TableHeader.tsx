import React from 'react';
import filter from "../../assets/icons/filter.png"
import classes from './User.module.scss';
const TableHeader = ({ openFilter }: { openFilter: (x: number, y: number) => void }) => {
    return (
        <div className={classes.tableHeader}>
            <div className={classes.headerElement}>
                <p>Organization</p>
                <button onClick={(e) => openFilter((e.target as HTMLElement).offsetLeft, (e.target as HTMLElement).offsetTop)} >
                    <img src={filter} alt="filter button" />
                </button>
            </div>
            <div className={classes.headerElement}>
                <p>Username</p>
                <button onClick={(e) => openFilter((e.target as HTMLElement).offsetLeft, (e.target as HTMLElement).offsetTop)} >
                    <img src={filter} alt="filter button" />
                </button>
            </div>
            <div className={classes.headerElement}>
                <p>Email</p>
                <button onClick={(e) => openFilter((e.target as HTMLElement).offsetLeft, (e.target as HTMLElement).offsetTop)} >
                    <img src={filter} alt="filter button" />
                </button>
            </div>
            <div className={classes.headerElement}>
                <p>Phone number</p>
                <button onClick={(e) => openFilter((e.target as HTMLElement).offsetLeft, (e.target as HTMLElement).offsetTop)} >
                    <img src={filter} alt="filter button" />
                </button>
            </div>
            <div className={classes.headerElement}>
                <p>Date joined</p>
                <button onClick={(e) => openFilter((e.target as HTMLElement).offsetLeft, (e.target as HTMLElement).offsetTop)} >
                    <img src={filter} alt="filter button" />
                </button>
            </div>
            <div className={classes.headerElement}>
                <p>Status</p>
                <button onClick={(e) => openFilter((e.target as HTMLElement).offsetLeft, (e.target as HTMLElement).offsetTop)} >
                    <img src={filter} alt="filter button" />
                </button>
            </div>
            <div className={classes.headerElement}>

            </div>
        </div>
    );
}

export default TableHeader;
