import classes from "./MainStyle.module.scss";
interface props {
    placeholder: string;
    name: string
}
const Input: React.FC<props> = ({ placeholder, name }) => {
    return (
        <input type='text' className={classes.input} name={name} placeholder={placeholder} />
    );
}

export default Input;
