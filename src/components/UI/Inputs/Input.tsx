import "./MainStyle.scss";
interface props {
    placeholder: string;
    name: string
}
const Input: React.FC<props> = ({ placeholder, name }) => {
    return (
        <input type='text' className="input" name={name} placeholder={placeholder} />
    );
}

export default Input;
