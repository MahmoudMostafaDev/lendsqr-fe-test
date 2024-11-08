import React from 'react';
import classes from './UserInformation.module.scss';
import InformationSection from './InformationSection';
const UserInformation = ({ information }: any) => {
    let infoSections = [
        {
            label: "Personal Information",
            values: [
                { label: "Name", value: "Adedeji" },
                { label: "Email", value: "9YhZf@example.com" },
                { label: "Phone Number", value: "08012345678" },
                { label: "Bvn", value: "07060780922" },
                { label: "Gender", value: "Female" },
                { label: "Marital status", value: "Single" },
                { label: "Children", value: "None" },
            ]
        }
        , {
            label: "Personal Information",
            values: [
                { label: "Name", value: "Adedeji" },
                { label: "Email", value: "9YhZf@example.com" },
                { label: "Phone Number", value: "08012345678" },
                { label: "Bvn", value: "07060780922" },
                { label: "Gender", value: "Female" },
                { label: "Marital status", value: "Single" },
                { label: "Children", value: "None" },
            ]
        }, {
            label: "Personal Information",
            values: [
                { label: "Name", value: "Adedeji" },
                { label: "Email", value: "9YhZf@example.com" },
                { label: "Phone Number", value: "08012345678" },
                { label: "Bvn", value: "07060780922" },
                { label: "Gender", value: "Female" },
                { label: "Marital status", value: "Single" },
                { label: "Children", value: "None" },
            ]
        }
    ]
    console.log(information)
    return (
        <div className={classes.container}>
            {
                information.map((section: any, index: number) => <InformationSection label={section.label} values={section.values} key={index} />)
            }

        </div>
    );
}

export default UserInformation;
