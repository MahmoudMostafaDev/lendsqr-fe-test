import React, { useState } from 'react';
import Input from '../components/UI/Inputs/Input';
import classes from "./Login.module.scss"
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import useFetch from '../hooks/useFetch';
import { ForgetPasswordApi } from '../util/http';
const ForgetPassword = () => {
    const [submitted, setSubmitted] = useState(false);
    const { data, error, loading, startFetch, setError } = useFetch(ForgetPasswordApi);
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formdata = new FormData(e.target as HTMLFormElement);
        if (formdata.get('email')) {
            await startFetch(formdata.get('email'));
            setSubmitted(true);
        } else {
            setError(new Error("Please Enter Email"));
        }
    }
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h1>Did you Forget your password ?</h1>
                <p>Enter Email and we will send you change password link</p>
            </div>
            <form onSubmit={handleSubmit}>
                <Input placeholder="Email" name="email" type='email' />
                <Link to="/login">Login instead</Link>
                <Button isSubmit text="Send Email" type="primary" variant="positive" onClick={() => { }} disabled={submitted} />
            </form>
            {data && <p className={classes.success}>Email sent successfully</p>}
            {error && <p className={classes.error}>{error.message}</p>}
            {loading && <p className={classes.loading}>Loading...</p>}
        </div>
    );
}

export default ForgetPassword;
