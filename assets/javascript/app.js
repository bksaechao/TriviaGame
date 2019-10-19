window.onload = function () {
    $("#gameStart").on("click", timestart);
    $("#gameEnd").on("click", timeend);
}

//Static Variables
time = 10;
$("#time-left").text(120);

//Countdown functions
function countdown() {
    time--;
    $("#time-left").html(time);
    console.log(time);
    if (time === 0) {
        clearInterval(intervalId);
        $("#trivStart").hide();
        $("#trivEnd").show();
        $("#alert").text("Times Up!");
    }
}

function timestart() {
    $("#trivIntro").hide();
    $("#trivStart").show();
    intervalId = setInterval(countdown, 1000);
}

//Function that is executed when Done is clicked
function timeend() {
    $("#trivStart").hide();
    $("#trivEnd").show();
    $("#alert").text("Excellent!");
}