function openMenu() {
    "use strict";
    document.getElementById("menu").style.display = "block";
}

function closeMenu() {
    "use strict";
    document.getElementById("menu").style.display = "none";
}

function menu() {
    "use strict";
    console.log("onclick");
    if ( document.getElementById("menu").style.display === "block") {
        closeMenu();
    } else {
        openMenu();
    }
}
