import classes from "./MainStyle.module.scss";
interface props {
    placeholder: string;
    name: string;
    type: string;
}
const Input: React.FC<props> = ({ placeholder, name, type }) => {
    return (
        <input type={type} className={classes.input} name={name} placeholder={placeholder} />
    );
}

export default Input;
