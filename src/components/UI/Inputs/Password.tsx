import { useState } from "react";
import classes from "./Password.module.scss";
import Input from './Input';
interface props {
    placeholder: string;
    name: string
}
const Password: React.FC<props> = ({ placeholder, name }) => {
    const [isShown, setIsShown] = useState<boolean>(false);
    return (
        <div className={classes.passwordContainer}>
            <input type={isShown ? "text" : "password"} className={classes.input} name={name} placeholder={placeholder} />
            <button className={classes.showButton} onClick={() => setIsShown(perv => !perv)} >SHOW</button>
        </div >
    );
}

export default Password;
