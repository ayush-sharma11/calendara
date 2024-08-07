import React, { useState, useEffect } from "react";
import axios from "axios";

const Reminders = ({ mode }) => {
    const [events7days, setEvents7days] = useState([]);
    const [events3days, setEvents3days] = useState([]);
    const [events1day, setEvents1day] = useState([]);
    const email = localStorage.getItem("email");

    useEffect(() => {
        async function fetch7daysEvents() {
            try {
                const response = await axios.get(
                    `http://localhost:55555/api/reminders/7days/${email}`
                );
                setEvents7days(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        }

        fetch7daysEvents();
    }, [email]);

    useEffect(() => {
        async function fetch3daysEvents() {
            try {
                const response = await axios.get(
                    `http://localhost:55555/api/reminders/3days/${email}`
                );
                setEvents3days(response.data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        }

        fetch3daysEvents();
    }, [email]);

    useEffect(() => {
        async function fetch1dayEvents() {
            try {
                const response = await axios.get(
                    `http://localhost:55555/api/reminders/1day/${email}`
                );
                setEvents1day(response.data);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        }

        fetch1dayEvents();
    }, [email]);

    return (
        <>
            <div
                className={`container my-5 text-${
                    mode === "light" ? "black" : "white"
                }`}
            >
                <h1>Reminders</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="container my-5">
                                <h2 className="my-4">Within 1 Day</h2>
                                {events1day.map((event) => (
                                    <li
                                        key={event._id}
                                        style={{ listStyleType: "none" }}
                                        className="my-5"
                                    >
                                        <h4>Title: {event.title}</h4>
                                        <p>
                                            <strong>Start:</strong>{" "}
                                            {new Date(
                                                event.start
                                            ).toLocaleString()}
                                        </p>
                                        <p>
                                            <strong>End:</strong>{" "}
                                            {new Date(
                                                event.end
                                            ).toLocaleString()}
                                        </p>
                                        <p>
                                            <strong>Description:</strong>{" "}
                                            {event.describe}
                                        </p>
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4 col-12 reminder-mid-col">
                            <div className="container my-5">
                                <h2 className="my-4">Within 3 Days</h2>
                                {events3days.map((event) => (
                                    <li
                                        key={event._id}
                                        style={{ listStyleType: "none" }}
                                        className="my-5"
                                    >
                                        <h4>Title: {event.title}</h4>
                                        <p>
                                            <strong>Start:</strong>{" "}
                                            {new Date(
                                                event.start
                                            ).toLocaleString()}
                                        </p>
                                        <p>
                                            <strong>End:</strong>{" "}
                                            {new Date(
                                                event.end
                                            ).toLocaleString()}
                                        </p>
                                        <p>
                                            <strong>Description:</strong>{" "}
                                            {event.describe}
                                        </p>
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="container my-5">
                                <h2 className="my-4">Within 7 Days</h2>
                                {events7days.map((event) => (
                                    <li
                                        key={event._id}
                                        style={{ listStyleType: "none" }}
                                        className="my-5"
                                    >
                                        <h4>Title: {event.title}</h4>
                                        <p>
                                            <strong>Start:</strong>{" "}
                                            {new Date(
                                                event.start
                                            ).toLocaleString()}
                                        </p>
                                        <p>
                                            <strong>End:</strong>{" "}
                                            {new Date(
                                                event.end
                                            ).toLocaleString()}
                                        </p>
                                        <p>
                                            <strong>Description:</strong>{" "}
                                            {event.describe}
                                        </p>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reminders;
