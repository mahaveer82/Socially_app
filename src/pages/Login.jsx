import React from 'react'
import Add from "../img/addAvatar.png"
import Register from './Register'

const Login = () =>{
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Socially</span>
                <span className="title">Register</span>
                <form>
                     
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                     
                    <button>Sign In</button>
                </form>
                <p>
                    You don't have an account? Login
                </p>
            </div>
        </div>
    )
}

export default Login