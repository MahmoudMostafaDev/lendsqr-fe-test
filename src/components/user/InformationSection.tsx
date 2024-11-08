import React from 'react';
import classes from './InformationSection.module.scss';
import InformationBlock from './InformationBlock';
interface Props {
    label: string;
    values: {
        label: string;
        value: string;
    }[];
};

const InformationSection: React.FC<Props> = ({ label, values }) => {
    console.log(values.length);
    return (
        <div className={classes.container}>
            <h2>{label}</h2>
            <div className={classes.blocks}>
                {
                    values.map(item => <InformationBlock label={item.label} value={item.value} key={item.label} />)
                }
            </div>

        </div>
    );
}

export default InformationSection;
