import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg'
import axios from 'axios';
const Login = () => {
    const form = useRef(null);
    const handleSubmit =(event)=>{
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            email : formData.get('email'),
            password : formData.get('password')
        }
        axios.post(`https://api.escuelajs.co/api/v1/auth/login`, data )
          .then(res => {
            console.log('correncto');
            console.log(res);
            console.log(res.data);
          }).catch(error=>{
            console.log('In-correncto');
            console.log(error);
          });
          
    };
    return (
        <div className="Login">
            <div className="Login-container">
                <img src={logo} alt="logo" className="logo" />
                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" name="email" placeholder="r32mcastillo.github.io" className="input input-email" />
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password" />
                    <button
                        onClick={handleSubmit}
                        className="primary-button login-button">
                        Log in
                    </button>
                    <a href="/">Forgot my password</a>
                </form>
                <button
                    className="secondary-button signup-button"
                >
                    Sign up
                </button>
            </div>
        </div >
    );
}

export default Login;