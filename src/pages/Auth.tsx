import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from "../assets/logo.svg"
import illustration from "../assets/illustration.svg"
import classes from "./Auth.module.scss"
const Auth = () => {
    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img src={logo} className={classes.logo} />
                <img src={illustration} className={classes.illustration} />
            </div>
            <Outlet />
            <img src={illustration} className={classes.illustrationTwo} />
        </div>
    );
}

export default Auth;
