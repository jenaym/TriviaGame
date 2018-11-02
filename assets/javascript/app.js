$(document).ready(function() {

var questions = [
{
        question: "This is Question 1",
        options: ["option1", "option2", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "This is Question 2",
        options: ["option1", "option2", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "This is Question 3",
        options: ["option1", "option2", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "This is Question 4",
        options: ["option1", "option2", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "This is Question 5",
        options: ["option1", "option2", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "This is Question 6",
        options: ["option1", "option2", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "This is Question 7",
        options: ["option1", "option2", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "This is Question 8",
        options: ["option1", "option2", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "This is Question 9",
        options: ["option1", "option2", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "This is Question 10",
        options: ["option1", "option2", "option3", "option4"],
        correctAnswer: 1
    }
];

var currentQuestion = 0;
var correctCount = 0;
var time = 10;
var intervalId;
var questionC;
var correctA;
var choices;
var userAnswer;



    displayQuestion();
    $("#question").hide();
    $("#choices").hide();
    $("#restartButton").hide();


$("#startButton").on("click", function() {
    $("#question").show();
    $("#choices").show();
    run();
    $("#startButton").hide();
}); 




$("input[type='radio']").on("click", function() {
    if (currentQuestion <= 10) {
    userAnswer = $("input[name='choiceList']:checked").val();
    stop();
    getUserInput();
    setTimeout(tenSeconds, 1000 * 5);
    };
});



function displayQuestion() {


    //Variables
    questionC = questions[currentQuestion].question;
    $("#question").html(questionC);
    console.log(questionC);

    choices = questions[currentQuestion].options;
    console.log(choices);

    correctA = questions[currentQuestion].correctAnswer;
    console.log(correctA);

    console.log(questions[currentQuestion].options[correctA]);

    for (var i = 0; i < 4; i++) {

        var radios = $('<input type="radio" name="choiceList" value="' + i + '">' + choices[i] + '</input><br />');
        $("#choices").append(radios);


    }

};


function getUserInput() {

    if ((time > 0) && (userAnswer == correctA)) {

        $("#question").html("That's Correct!!")
        correctCount = correctCount + 1;
    }

    else if ((time > 0) && (userAnswer >= 0)) {
        $("#question").html("Nope!!!");
        $("#question").append("The Correct Answer was: " + questions[currentQuestion].options[correctA]);
    }

    // stop();

    $("#choices").html("<img src='https://imgc.allpostersimages.com/img/print/posters/toy-story-3-cast_a-G-7565576-0.jpg?w=947&h=634'>");

};
    
function timesUp() {
    $("#question").html("Time's Up!!!")
    $("#question").append("The Correct Answer was: " + questions[currentQuestion].options[correctA]);
    $("#choices").html("<img src='https://imgc.allpostersimages.com/img/print/posters/toy-story-3-cast_a-G-7565576-0.jpg?w=947&h=634'>");
}



function run() {
    stop();
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    time--;
    $("#time-left").html(time);
    
    if (time === 0) {
        stop();
        timesUp();
        tenSeconds();
    }
}

function stop() {
    clearInterval(intervalId);
}

function tenSeconds() {
    currentQuestion = currentQuestion + 1;
    $("#question").empty();
    $("#choices").empty();
    displayQuestion();
    time = 10;
    run();
}

});






// 1. User clicks "start" button to start game
// 2. Question 1 and options are displayed
    //2a. User only able to give one answer

// 3. User has 30 seconds to select an answer
        // IF user selects an answers within 30 seconds 
            //If answer is correct {
                //display screen congratulating them }
            //ELSE if the answer is incorrect {
                //display screen "incorrect answer" and give the correct answer }
            // move to next question after 10 seconds }
        // ELSE if user does not select an answer witin 30 seconds
            //display screen "time's up" and give correct answer 
            // move to next question after 10 seconds

// 4. Once user has attempted all 10 questions, display final screen 
    //showing # of correct answers, # of incorrect answers,
    // and Restart button          
