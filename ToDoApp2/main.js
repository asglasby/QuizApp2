"use strict";

//define my question and answer object
var quizQuestions = {};
var currentQuestion = ""; //This variable will hold the current question.
//create a property of quizQuestions called question1 which will be an object with 3 properties - question1, answersOptions, and answer.
quizQuestions["question1"] = {
    question1: "my question",
    answerOptions: ["answerOption1", "answerOption2", "answerOption3", "answerOption4"],
    answer: "answerOption1"
};

//create a function to check the answer
var checkAnswer1Function = function () {
    var correctAnswer = quizQuestions[currentQuestion]["answer"];
    //myClickedAnswer 
    if (document.getElementById("ans1").innerHTML === quizQuestions[currentQuestion]["answer"]) {
        alert("Correct");
    } else {
        alert("Your answer is not correct.  The correct answer is" + correctAnswer);
    }
   // alert("This function is not working yet!");
}

var checkAnswer2Function = function () {
    var correctAnswer = quizQuestions[currentQuestion]["answer"];
    //myClickedAnswer 
    if (document.getElementById("ans2").innerHTML === quizQuestions[currentQuestion]["answer"]) {
        alert("Correct");
    } else {
        alert("Your answer is not correct.  The correct answer is" + correctAnswer);
    }
    // alert("This function is not working yet!");
}

var checkAnswer3Function = function () {
    var correctAnswer = quizQuestions[currentQuestion]["answer"];
    //myClickedAnswer 
    if (document.getElementById("ans3").innerHTML === quizQuestions[currentQuestion]["answer"]) {
        alert("Correct");
    } else {
        alert("Your answer is not correct.  The correct answer is" + correctAnswer);
    }
    // alert("This function is not working yet!");
}

var checkAnswer4Function = function () {
    var correctAnswer = quizQuestions[currentQuestion]["answer"];
    //myClickedAnswer 
    if (document.getElementById("ans4").innerHTML === quizQuestions[currentQuestion]["answer"]) {
        alert("Correct");
    } else {
        alert("Your answer is not correct.  The correct answer is" + correctAnswer);
    }
    // alert("This function is not working yet!");
}

//create my nextQuestion function
var goToTheNextQuestion = function () {
    alert("This button is not working just yet!");
};

//var myAnswers = "<li id='ans'>" + "myanswers" + "</li>";

for (var i in quizQuestions) {
    alert(i);
    //create a function to display the first question
    currentQuestion = i;
    var myAnswersFunc = function () {
        var answers = "<li id='ans1'onclick='checkAnswer1Function();'>" + quizQuestions[i]["answerOptions"][0] + "</li>" +
                      "<li id='ans2'onclick='checkAnswer2Function();'>" + quizQuestions[i]["answerOptions"][1] + "</li>" +
                      "<li id='ans3'onclick='checkAnswer3Function();'>" + quizQuestions[i]["answerOptions"][2] + "</li>" +
                      "<li id='ans4'onclick='checkAnswer4Function();'>" + quizQuestions[i]["answerOptions"][3] + "</li>";
        return answers;
    };
    document.getElementById("question").innerHTML = i +"<br>" + myAnswersFunc();
}





