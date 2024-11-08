import React from 'react';
import classes from './User.module.scss';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
interface props {
    openFilter: (x: number, y: number) => void,
    openMenu: (y: number) => void
    users: any
}


const Table: React.FC<props> = ({ openFilter, openMenu, users }) => {
    return (
        <div className={classes.table}>
            <TableHeader openFilter={openFilter} />
            <TableBody openMenu={openMenu} users={users} />
        </div>
    );
}

export default Table;
