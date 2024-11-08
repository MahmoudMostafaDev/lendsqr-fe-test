import React from 'react';
import classes from './User.module.scss'
interface props {
    img: string
    title: string
    count: string
}

const StatsBlock: React.FC<props> = ({ img, title, count }) => {
    return (
        <div className={classes.block}>
            <img src={img} alt={title} />
            <p className={classes.title}>{title}</p>
            <p className={classes.count}>{count}</p>
        </div>
    );
}

export default StatsBlock;
