const LightMode = () => {
    document.documentElement.style.setProperty("--underline-color", "black");

    document.documentElement.style.setProperty(
        "--scrollbar-track-color",
        "#D3D3D3"
    );
    document.documentElement.style.setProperty(
        "--scrollbar-thumb-color",
        "#0d6efd"
    );
    document.documentElement.style.setProperty(
        "--scrollbar-thumb-hover-color",
        "#7c95eb"
    );
    document.documentElement.style.setProperty(
        "--scrollbar-button-color",
        "white"
    );

    document.documentElement.style.setProperty("--fc-toolbar-title", "black");
    document.documentElement.style.setProperty(
        "--fc-col-header-cell-cushion",
        "black"
    );
    document.documentElement.style.setProperty(
        "--fc-daygrid-day-number",
        "black"
    );
    document.documentElement.style.setProperty(
        "--fc-multimonth-title",
        "white"
    );
    document.documentElement.style.setProperty(
        "--fc-scrollgrid-shrink-cushion",
        "black"
    );
    document.documentElement.style.setProperty(
        "--fc-list-day-side-text",
        "black"
    );
    document.documentElement.style.setProperty("--fc-list-day-text", "black");
    document.documentElement.style.setProperty(
        "--fc-button-background",
        "#606060"
    );
    document.documentElement.style.setProperty(
        "--fc-button-active-background",
        "#909090"
    );
    document.documentElement.style.setProperty("--fc-button-color,", "white");

    document.documentElement.style.setProperty("--datepicker-color", "white");

    document.documentElement.style.setProperty(
        "--toggle-first-color",
        "#5c6bc0"
    );
    document.documentElement.style.setProperty(
        "--toggle-last-color",
        "#4758b8"
    );

    document.documentElement.style.setProperty("--inputColor", "");

    document.documentElement.style.setProperty(
        "--input-upload-color",
        "#f2f2f2"
    );
};

export default LightMode;
