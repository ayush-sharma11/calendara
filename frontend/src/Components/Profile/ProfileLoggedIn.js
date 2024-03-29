//React imports
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



const ProfileLoggedIn = (props) => {

    //States
    const [userName] = useState(localStorage.getItem("userName") || "");
    const [contact] = useState(localStorage.getItem("contact") || "");
    const [email] = useState(localStorage.getItem("email") || "");
    const [eventTitles1Day, setEventTitles1Day] = useState([]);
    const resolvedEventsCount = localStorage.getItem("resolvedEventsCount")
    const unresolvedEventsCount = localStorage.getItem("unresolvedEventsCount")

    //Handling functions
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:55555/api/reminders/1day/${userName}`
                );

                console.log("API Response:", response.data);

                if (response.data && response.data.length > 0) {
                    const eventTitles = response.data.map(
                        (event) => event.title
                    );
                    console.log("Event Titles:", eventTitles);
                    setEventTitles1Day(eventTitles);
                } else {
                    console.error("No events found in the API response");
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, [userName, setEventTitles1Day]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("contact");
        localStorage.removeItem("email");
        localStorage.removeItem("userProfileImage");
        localStorage.removeItem("userBGImage");
        localStorage.removeItem("completedEventsCount");
        localStorage.removeItem("categoryColor");
        localStorage.removeItem("overdueEventsCount");
        localStorage.removeItem("eventsCount");
        localStorage.removeItem("selectedColor");

        window.location.reload();
    };

    const defaultBackgroundImage = `/Images/Logo/calendara_${props.mode}.png`;

    const recipient = localStorage.getItem("email");

    const sendEmail = async () => {
        try {
            console.log("Data to be sent:", {
                recipient,
                eventTitles1Day,
            });

            if (Array.isArray(eventTitles1Day)) {
                const response1 = await axios.post(
                    "http://localhost:55555/api/sendmail",
                    {
                        recipient,
                        eventTitles1Day,
                    }
                );

                if (response1.status === 200) {
                    window.alert("Email Sent");
                    console.log("Email sent successfully");
                } else {
                    console.error("Failed to send email");
                }
            } else {
                console.error("eventTitles1Day is not an array");
            }
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <>
            <div className="my-3">
                <div className="shadow">
                    <div
                        className="container d-flex mt-5 mb-0 justify-content-center"
                        style={{
                            backgroundImage: `url(${
                                localStorage.getItem("userBGImage") ||
                                defaultBackgroundImage
                            })`,
                            height: "20rem",
                        }}
                    >
                        <div className="col my-5 d-flex justify-content-center">
                            <div
                                className="container"
                                style={{ marginTop: "10rem" }}
                            >
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <img
                                            src={
                                                localStorage.getItem(
                                                    "userProfileImage"
                                                ) || props.defaultProfileImg
                                            }
                                            className="img-fluid"
                                            alt="user profile pic"
                                            style={{
                                                width: "14rem",
                                                borderRadius: "7rem",
                                            }}
                                        />
                                    </div>

                                    <div className="col-12 mt-4 d-flex justify-content-center">
                                        <div className="col-12 mt-4 d-flex justify-content-center">
                                            <Link
                                                to="update-profile"
                                                className="btn btn-lg btn-success"
                                            >
                                                Update Profile
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-5 d-flex align-items-center justify-content-start">
                            <div
                                className={`text-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                                style={{ marginTop: "43rem" }}
                            >
                                <p
                                    className="montserrat-regular-400"
                                    style={{ fontSize: "2.5rem" }}
                                >
                                    Name: {userName}
                                </p>
                                <br />
                                <p
                                    className="montserrat-regular-400"
                                    style={{ fontSize: "2rem" }}
                                >
                                    Contact: {contact}
                                </p>
                                <br />
                                <p
                                    className="montserrat-regular-400"
                                    style={{ fontSize: "2rem" }}
                                >
                                    Email: {email}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="container d-flex py-3 justify-content-center"
                        style={{
                            backgroundColor:
                                props.mode === "light" ? "#e6f3ff" : "#474b52",
                        }}
                    >
                        <br />
                    </div>
                    <div
                        className="container d-flex mt-0 align-items-center justify-content-center"
                        style={{
                            backgroundColor:
                                props.mode === "light" ? "#e6f3ff" : "#474b52",
                        }}
                    >
                        <div
                            className="d-grid gap-4 col-6 justify-content-center"
                            style={{ marginTop: "15rem" }}
                        >
                            <Link
                                to="/profile/upload-events"
                                className={`btn btn-lg mt-3 btn-${
                                    props.mode === "light" ? "primary" : "light"
                                }`}
                            >
                                Upload Data
                            </Link>
                            <Link
                                to="/profile/account-settings"
                                className={`btn btn-lg btn-${
                                    props.mode === "dark" ? "light" : "primary"
                                }
                                `}
                            >
                                Account Settings
                            </Link>
                            <Link
                                to="/profile/more-settings"
                                className={`btn btn-lg btn-${
                                    props.mode === "dark" ? "light" : "primary"
                                }
                                `}
                            >
                                More Settings
                            </Link>
                            <button
                                className="btn btn-lg btn-danger mb-5"
                                onClick={handleLogout}
                            >
                                Sign Out
                            </button>
                        </div>
                        <div className="col d-flex align-items-center justify-content-center mb-5">
                            <div className="container">
                                <div
                                    className="row mx-0 rounded w-75"
                                    style={{
                                        backgroundColor:
                                            props.mode === "light"
                                                ? "#b3daff"
                                                : "#5f646d",
                                        marginTop: "20rem",
                                    }}
                                >
                                    <div className="col-12 mt-3">
                                        <p
                                            className={`text-${
                                                props.mode === "light"
                                                    ? "black"
                                                    : "white"
                                            }`}
                                            style={{ fontSize: "1.5rem" }}
                                        >
                                            Activity - Current Month
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <p
                                            className={`text-${
                                                props.mode === "light"
                                                    ? "black"
                                                    : "white"
                                            }`}
                                            style={{ fontSize: "1.5rem" }}
                                        >
                                            Resolved Events: {resolvedEventsCount}
                                        </p>
                                    </div>
                                    <div className="col-12">
                                        <p
                                            className={`text-${
                                                props.mode === "light"
                                                    ? "black"
                                                    : "white"
                                            }`}
                                            style={{ fontSize: "1.5rem" }}
                                        >
                                            Unresolved Events: {unresolvedEventsCount}
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="col-12 mb-3 d-flex justify-content-center">
                                        <Link
                                            to="/dashboard"
                                            className={`text-${
                                                props.mode === "light"
                                                    ? "success"
                                                    : "warning"
                                            }`}
                                            style={{
                                                fontSize: "1.5rem",
                                                textDecoration: "none",
                                            }}
                                        >
                                            View Full Analysis
                                        </Link>
                                    </div>
                                </div>
                                <div className="my-5">
                                    <div>
                                        <p
                                            className={`text-${
                                                props.mode === "light"
                                                    ? "black"
                                                    : "white"
                                            }`}
                                        >
                                            Email: {recipient}
                                        </p>

                                        <button
                                            type="button"
                                            onClick={sendEmail}
                                            className={`btn btn-${
                                                props.mode === "light"
                                                    ? "dark"
                                                    : "light"
                                            }`}
                                        >
                                            Send Email
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileLoggedIn;
