window.onload = function () {
    $("#gameStart").on("click", timestart);
    $("#gameEnd").on("click", timeend);
}

//Static Variables
var time = 60;
var correct = 0;
$("#time-left").text(60);

//Countdown functions
function countdown() {
    time--;
    $("#time-left").html(time);
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

    //get the test results
    radioResults();

    $("#trivStart").hide();
    $("#trivEnd").show();
    $("#alert").text("Excellent!");


}


function radioResults() {
    //storing the results of question 1 in a variable
    var question_1 = $("input[type='radio'][name='name']:checked").val();
    console.log(question_1);
    var question_2 = $("input[type='radio'][name='year']:checked").val();
    console.log(question_2);
    var question_3 = $("input[type='radio'][name='gas']:checked").val();
    console.log(question_3);
    var question_4 = $("input[type='radio'][name='mark']:checked").val();
    console.log(question_4);
    var question_5 = $("input[type='radio'][name='phrase']:checked").val();
    console.log(question_5);
    var question_6 = $("input[type='radio'][name='fruit']:checked").val();
    console.log(question_6);
    var question_7 = $("input[type='radio'][name='sidekick']:checked").val();
    console.log(question_7);
    var question_8 = $("input[type='radio'][name='movie']:checked").val();
    console.log(question_8);
}

// $("input[type='radio']").click(function () {
//     var question_1 = $("input[name='name']:checked").val();
//     console.log(radioValue)
// });