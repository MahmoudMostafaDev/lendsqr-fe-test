import React from 'react';
import classes from './Header.module.scss';
import logo from "../../assets/logo.svg";
import SearchInput from '../UI/Inputs/SearchInput';
import UserData from './UserData';
import user from '../../assets/user.png'
import search from '../../assets/icons/searchIcon.png'
const Header = () => {
    const [searchOpen, setSearchOpen] = React.useState<boolean>(false)
    return (
        <div className={classes.container}>
            <img src={logo} className={classes.logo} />
            <button className={classes.searchButton} onClick={() => setSearchOpen(prev => !prev)}>
                <img src={search} alt="" />
            </button>
            <div className={classes.searchContainer + " " + (searchOpen ? classes.show : "")}>
                <SearchInput name="search" placeholder="Search" />
            </div>
            <UserData img={user} userName="Adedeji" />
        </div>
    );
}

export default Header;
