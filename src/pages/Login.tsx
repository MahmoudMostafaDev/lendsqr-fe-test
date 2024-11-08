import React from 'react';
import Input from '../components/UI/Inputs/Input';
import Password from '../components/UI/Inputs/Password';
import Button from '../components/UI/Button';
import { Link, Navigate } from 'react-router-dom';
import classes from "./Login.module.scss"
import useFetch from '../hooks/useFetch';
import { LoginApi } from '../util/http';
const Login = () => {
    const { data, error, loading, startFetch, setError } = useFetch(LoginApi);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formdata = new FormData(e.target as HTMLFormElement);
        if (formdata.get('email') && formdata.get('password')) {
            await startFetch({ email: formdata.get('email'), password: formdata.get('password') });
        } else {
            setError(new Error("Please Enter Email and Password"));
        }

    }
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h1>Welcome!</h1>
                <p>Enter details to login</p>
            </div>
            <form onSubmit={handleSubmit}>
                <Input placeholder="Email" name="email" type='email' />
                <Password placeholder="Password" name="password" />
                <Link to="forget-password">Forgot Password?</Link>
                <Button isSubmit text="Login" type="primary" variant="positive" onClick={() => { }} />
            </form>
            {data && <Navigate to="/dashboard/users" />}
            {error && <p className={classes.error}>{error.message}</p>}
            {loading && <p className={classes.loading}>Loading...</p>}
        </div>

    );
}

export default Login;
