import React from 'react';
import classes from './Header.module.scss';
import { Link } from 'react-router-dom';
import notification from "../../assets/icons/notification.png"
import dropDown from "../../assets/icons/downArrowTwo.png"
interface props {
    img: string;
    userName: string;
}
const UserData: React.FC<props> = ({ img, userName }) => {
    return (
        <div className={classes.userContainer}>
            <Link to="/dashboard/users">Docs</Link>
            <img src={notification} className={classes.notification} />
            <div className={classes.user}>
                <img className={classes.userImg} src={img} />
                <p className={classes.userName}>{userName}</p>
                <img src={dropDown} className={classes.dropdown} />
            </div>
        </div>
    );
}

export default UserData;
