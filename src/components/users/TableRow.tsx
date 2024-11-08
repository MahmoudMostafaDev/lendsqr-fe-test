import React from 'react';
import classes from './User.module.scss';
import Status from './Status';
import threeDots from "../../assets/icons/threeDots.png"
import { Link } from 'react-router-dom';
interface Props {
    organization: string,
    username: string,
    email: string,
    phone: string,
    date: string,
    status: string

    openMenu: (y: number) => void

}
const TableRow: React.FC<Props> = ({ organization, username, email, phone, date, status, openMenu }) => {
    return (
        <Link to={`/dashboard/users/${username}`} className={classes.row}>
            <p className={classes.organization}>{organization}</p>
            <p className={classes.username}>{username}</p>
            <p className={classes.email}>{email}</p>
            <p className={classes.phone}>{phone}</p>
            <p className={classes.date}>{date}</p>
            <Status type={status} />
            <button onClick={(e) => {
                e.preventDefault();
                openMenu(

                    (e.target as HTMLElement).offsetTop)
            }}>
                <img src={threeDots} alt="" />
            </button>
        </Link>
    );
}

export default TableRow;
