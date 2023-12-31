import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from 'axios';

const SignUpForm = (props) => {

    const navigate = useNavigate();
    const [error, setError] = useState("");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = ({currentTarget:input}) => {
        setData({...data, [input.name]:input.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/users";
            const {data: res} = await axios.post(url, data);
            navigate("/")
            console.log(res.message);
        } catch (error) {
            if (error.response &&
                error.response.status >=400 &&
                error.response.status <=500
                ){
                    setError(error.response.data.message)
                }
        }
    }


    return (
        <>
            <div className="form-container sign-up">
                <form onSubmit={handleSubmit}
                    style={{
                        backgroundColor:
                            props.mode === "light" ? "#fff" : "#36393e",
                    }}
                >
                    <h1
                        className={`text-${
                            props.mode === "light" ? "black" : "white"
                        }`}
                    >
                        <b>Create Account</b>
                    </h1>
                    <div className="social-icons">
                        <Link
                            to="#"
                            className={`icon text-${
                                props.mode === "light" ? "white" : "black"
                            } btn btn-${
                                props.mode === "light" ? "primary" : "light"
                            }`}
                        >
                            <i className="bi bi-google"></i>
                        </Link>
                        <Link
                            to="#"
                            className={`icon text-${
                                props.mode === "light" ? "white" : "black"
                            } btn btn-${
                                props.mode === "light" ? "primary" : "light"
                            }`}
                        >
                            <i className="bi bi-facebook"></i>
                        </Link>
                        <Link
                            to="#"
                            className={`icon text-${
                                props.mode === "light" ? "white" : "black"
                            } btn btn-${
                                props.mode === "light" ? "primary" : "light"
                            }`}
                        >
                            <i className="bi bi-microsoft"></i>
                        </Link>
                        <Link
                            to="#"
                            className={`icon text-${
                                props.mode === "light" ? "white" : "black"
                            } btn btn-${
                                props.mode === "light" ? "primary" : "light"
                            }`}
                        >
                            <i className="bi bi-apple"></i>
                        </Link>
                    </div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={handleChange}
                        style={{
                            backgroundColor:
                                props.mode === "light" ? "" : "gray",
                            WebkitTextFillColor:
                                props.mode === "light" ? "black" : "white",
                        }}
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleChange}
                        style={{
                            backgroundColor:
                                props.mode === "light" ? "" : "gray",
                            WebkitTextFillColor:
                                props.mode === "light" ? "black" : "white",
                        }}
                        required
                    />

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={handleChange}
                        style={{
                            backgroundColor:
                                props.mode === "light" ? "" : "gray",
                            WebkitTextFillColor:
                                props.mode === "light" ? "black" : "white",
                        }}
                        required
                    />
                    <button
                        className={`btn btn-${
                            props.mode === "light" ? "primary" : "danger"
                        } mt-3`}
                    >
                        Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default SignUpForm;
