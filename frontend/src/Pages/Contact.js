import React from "react";
import { Link } from "react-router-dom";

const Contact = (props) => {
    return (
        <>
            <div className="d-flex my-5 justify-content-center">
                <h1
                    className={`text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Contact Us
                </h1>
            </div>
            <div className="container">
                <section className="mb-4">
                    <p
                        className={`text-${
                            props.mode === "dark" ? "light" : "dark"
                        } text-center w-responsive mx-auto mb-5`}
                    >
                        Do you have any questions? Please do not hesitate to
                        contact us directly. Our team will come back to you as
                        soon as possible to help you.
                    </p>
                    <div className="row">
                        <div className="col-md-8 mb-md-0 mb-5">
                            <form
                                id="contact-form"
                                name="contact-form"
                                action="mail.php"
                                method="POST"
                            >
                                <div className="row my-3">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control quicksand-medium-500"
                                                placeholder="Your name"
                                                style={{
                                                    backgroundColor:
                                                        props.mode === "dark"
                                                            ? "#4d4d4d"
                                                            : "white",
                                                    WebkitTextFillColor:
                                                        props.mode === "dark"
                                                            ? "#BEBEBE"
                                                            : "black",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6 my-">
                                        <div className="md-form mb-0">
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                className="form-control quicksand-medium-500"
                                                placeholder="Your email"
                                                style={{
                                                    backgroundColor:
                                                        props.mode === "dark"
                                                            ? "#4d4d4d"
                                                            : "white",
                                                    WebkitTextFillColor:
                                                        props.mode === "dark"
                                                            ? "#BEBEBE"
                                                            : "black",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                className="form-control quicksand-medium-500"
                                                placeholder="Subject"
                                                style={{
                                                    backgroundColor:
                                                        props.mode === "dark"
                                                            ? "#4d4d4d"
                                                            : "white",
                                                    WebkitTextFillColor:
                                                        props.mode === "dark"
                                                            ? "#BEBEBE"
                                                            : "black",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea
                                                type="text"
                                                id="message"
                                                name="message"
                                                rows="2"
                                                className="form-control md-textarea quicksand-medium-500"
                                                placeholder="Your message"
                                                style={{
                                                    backgroundColor:
                                                        props.mode === "dark"
                                                            ? "#4d4d4d"
                                                            : "white",
                                                    WebkitTextFillColor:
                                                        props.mode === "dark"
                                                            ? "#BEBEBE"
                                                            : "black",
                                                    minHeight: "5rem",
                                                    maxHeight: "10rem",
                                                }}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="text-center text-md-left">
                                <a
                                    className={`btn my-2 btn-${
                                        props.mode === "light"
                                            ? "primary"
                                            : "light"
                                    } quicksand-medium-500`}
                                    href="/"
                                >
                                    Send
                                </a>
                            </div>
                            <div className="status"></div>
                        </div>
                        <div className="col-md-4 text-center my-3">
                            <ul
                                className={`list-unstyled text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } mb-0 quicksand-medium-500`}
                            >
                                <li>
                                    <i className="fas fa-map-marker-alt fa-2x"></i>
                                    <p>
                                        Ramrao Adik Institue of Technology, DY
                                        Patil Deemed to be University, Nerul,
                                        Navi Mumbai, Maharashtra, 400706
                                    </p>
                                </li>

                                <li>
                                    <i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+91 9876543210</p>
                                </li>

                                <li>
                                    <i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@calendara.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <br />
            <div className="container my-5">
                <h4
                    className={`text-${
                        props.mode === "dark" ? "light" : "dark"
                    } quicksand-medium-500`}
                    style={{ marginLeft: "1.1rem" }}
                >
                    Or contact/follow us on social media
                </h4>
                <section className="mb-4 my-3">
                    <a
                        className={`btn btn-${
                            props.mode === "dark" ? "dark" : "success"
                        } btn-floating m-1 mx-3 btn-shadow-${
                            props.mode === "dark" ? "white" : "green"
                        }`}
                        href="https://www.facebook.com/"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-facebook"></i>
                    </a>

                    <a
                        className={`btn btn-${
                            props.mode === "dark" ? "dark" : "success"
                        } btn-floating m-1 mx-3 btn-shadow-${
                            props.mode === "dark" ? "white" : "green"
                        }`}
                        href="https://www.whatsapp.com/"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-whatsapp"></i>
                    </a>

                    <a
                        className={`btn btn-${
                            props.mode === "dark" ? "dark" : "success"
                        } btn-floating m-1 mx-3 btn-shadow-${
                            props.mode === "dark" ? "white" : "green"
                        }`}
                        href="https://www.instagram.com/"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-instagram"></i>
                    </a>

                    <a
                        className={`btn btn-${
                            props.mode === "dark" ? "dark" : "success"
                        } btn-floating m-1 mx-3 btn-shadow-${
                            props.mode === "dark" ? "white" : "green"
                        }`}
                        href="https://www.twitter.com/"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-twitter-x"></i>
                    </a>

                    <a
                        className={`btn btn-${
                            props.mode === "dark" ? "dark" : "success"
                        } btn-floating m-1 mx-3 btn-shadow-${
                            props.mode === "dark" ? "white" : "green"
                        }`}
                        href="https://www.linkedin.com/"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>

                    <a
                        className={`btn btn-${
                            props.mode === "dark" ? "dark" : "success"
                        } btn-floating m-1 mx-3 btn-shadow-${
                            props.mode === "dark" ? "white" : "green"
                        }`}
                        href="https://www.discord.com/"
                        role="button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="bi bi-discord"></i>
                    </a>
                </section>
            </div>
        </>
    );
};

export default Contact;