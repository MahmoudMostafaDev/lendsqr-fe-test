import React from 'react';
import classes from './User.module.scss';
import Status from './Status';
import TableRow from './TableRow';

interface props {
    openMenu: (y: number) => void
    users: any
}
const TableBody: React.FC<props> = ({ openMenu, users }) => {
    return (
        <div className={classes.tableBody}>
            {users.map((item: any, index: number) => <TableRow key={index} {...item} openMenu={openMenu} />)}
        </div>
    );
}

export default TableBody;
