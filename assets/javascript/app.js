$("#gameStart").on("click", timestart);
$("#gameEnd").on("click", timeend);
$("#newGame").on("click", newgame);


//Set variables
var time = 45;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
const corrArr = ["Theodor Seuss Geisel", "2007", "Carbon dioxide", "Marky Mark", "Bugs Bunny", "Apple", "Dr. Evil", "Tim Burton", "Justin Bieber", "Four"]

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

function newgame() {
    reset();
    timestart();
    $("#trivEnd").hide();
}

function radioResults() {
    //storing the results of each question  in a variable
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
    var question_9 = $("input[type='radio'][name='artist']:checked").val();
    console.log(question_9);
    var question_10 = $("input[type='radio'][name='strings']:checked").val();
    console.log(question_10);

    //Stoping the time.
    clearInterval(intervalId);

    //Array to store all the user's answers.
    var questionArray = [];

    questionArray.push(question_1);
    questionArray.push(question_2);
    questionArray.push(question_3);
    questionArray.push(question_4);
    questionArray.push(question_5);
    questionArray.push(question_6);
    questionArray.push(question_7);
    questionArray.push(question_8);
    questionArray.push(question_9);
    questionArray.push(question_10);

    for (var i = 0; i < questionArray.length; i++) {
        if (questionArray[i] === corrArr[i]) {
            correct++;
        } else if (questionArray[i] === undefined) {
            unanswered++;
        } else {
            incorrect++;
        }
    }

    if (correct === 10) {
        $("#alert").text("Perfect!")
    } else if (correct < 10 && correct >= 6) {
        $("#alert").text("Good Job!")
    } else if (correct <= 5 && correct > 0) {
        $("#alert").text("Nice Try!")
    } else {
        $("#alert").text("Q.Q")
        console.log(reset());
    }
}

function reset() {
    $('input:radio[name=name]').each(function () { $(this).prop('checked', false); });
    $('input:radio[name=year]').each(function () { $(this).prop('checked', false); });
    $('input:radio[name=gas]').each(function () { $(this).prop('checked', false); });
    $('input:radio[name=mark]').each(function () { $(this).prop('checked', false); });
    $('input:radio[name=phrase]').each(function () { $(this).prop('checked', false); });
    $('input:radio[name=fruit]').each(function () { $(this).prop('checked', false); });
    $('input:radio[name=sidekick]').each(function () { $(this).prop('checked', false); });
    $('input:radio[name=movie]').each(function () { $(this).prop('checked', false); });
    $('input:radio[name=artist]').each(function () { $(this).prop('checked', false); });
    $('input:radio[name=strings]').each(function () { $(this).prop('checked', false); });
    time = 45;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    questionArray = [];
}