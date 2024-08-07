import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavbarLoggedOut = ({ mode, toggleMode }) => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setShowOffcanvas(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg sticky-top border-bottom border-${
                    mode === "light" ? "" : "secondary"
                } shadow`}
                style={{
                    width: "100%",
                    backgroundColor: mode === "light" ? "#fff" : "#36393e",
                }}
            >
                <div className="container-fluid">
                    <div className="container d-flex justify-content-between">
                        <div className="navbar-brand w-25">
                            <Link className="navbar-brand p-0" to="/">
                                <img
                                    src={`../Images/Logo/calendara_${mode}.png`}
                                    className="img-fluid"
                                    style={{ maxWidth: "100%" }}
                                    alt=""
                                    onError={(e) =>
                                        console.error("Image failed to load", e)
                                    }
                                />
                            </Link>
                        </div>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShowOffcanvas(!showOffcanvas)}
                            style={{
                                color: mode === "light" ? "gray" : "white",
                                border: "none",
                            }}
                        >
                            <span
                                className="navbar-toggler-icon"
                                style={{
                                    filter:
                                        mode === "light"
                                            ? "invert(0)"
                                            : "invert(1)",
                                    color: mode === "light" ? "gray" : "white",
                                }}
                            ></span>
                        </button>

                        <div
                            className="collapse navbar-collapse d-flex justify-content-end"
                            id="navbarSupportedContent"
                        >
                            <div className="d-flex align-items-center">
                                <Link
                                    to="/sign-in"
                                    className={`nav-item nav-link hover-navlink text-${
                                        mode === "light" ? "black" : "white"
                                    } mx-2 hover-underline`}
                                >
                                    Login
                                </Link>

                                <input
                                    className="form-check-input invisible"
                                    onClick={toggleMode}
                                    type="checkbox"
                                    id="flexSwitchCheckDefault"
                                />
                                <label
                                    className="d-flex mx-3 align-items-center"
                                    style={{ fontSize: "1.50rem" }}
                                >
                                    <input
                                        type="checkbox"
                                        onClick={toggleMode}
                                        style={{ display: "none" }}
                                        id="toggle-mode"
                                        name="toggle-mode-checkbox"
                                    />
                                    <div className="container d-flex align-items-center">
                                        {mode === "light" ? (
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
                </div>
            </nav>
            <div
                className={`offcanvas offcanvas-end ${
                    showOffcanvas ? "show" : ""
                }`}
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div
                    className="offcanvas-header"
                    style={{
                        backgroundColor: mode === "light" ? "#fff" : "#36393e",
                    }}
                >
                    <h5
                        className={`offcanvas-title text-${
                            mode === "light" ? "black" : "white"
                        }`}
                        id="offcanvasExampleLabel"
                    >
                        Hey there! Welcome to calendara.
                    </h5>
                    <button
                        type="button"
                        className={`btn-close btn-close-${
                            mode === "light" ? "black" : "white"
                        }`}
                        onClick={() => setShowOffcanvas(false)}
                    ></button>
                </div>
                <div
                    className="offcanvas-body pt-5"
                    style={{
                        backgroundColor: mode === "light" ? "#fff" : "#36393e",
                    }}
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                            <div className="nav-item d-flex justify-content-center me-3">
                                <input
                                    className="form-check-input invisible"
                                    onClick={toggleMode}
                                    type="checkbox"
                                    id="flexSwitchCheckDefault"
                                />
                                <label
                                    className="d-flex align-items-center"
                                    style={{ fontSize: "1.50rem" }}
                                >
                                    <input
                                        type="checkbox"
                                        onClick={toggleMode}
                                        style={{ display: "none" }}
                                        id="toggle-mode"
                                        name="toggle-mode-checkbox"
                                    />
                                    <div className="container d-flex align-items-center">
                                        {mode === "light" ? (
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
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link hover-underline text-${
                                    mode === "light" ? "black" : "white"
                                }`}
                                style={{ fontSize: "1.10rem" }}
                                to="/home"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link hover-underline text-${
                                    mode === "light" ? "black" : "white"
                                }`}
                                style={{ fontSize: "1.10rem" }}
                                to="/sign-in"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavbarLoggedOut;
