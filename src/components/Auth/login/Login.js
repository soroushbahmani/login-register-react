import React, { useState, useEffect } from 'react'

import 'react-toastify/dist/ReactToastify.css';
import { validate } from './validata'
// pakage
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { notify } from './toast';
// css
import styles from './Login.module.css'
import { Route,Link } from 'react-router-dom';


const Login = () => {

    const [data, setData] = useState({
        phone: "",
        password: "",
    })

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const [toched, setToched] = useState({});
    const focusHandler = event => {
        setToched({
            phone: true,
            password: true,
        })
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(validate(data,'login'));
    }, [data, toched])

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {

            axios.post('http://127.0.0.1:8000/api/user/signup', {
                name: data.name,
                username: data.name,
                password: data.password
            }, { headers: { Accept: 'application/json' } })
                .then(function (response) {
                    if (JSON.parse(response.request.response).data) {
                        notify(`${Object.values(JSON.parse(response.request.response).data)[0]}`, "error");
                    } else {
                        notify(`${Object.values(JSON.parse(response.request.response))[0]}`, "SUCCESS");
                    }
                    console.log(Object.values(JSON.parse(response.request.response).data)[0]);
                })
                .catch(function (error) {
                    notify(`${error}`, "error");
                    console.log(error);
                });

            console.log(data);
        } else {
      notify("invalid data", "error");
            setToched({
                phone: true,
                password: true,
            })
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>

                <div className={styles.formFild}>
                    <label>phone</label>
                    <input placeholder='09_ _ _ _ _ _ _ _ _' className={errors.name && toched.name ? styles.uncompleted : styles.formInput} type='text' name='phone' value={data.phone} onChange={changeHandler} onFocus={focusHandler} />
                    {toched.phone && errors.phone && <span>{errors.phone}</span>}
                </div>
                <div className={styles.formFild}>
                    <label>Password</label>
                    <input placeholder='password' className={errors.name && toched.name ? styles.uncompleted : styles.formInput} type='text' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler} />
                    {toched.password && errors.password && <span>{errors.password}</span>}
                </div>

                <div className={styles.formButtons}>
                    <Link to="/signup">SignUp</Link>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
export default Login