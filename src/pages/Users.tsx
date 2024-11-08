import React, { useEffect } from 'react';
import UsersStats from '../components/users/UsersStats';
import Table from '../components/users/Table';
import ResultsCounts from '../components/users/ResultsCounts';
import FilterPop from '../components/users/FilterPop';
import classes from '../components/users/User.module.scss';
import { Ref } from '../components/users/FilterPop';
import { RefUL } from '../components/users/MenuPop';
import MenuPop from '../components/users/MenuPop';
import useFetch from '../hooks/useFetch';
import { getUsers, getDashboard } from '../util/http';

const Users = () => {
    const { data, error, loading, startFetch } = useFetch(getUsers);
    const { data: dashboard, startFetch: startFetch2, error: error2, loading: loading2 } = useFetch(getDashboard);
    console.log(data);
    useEffect(() => {
        startFetch();
        startFetch2();
    }, [])
    console.log(data);
    const filterRef = React.useRef<Ref>(null);
    const MenuRef = React.useRef<RefUL>(null);
    function openFilter(x: number, y: number) {
        if (filterRef.current) {
            filterRef.current.style.top = y + 'px';
            filterRef.current.style.left = x - 300 + 'px';
            filterRef.current.classList.toggle(classes.open);
        }
    }
    function openMenu(y: number) {

        if (MenuRef.current) {
            MenuRef.current.style.top = y + 'px';
            MenuRef.current.style.right = 70 + 'px';
            MenuRef.current.classList.add(classes.open);
        }
    }
    return (
        <div>
            {
                loading2 && <p>Loading...</p>
            }
            {
                error2 && <p>{error2.message}</p>
            }
            {
                dashboard && <UsersStats data={dashboard} />
            }

            {
                loading && <p>Loading...</p>
            }
            {
                error && <p>{error.message}</p>
            }
            {
                data && <Table openFilter={openFilter} openMenu={openMenu} users={data} />
            }
            <ResultsCounts />
            <FilterPop ref={filterRef} />
            <MenuPop ref={MenuRef} />
        </div>
    );
}

export default Users;
