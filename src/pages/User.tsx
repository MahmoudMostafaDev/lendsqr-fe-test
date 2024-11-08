import React, { useEffect } from 'react';
import Header from '../components/user/Header';
import UserHeader from '../components/user/UserHeader';
import UserInformation from '../components/user/UserInformation';
import { getUser } from '../util/http';
import useFetch from '../hooks/useFetch';


const User = () => {

    const { data, error, loading, startFetch } = useFetch(() => getUser(3));
    useEffect(() => {
        startFetch();
    }, [])
    return (<div>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {data &&
            <><Header />
                <UserHeader user={data.header} />
                <UserInformation information={data.information[0]} /></>
        }

    </div>
    );
}

export default User;
