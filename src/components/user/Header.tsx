import React from 'react';
import classes from './Header.module.scss';
import back from "../../assets/icons/back.png"
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
const Header = ({ data }: any) => {
    return (
        <>
            <Link to={"/dashboard/users"} className={classes.back}>
                <img src={back} alt='back button' />
                <p>Back to Users</p>
            </Link>
            <div className={classes.header}>
                <h2>User Details</h2>
                <div className={classes.buttons} >
                    <Button text="BLACKLIST USER" type="secondary" variant="negative" onClick={() => { }} />
                    <Button text="ACTIVATE USER " type="secondary" variant="positive" onClick={() => { }} />
                </div>
            </div>
        </>
    );
}

export default Header;
