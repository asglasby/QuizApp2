"use strict";

//define my question and answer object
var questionNumber = 0;
var quizQuestions = {};
var currentQuestion = "question1"; //This variable will hold the current question.
//create a property of quizQuestions called question1 which will be an object with 3 properties - question1, answersOptions, and answer.
var objectCounterArray = [];
var scoreCounter = 0;
quizQuestions["question1"] = {
    question: "Question 1 -This is one of my questions",
    answerOptions: ["answerOption1", "answerOption2", "answerOption3", "answerOption4"],
    answer: "answerOption1"
};

quizQuestions["question2"] = {
    question: "Question 2 -This is one of my questions",
    answerOptions: ["answerOption1", "answerOption2", "answerOption3", "answerOption4"],
    answer: "answerOption2"
};

quizQuestions["question3"] = {
    question: "Question 3 -This is one of my questions",
    answerOptions: ["answerOption1", "answerOption2", "answerOption3", "answerOption4"],
    answer: "answerOption3"
};

quizQuestions["question4"] = {
    question: "Question 4 -This is one of my questions",
    answerOptions: ["answerOption1", "answerOption2", "answerOption3", "answerOption4"],
    answer: "answerOption4"
};

quizQuestions["question5"] = {
    question: "Question 5 -This is one of my questions",
    answerOptions: ["answerOption1", "answerOption2", "answerOption3", "answerOption4"],
    answer: "answerOption2"
};

for (var count in quizQuestions) {
    objectCounterArray.push(count);
    //alert(objectCounterArray);
}

//create a function to check the answer
var checkAnswer1Function = function () {
    "use strict"
    var correctAnswer = quizQuestions[currentQuestion]["answer"];
    if (document.getElementById("ans1").innerHTML === quizQuestions[currentQuestion]["answer"]) {
        alert("Correct");
        scoreCounter++;
    } else {
        alert("Your answer is not correct.  The correct answer is" + correctAnswer);
    }
    document.getElementById("question").innerHTML = "Click Next to Continue";
};

var checkAnswer2Function = function () {
    "use strict"
    var correctAnswer = quizQuestions[currentQuestion]["answer"];
    if (document.getElementById("ans2").innerHTML === quizQuestions[currentQuestion]["answer"]) {
        alert("Correct");
        scoreCounter++;
    } else {
        alert("Your answer is not correct.  The correct answer is" + correctAnswer);
    }
    document.getElementById("question").innerHTML = "Click Next to Continue";

};

var checkAnswer3Function = function () {
    "use strict"
    var correctAnswer = quizQuestions[currentQuestion]["answer"];
    if (document.getElementById("ans3").innerHTML === quizQuestions[currentQuestion]["answer"]) {
        alert("Correct");
        scoreCounter++;
    } else {
        alert("Your answer is not correct.  The correct answer is" + correctAnswer);
    }
    document.getElementById("question").innerHTML = "Click Next to Continue";
};

var checkAnswer4Function = function () {
    "use strict"
    var correctAnswer = quizQuestions[currentQuestion]["answer"];
    if (document.getElementById("ans4").innerHTML === quizQuestions[currentQuestion]["answer"]) {
        alert("Correct");
        scoreCounter++;
    } else {
        alert("Your answer is not correct.  The correct answer is" + correctAnswer);
    }
    document.getElementById("question").innerHTML = "Click Next to Continue";
};

var myAnswersFunc = function () {
    "use strict";
    var answers = "<li id='ans1'onclick='checkAnswer1Function();'>" + quizQuestions[currentQuestion]["answerOptions"][0] + "</li>" +
                  "<li id='ans2'onclick='checkAnswer2Function();'>" + quizQuestions[currentQuestion]["answerOptions"][1] + "</li>" +
                  "<li id='ans3'onclick='checkAnswer3Function();'>" + quizQuestions[currentQuestion]["answerOptions"][2] + "</li>" +
                  "<li id='ans4'onclick='checkAnswer4Function();'>" + quizQuestions[currentQuestion]["answerOptions"][3] + "</li>";
    return answers;
};

var endQuiz = function () {
    "use strict";
    alert("Your Score is " + scoreCounter);
    document.getElementById("question").innerHTML = "Thank You For Taking The Quiz!";
    document.getElementById("buttons").innerHTML = ""
};

//create my nextQuestion function
//var goToTheNextQuestion = function () {
//    "use strict";
//        for (questionNumber = 0; questionNumber < objectCounterArray.length; questionNumber++) {
//            currentQuestion = objectCounterArray[questionNumber]
//            document.getElementById("question").innerHTML = quizQuestions[currentQuestion]["question"] + "<br>" + myAnswersFunc();
//          }
//        endQuiz();
//};

var goToTheNextQuestion = function () {
    "use strict";

    if (questionNumber === objectCounterArray.length - 1) {
        endQuiz();
    } else {
        questionNumber++;
        currentQuestion = objectCounterArray[questionNumber]
        document.getElementById("question").innerHTML = quizQuestions[currentQuestion]["question"] + "<br>" + myAnswersFunc();
    }
};

document.getElementById("question").innerHTML = quizQuestions[currentQuestion]["question"] + "<br>" + myAnswersFunc();


    








