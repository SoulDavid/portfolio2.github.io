
$(document).ready(function parpadear () {
    $(".blink").fadeIn(500);
    $(".blink").fadeOut(500);

    setInterval(parpadear, 100);
})
