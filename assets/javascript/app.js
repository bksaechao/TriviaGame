window.onload = function () {
    $("#gameStart").on("click", timestart);
}
time = 120;
$("#time-left").text(120);

function countdown() {
    time--;
    $("#time-left").html(time);
    console.log(time);
}

function timestart() {
    intervalId = setInterval(countdown, 1000);
}
