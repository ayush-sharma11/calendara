import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const UpcomingEvents = (props) => {
    const data = [
        { name: "Completed Events", value: 2400 },
        { name: "Total Events", value: 4567 },
    ];

    const totalEventsColor = props.mode === "light" ? "#e6e6e6" : "#474b52";

    const COLORS = ["#daa520", totalEventsColor];

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                backgroundColor: "#ffc107",
                                color: "black",
                                height: "4rem",
                                width: "4rem",
                                borderRadius: "2rem",
                            }}
                        >
                            <i className="bi bi-clock"></i>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <p
                            className={`p-0 text-${
                                props.mode === "light" ? "black" : "white"
                            }`}
                        >
                            Not Completed Events - Upcoming
                        </p>
                    </div>
                    <div className="col-12 p-0">
                        <PieChart width={306} height={400}>
                            <Pie
                                dataKey="value"
                                data={data}
                                cx={151.5}
                                cy={200}
                                innerRadius={40}
                                outerRadius={80}
                                fill="#82ca9d"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>
                    <div className="col-12 p-0">
                        <div className="col-12 d-flex ps-5 mb-1">
                            <div
                                style={{
                                    height: "1.5rem",
                                    width: "1.5rem",
                                    backgroundColor: "#daa520",
                                }}
                            ></div>
                            <div className="ms-2">
                                <p
                                    className={`m-0 text-${
                                        props.mode === "light"
                                            ? "black"
                                            : "white"
                                    }`}
                                >
                                    : not completed events
                                </p>
                            </div>
                        </div>
                        <div className="col-12 d-flex ps-5 mb-1">
                            <div
                                style={{
                                    height: "1.5rem",
                                    width: "1.5rem",
                                    backgroundColor: "#82ca9d",
                                }}
                            ></div>
                            <div className="ms-2">
                                <p
                                    className={`m-0 text-${
                                        props.mode === "light"
                                            ? "black"
                                            : "white"
                                    }`}
                                >
                                    : total events
                                </p>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-2 mb-5">
                            <p
                                className={`m-0 text-${
                                    props.mode === "light" ? "black" : "white"
                                }`}
                            >
                                (overall)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpcomingEvents;
