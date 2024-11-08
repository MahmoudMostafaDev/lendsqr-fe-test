import React from 'react';
import classes from './User.module.scss';
interface props {
    type: string;
}
const Status: React.FC<props> = ({ type }) => {
    return (
        <span className={classes.status}>
            <span className={classes[type]}>{type}</span>
        </span>

    );
}

export default Status;
