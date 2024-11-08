import React from 'react';
import classes from './InformationBlock.module.scss';
interface Props {
    label: string;
    value: string;
}
const InformationBlock: React.FC<Props> = ({ label, value }) => {
    return (
        <div className={classes.container}>
            <p>{label}</p>
            <p>{value}</p>
        </div>
    );
}

export default InformationBlock;
