$(document).ready(function() {

var questions = [
{
        question: "Which album sold more records in the 2000s?",
        options: ["NSYNC's 'No Strings Attached'", "The Beatles '1'", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "In “Mean Girls,” which Missy Elliot song is playing when Janis and Damian tell Cady about the Plastics?",
        options: ["Pass That Dutch", "Work It", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "What was the name of the band Mark Hoppus and Travis Barker formed after they left Blink-182?",
        options: ["Box Car Racer", "+44", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "What year did Janet Jackson have her 'wardrobe malfunction' during the Super Bowl halftime show?",
        options: ["2003", "2004", "2005", "2006"],
        correctAnswer: 1
    },
{
        question: "What is the name of the high school that Ryan, Marissa, Seth, and Summer attended on “The O.C.”?",
        options: ["Harbor School", "Bayview", "Seaside High", "Ocean Shores High"],
        correctAnswer: 1
    },
{
        question: "What’s the name of Napoleon’s llama in 'Napoleon Dynamite'?",
        options: ["Diana", "Mary", "Gina", "Tina"],
        correctAnswer: 1
    },
{
        question: "What is Nelly’s real name?",
        options: ["option1", "option2", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "What was the 1 billionth song downloaded on iTunes?",
        options: ["option1", "option2", "option3", "option4"],
        correctAnswer: 1
    },
{
        question: "What city did the students of East High School live in 'High School Musical'?",
        options: ["Albuquerque, New Mexico", "Salt Late City, Utah", "Seattle, WA", "San Deigo, CA"],
        correctAnswer: 1
    },
{
        question: "What cheerleading team was Torrance Shipman captain of in “Bring It On”?",
        options: ["The Clovers", "The Rough Riders", "The Shamrocks", "The Toros"],
        correctAnswer: 3
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
var radios;
var answerDisplayed = false;



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

// $("input[type='radio']").on("click", function() {

//     userAnswer = $("input[name='choiceList']:checked").val();
//     playTrivia();
//     setTimeout(tenSeconds, 1000 * 5);
//     reset();
// });


$(document).on("click", "input[type='radio']", function() {

    // userAnswer = $("input[name='choiceList']:checked").val();
    userAnswer = $(this).val();
    playTrivia();
    setTimeout(tenSeconds, 1000 * 3);
    
});


    // event.preventDefault();
    // userAnswer = $("input[name='choiceList']:checked").val();
    // stop();
    // setTimeout(tenSeconds, 1000 * 5);
//     playTrivia();



// });

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

        radios = $('<input type="radio" name="choiceList" value="' + i + '">' + choices[i] + '</input><br />');
        $("#choices").append(radios);
    }

};

function getUserInput() {


    if ((time > 0) && (userAnswer == correctA)) {

        $("#answerPage").html("That's Correct!!")
        correctCount = correctCount + 1;
        
    }

    else if ((time > 0) && (userAnswer >= 0)) {
        $("#answerPage").html("Nope!!!");
        $("#answerPage").append("The Correct Answer was: " + questions[currentQuestion].options[correctA]);
    }

    stop();
    $("#answerPage").show();
    $("#question").hide();
    $("#choices").hide();
    answerDisplayed = true;
    $("answerPage").append("<img src='https://imgc.allpostersimages.com/img/print/posters/toy-story-3-cast_a-G-7565576-0.jpg?w=947&h=634'>");



};


    
function timesUp() {
    $("#question").hide();
    $("#choices").hide();
    $("#answerPage").show();
    $("#answerPage").html("Time's Up!!!")
    $("#answerPage").append("The Correct Answer was: " + questions[currentQuestion].options[correctA]);
    $("#answerPage").appendl("<img src='https://imgc.allpostersimages.com/img/print/posters/toy-story-3-cast_a-G-7565576-0.jpg?w=947&h=634'>");
    answerDisplayed = true;
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
        // tenSeconds();
    }
}

function stop() {
    clearInterval(intervalId);
}

function tenSeconds() {
    reset();
    run();
}

function reset() {
    $("#question").empty();
    $("#choices").empty();
    userAnswer = "";
    questionC = "";
    correctA = "";
    choices = "";
    $("input[name='choiceList']:checked").empty();
    currentQuestion = currentQuestion + 1;
    displayQuestion()
    $("#question").show();
    $("#choices").show();
    $("#answerPage").hide();
    $("#answerPage").empty();
   

    time = 10;


}




function playTrivia() {
    // for (var i = 0; i < currentQuestion; i ++) {
        // if (answerDisplayed === true) {
        //     // setTimeout(tenSeconds, 1000 * 5);
        //     // reset();
        //     currentQuestion = currentQuestion + 1;
        //     answerDisplayed = false;
        // }

        run();
        getUserInput();
        //}
        // setTimeout(tenSeconds, 1000 * 7);
        
        // reset();
    // }
};




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
