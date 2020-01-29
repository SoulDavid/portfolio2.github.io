"use strict";

function openMenu() {
    document.getElementById("menu").style.display = "block";
}

function closeMenu() {
    document.getElementById("menu").style.display = "none";
}

function menu() {
    console.log("onclick");
    if ( document.getElementById("menu").style.display === "block") {
        closeMenu();
    } else {
        openMenu();
    }
}
