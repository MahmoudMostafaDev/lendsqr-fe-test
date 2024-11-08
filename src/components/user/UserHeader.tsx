import React from 'react';
import classes from './UserHeader.module.scss';
import avatar from '../../assets/icons/avatar.png';
import star from '../../assets/icons/star.png';
import fillStar from '../../assets/icons/fillStar.png';

const UserHeader = ({ user }: { user: any }) => {
    return (
        <div className={classes.userHeader}>
            <div className={classes.userDetails}>
                <img className={classes.avatar} src={avatar} alt="avatar" />
                <ul>
                    <li className={classes.name}>
                        <p className={classes.username}>{user.name}</p>
                        <p className={classes.code}>{user.code}</p>
                    </li>
                    <li className={classes.tier}>
                        <p>User's Tier</p>
                        <div>
                            {[...Array(3)].map((ele, index) => <img src={index < user.rate ? fillStar : star} alt="star" key={index} />)}
                        </div>
                    </li>
                    <li className={classes.balance}>
                        <p className={classes.amount}>{user.balance}</p>
                        <p className={classes.bank}>{user.bank}</p>
                    </li>
                </ul>
            </div>
            <ul className={classes.menu}>
                <li className={classes.active}>General Details</li>
                <li>Documents</li>
                <li>Bank Details</li>
                <li>Loans</li>
                <li>Savings</li>
                <li>App and System</li>
            </ul>
        </div>
    );
}

export default UserHeader;
