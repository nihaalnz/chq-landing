import React from "react";

export default function Calendar() {

    React.useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.eventscalendar.co/plugins/web/loader.js?app=calendar";
        document.body.appendChild(script);
    }, []);

    return (
        <div className="container-lg">
            <div className="app-placeholder-calendar" data-id="proj_GyrtXkO6bHsghP6rvGk82"></div>
        </div>
    );
}