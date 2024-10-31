import { useState } from "react";
import "./Password.scss";
interface props {
    placeholder: string;
    name: string
}
const Password: React.FC<props> = ({ placeholder, name }) => {
    const [isShown, setIsShown] = useState<boolean>(false);
    return (
        <div className="password-container">
            <input type={isShown ? "text" : "password"} className="input" name={name} placeholder={placeholder} />
            <button className="show-button" onClick={() => setIsShown(perv => !perv)} >SHOW</button>
        </div >
    );
}

export default Password;
