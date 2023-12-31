import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const NavbarLoggedIn = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg sticky-top border-bottom border-${
                    props.mode === "light" ? "" : "secondary"
                }`}
                style={
                    props.mode === "light"
                        ? { backgroundColor: "#fff" }
                        : { backgroundColor: "#36393e" }
                }
            >
                <div className="container d-flex justify-content-between">
                    <div className="w-25">
                        <Link className="navbar-brand p-0 w-50" to="/home">
                            <img
                                src={`../Images/calendara_${props.mode}.png`}
                                className="img-fluid"
                                alt=""
                            />
                        </Link>
                    </div>

                    <div className="d-flex align-items-center">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link
                                    className={`nav-link hover-underline text-${
                                        props.mode === "light"
                                            ? "black"
                                            : "white"
                                    }`}
                                    style={{ fontSize: "1.10rem" }}
                                    to="/home"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link
                                    className={`nav-link hover-underline text-${
                                        props.mode === "light"
                                            ? "black"
                                            : "white"
                                    }`}
                                    style={{ fontSize: "1.10rem" }}
                                    to="/dashboard"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link
                                    className={`nav-link hover-underline text-${
                                        props.mode === "light"
                                            ? "black"
                                            : "white"
                                    }`}
                                    style={{ fontSize: "1.10rem" }}
                                    to="/categories"
                                >
                                    Categories
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link
                                    className={`nav-link hover-underline text-${
                                        props.mode === "light"
                                            ? "black"
                                            : "white"
                                    }`}
                                    style={{ fontSize: "1.10rem" }}
                                    to="/add-event"
                                >
                                    Add
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <div>
                            <Link
                                className={`nav-link hover-navlink text-${
                                    props.mode === "light" ? "black" : "white"
                                } mx-2 hover-underline`}
                                onClick={handleShow}
                            >
                                Search
                            </Link>

                            <Modal
                                show={show}
                                onHide={handleClose}
                                size="lg"
                                className="mt-5"
                            >
                                <Modal.Header
                                    closeVariant={
                                        props.mode === "dark"
                                            ? "white"
                                            : "black"
                                    }
                                    closeButton
                                    className={
                                        props.mode === "light"
                                            ? ""
                                            : "border-secondary"
                                    }
                                    style={{
                                        backgroundColor:
                                            props.mode === "light"
                                                ? "white"
                                                : "#36393e",
                                    }}
                                >
                                    <Modal.Title className="w-75">
                                        <div className="input-group input-group-lg">
                                            <span
                                                className="input-group-text"
                                                style={{
                                                    backgroundColor:
                                                        props.mode === "light"
                                                            ? "white"
                                                            : "#666B74",
                                                    WebkitTextFillColor:
                                                        props.mode === "light"
                                                            ? ""
                                                            : "white",
                                                }}
                                            >
                                                <i className="bi bi-search"></i>{" "}
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="What are you looking for..."
                                                aria-label="Search"
                                                style={{
                                                    backgroundColor:
                                                        props.mode === "light"
                                                            ? "white"
                                                            : "#666B74",
                                                    WebkitTextFillColor:
                                                        props.mode === "light"
                                                            ? ""
                                                            : "#e6e6e6",
                                                }}
                                            />
                                        </div>
                                    </Modal.Title>
                                </Modal.Header>

                                <Modal.Body
                                    style={{
                                        backgroundColor:
                                            props.mode === "light"
                                                ? "white"
                                                : "#36393e",
                                    }}
                                >
                                    <div style={{ height: "50vh" }}></div>
                                </Modal.Body>

                                <Modal.Footer
                                    className={
                                        props.mode === "light"
                                            ? ""
                                            : "border-secondary"
                                    }
                                    style={{
                                        backgroundColor:
                                            props.mode === "light"
                                                ? "white"
                                                : "#36393e",
                                    }}
                                >
                                    <p
                                        className={`text-${
                                            props.mode === "light"
                                                ? "black"
                                                : "white"
                                        }`}
                                    >
                                        calendara
                                    </p>
                                </Modal.Footer>
                            </Modal>
                        </div>

                        <Link
                            to="/profile"
                            className={`nav-link hover-navlink text-${
                                props.mode === "light" ? "black" : "white"
                            } mx-2 hover-underline`}
                        >
                            Profile
                        </Link>

                        <div className="d-flex align-items-center">
                            <input
                                className="form-check-input invisible"
                                onClick={props.toggleMode}
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                            />
                            <label
                                className="d-flex mx-3 align-items-center"
                                style={{ fontSize: "1.50rem" }}
                            >
                                <input
                                    type="checkbox"
                                    onClick={props.toggleMode}
                                    style={{ display: "none" }}
                                />
                                <div className="container d-flex align-items-center">
                                    {props.mode === "light" ? (
                                        <i
                                            className="bi bi-sun icon-shadow-yellow"
                                            style={{ color: "black" }}
                                        ></i>
                                    ) : (
                                        <i
                                            className="bi bi-moon icon-shadow-white"
                                            style={{ color: "white" }}
                                        ></i>
                                    )}
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavbarLoggedIn;
