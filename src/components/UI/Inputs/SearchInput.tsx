import React from 'react';
import classes from "./SearchInput.module.scss"
import searchIcon from "../../../assets/icons/searchIcon.png"

interface props {
    name: string
    placeholder: string
}
const SearchInput: React.FC<props> = ({ name, placeholder }) => {
    return (
        <div className={classes.searchContainer}>
            <input type="text" className={classes.searchInput} placeholder={placeholder} name={name} />
            <button className={classes.searchButton}>
                <img src={searchIcon} />
            </button>
        </div>
    );
}

export default SearchInput;
