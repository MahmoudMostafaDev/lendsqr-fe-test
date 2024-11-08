import React from 'react';
import StatsBlock from './StatsBlock';
import classes from './User.module.scss';
import statsUsers from '../../assets/icons/statUsers.png';
import statLoan from '../../assets/icons/statLoan.png';
import statSavings from '../../assets/icons/statSavings.png';
import statActive from '../../assets/icons/statActive.png';
const UsersStats = ({ data }: any) => {
    return (
        <div className={classes.container}>
            <h2>Users</h2>
            <div className={classes.blocks}>
                <StatsBlock img={statsUsers} title="Users" count={data.users} />
                <StatsBlock img={statActive} title="Active Users" count={data.active} />
                <StatsBlock img={statLoan} title="Users with loans" count={data.loan} />
                <StatsBlock img={statSavings} title="Users with savings" count={data.savings} />
            </div>
        </div>
    );
}

export default UsersStats;
