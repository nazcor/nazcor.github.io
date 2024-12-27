function popupFn(value) {
    document.getElementById(
        "overlay"
    ).style.display = "block";

    document.getElementById(
        "projects-popups"
    ).getElementsByClassName(
        value
    )[0].style.display = "block";
}

function closeFn(value) {
    document.getElementById(
        "overlay"
    ).style.display = "none";

    document.getElementById(
        "projects-popups"
    ).getElementsByClassName(
        value
    )[0].style.display = "none";
}