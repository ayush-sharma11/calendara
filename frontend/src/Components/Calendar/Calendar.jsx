import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Popping from "./Popping";
import { closeEvent, ShowEventApi, ShowEventsApi } from "../../Redux/actions";
import { connect } from "react-redux";

const locales = {
    "en-US": enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const MyCalendar = ({
    events,
    ShowEventApi,
    closeEvent,
    ShowEventsApi,
    mode,
}) => {
    const [open, setOpen] = useState(false);
    const [renderStatus, rerender] = useState(false);

    useEffect(() => {
        ShowEventsApi();
        console.log("i renderd because of refresh or start");
    }, [ShowEventsApi]);

    useEffect(() => {
        ShowEventsApi();
        console.log("i renderd");
    }, [renderStatus, ShowEventsApi]);

    const openEventClick = (event) => {
        setOpen(true);
        if (event.id) {
            ShowEventApi(event.id);
        }

        return;
    };

    const closeEventClick = () => {
        setOpen(false);
        setTimeout(() => closeEvent(), 300);
    };

    const eventPropGetter = (event) => {
        console.log("Event color:", event.color); // Log the color value
        const backgroundColor = event.color || '#3174ad'; // Default color or custom color property
        console.log("Background color:", backgroundColor);
        return { style: { backgroundColor } };
    };

    return (
        <div>
            <Popping
                open={open}
                handleOpen={openEventClick}
                handleClose={closeEventClick}
                renderStatus={renderStatus}
                rerender={rerender}
                mode={mode}
            />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: 50, fontFamily: "Patrick Hand" }}
                eventPropGetter={eventPropGetter}
                onSelectEvent={openEventClick}
            />
        </div>
    );
};

function mapStateToProps({ event, events }) {
    return {
        event,
        events,
    };
}

export default connect(mapStateToProps, {
    ShowEventApi,
    closeEvent,
    ShowEventsApi,
})(MyCalendar);
