window.onload = function () {
    $("#gameStart").on("click", timestart);
    $("#gameEnd").on("click", timeend);
}

//Set variables
var time = 45;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var corrArr = ["Theodor Seuss Geisel", "2007", "Carbon dioxide", "Marky Mark", "Bugs Bunny", "Apple", "Dr. Evil", "Tim Burton"]

$("#time-left").text(45);

//Countdown function
function countdown() {
    time--;
    $("#time-left").html(time);
    if (time === 0) {
        radioResults();
        $("#corr").text(correct);
        $("#incorr").text(incorrect);
        $("#unans").text(unanswered);
        $("#trivStart").hide();
        $("#trivEnd").show();
    }
}
//Calls on the countdown function, hide intro page, 
//and displays trivia page once begin is clicked.
function timestart() {
    $("#trivIntro").hide();
    $("#trivStart").show();
    intervalId = setInterval(countdown, 1000);
}

//Runs the results function, hides the trivia page, and displays the results page
function timeend() {

    //get the test results
    radioResults();
    $("#corr").text(correct);
    $("#incorr").text(incorrect);
    $("#unans").text(unanswered);

    $("#trivStart").hide();
    $("#trivEnd").show();
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

    //stoping the time.
    clearInterval(intervalId);

    //array to store all the user's answers.
    var questionArray = [];

    questionArray.push(question_1);
    questionArray.push(question_2);
    questionArray.push(question_3);
    questionArray.push(question_4);
    questionArray.push(question_5);
    questionArray.push(question_6);
    questionArray.push(question_7);
    questionArray.push(question_8);

    for (var i = 0; i < questionArray.length; i++) {
        if (questionArray[i] === corrArr[i]) {
            correct++;
        } else if (questionArray[i] === undefined) {
            unanswered++;
        } else {
            incorrect++;
        }
    }

    if (correct === 8) {
        $("#alert").text("Perfect!")
    } else if (correct < 8 && correct >= 6) {
        $("#alert").text("Good Job!")
    } else if (correct <= 5 && correct > 0) {
        $("#alert").text("Nice Try!")
    } else {
        $("#alert").text("=(")
    }
}