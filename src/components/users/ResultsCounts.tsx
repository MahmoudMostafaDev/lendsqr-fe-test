import React from 'react';
import classes from './User.module.scss';
import arrow from "../../assets/icons/downArrow.png"
const NUMBER_OF_PAGES = 16;
const ACTIVE_PAGE = 1;
const RESULTS_PER_PAGE = 100;
const NUMBER_OF_RESULTS = 100;
const ResultsCounts = () => {
    return (
        <div className={classes.results}>
            <div className={classes.filter}>
                <p >Showing</p>
                <div className={classes.number}>
                    <p>100</p>
                    <img src={arrow} alt="" />
                </div>
                <p >out of 100</p>
            </div>
            <div className={classes.pagination}>
                <img src={arrow} className={classes.left} alt="" />
                {NUMBER_OF_PAGES > 5 ? [...Array(NUMBER_OF_PAGES)].map((ele, index) => (
                    index < 3 ?
                        <p key={index} className={index + 1 === ACTIVE_PAGE ? classes.active : ""}>{index + 1}</p>
                        : index === 4 ?
                            <p key={index}>...</p>
                            : index > NUMBER_OF_PAGES - 3 ?
                                <p key={index} className={index + 1 === ACTIVE_PAGE ? classes.active : ""}>{index + 1}</p>
                                : null
                )) : [...Array(NUMBER_OF_PAGES)].map((ele, index) => (
                    <p key={index} className={index + 1 === ACTIVE_PAGE ? classes.active : ""}>{index + 1}</p>
                ))}
                <img src={arrow} className={classes.right} alt="" />
            </div>
        </div>
    );
}

export default ResultsCounts;
