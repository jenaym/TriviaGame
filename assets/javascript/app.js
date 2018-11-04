$(document).ready(function() {

var questions = [
{
        question: "Which album sold more records in the 2000s?",
        options: ["NSYNC's 'No Strings Attached'", "The Beatles '1'", "Britney Speras 'Oops!... I Did It Again", "Beyonce 'Me, Myeself and I"],
        correctAnswer: 1,
        answerImg: "<img src='https://images-na.ssl-images-amazon.com/images/I/61Ds2iWnCfL._SL1050_.jpg''>"

    },
{
        question: "In “Mean Girls,” which Missy Elliot song is playing when Janis and Damian tell Cady about the Plastics?",
        options: ["Pass That Dutch", "Work It", "Lose Control", "Get Ur Freak On"],
        correctAnswer: 0,
        answerImg: "<img src='http://365thingsaustin.com/wp-content/uploads/2017/09/o-MEAN-GIRLS-ALTERNATE-ORIGINAL-ENDING-facebook-e1505919281587.jpg'>"
    },
{
        question: "What was the name of the band Mark Hoppus and Travis Barker formed after they left Blink-182?",
        options: ["Box Car Racer", "+44", "+22", "Rectangle Runner"],
        correctAnswer: 1,
        answerImg: "<img src='https://i.scdn.co/image/ad571b91c7fc335cee66adf1e7dc49a06d4ede72'>"
    },
{
        question: "What year did Janet Jackson have her 'wardrobe malfunction' during the Super Bowl halftime show?",
        options: ["2003", "2004", "2005", "2006"],
        correctAnswer: 1,
        answerImg: "<img src='https://cdn.vox-cdn.com/thumbor/Lg5J7LITgoKlgmOktsEQZz6MA1Q=/0x0:2048x1427/1200x800/filters:focal(1286x338:1612x664)/cdn.vox-cdn.com/uploads/chorus_image/image/58550273/2921074.jpg.0.jpg'>"
    },
{
        question: "What is the name of the high school that Ryan, Marissa, Seth, and Summer attended on “The O.C.”?",
        options: ["Harbor School", "Bayview", "Seaside High", "Ocean Shores High"],
        correctAnswer: 0,
        answerImg:  "<img src='https://cheesecake.articleassets.meaww.com/18800/uploads/7795485e-b1fa-4b02-8900-1fa0a73cb24a_800_420.jpeg'>"
    },
{
        question: "What’s the name of Napoleon’s llama in 'Napoleon Dynamite'?",
        options: ["Diana", "Mary", "Gina", "Tina"],
        correctAnswer: 3,
        answerImg: "<img src='https://mindandframe.files.wordpress.com/2014/07/lvhrjq1xx0.jpg'>"
    },
{
        question: "What is Nelly’s real name?",
        options: ["Cornell Iral Haynes Jr.", "Joseph Franklin Harrison Jr.", "Robert Mullally Jr.", "Joseph William Smith"],
        correctAnswer: 0,
        answerImg: "<img src='https://img.buzzfeed.com/buzzfeed-static/static/2015-01/13/18/tmp/webdr12/9f31d3617cd2db630ca300c9b89cf44d-1.jpg'>"
    },
{
        question: "What was the 1 billionth song downloaded on iTunes?",
        options: ["'Don't Forget About Us' by Mariah Carey", "Crazy in Love' by Beyonce", "'Irreplaceable' by Beyonce", "'Speed of Sound' by Coldplay"],
        correctAnswer: 3,
        answerImg: "<img src='https://d2ciprw05cjhos.cloudfront.net/files/v3/styles/gs_large/public/images/18/03/coldplay.jpg?itok=0IKDIQ5k'>"
    },
{
        question: "What city did the students of East High School live in 'High School Musical'?",
        options: ["Albuquerque, New Mexico", "Salt Late City, Utah", "Seattle, WA", "San Deigo, CA"],
        correctAnswer: 0,
        answerImg: "<img src='https://m.media-amazon.com/images/M/MV5BZmQ3MWEyNTYtOTY1OC00MTljLWI3OGUtMmU1ZDc2OTYxNDQ4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_.jpg'>"
    },
{
        question: "What cheerleading team was Torrance Shipman captain of in “Bring It On”?",
        options: ["The Clovers", "The Rough Riders", "The Shamrocks", "The Toros"],
        correctAnswer: 3,
        answerImg: "<img src='https://m.media-amazon.com/images/M/MV5BNjhiMjk1YWYtMjgyYy00YTFhLTk0NTMtN2Q5MDZjMWEyYWI1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'>"
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
var correctImage;



    displayQuestion();
    $("#question").hide();
    $("#choices").hide();
    $("#restartButton").hide();


$("#startButton").on("click", function() {
    $("#question").show();
    $("#choices").show();
    run();
    $("#startButton").hide();
    $("#time-left").show();
}); 




$(document).on("click", "input[type='radio']", function() {

    userAnswer = $(this).val();
    run();
    getUserInput();
    setTimeout(tenSeconds, 1000 * 3);

    if (currentQuestion === 9) {
        stop();

        $("#answerPage").hide();
        $("#question").hide();
        $("#choices").hide();
        $("#answerPage").empty();
        $("#question").empty();
        $("#choices").empty();
        $("#results").show();
        $("#results").html("Correct: " + correctCount);
        $("#results").append("<p>" + "Incorrect: " + (10 - correctCount) + "</p>");
        $("#restartButton").show();
    }
    
});

$("#restartButton").on("click", function() {
    currentQuestion = 0;
    $("#question").show();
    $("#choices").show();
    run();
    $("#restartButton").hide();
    $("#results").hide();
    $("#time-left").hide();
    correctCount = 0;


});;


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

    correctImage = questions[currentQuestion].answerImg;



    for (var i = 0; i < 4; i++) {

        radios = $('<input type="radio" name="choiceList" value="' + i + '">' + choices[i] + '</input><br />');
        $("#choices").append(radios);
    }

};

function getUserInput() {


    if ((time > 0) && (userAnswer == correctA)) {

        $("#answerPage").html("That's Correct!!")
        // $("#answerImage").text(correctImage);
        correctCount = correctCount + 1;
        $("#answerPage").append("<p>" + correctImage + "</p>");


        
    }

    else if ((time > 0) && (userAnswer >= 0)) {
        $("#answerPage").html("Nope!!!");
        $("#answerPage").append("The Correct Answer was: " + questions[currentQuestion].options[correctA]);
        $("#answerPage").append("<p>" + correctImage + "</p>");

    }

    stop();
    $("#answerPage").show();
    $("#question").hide();
    $("#choices").hide();
    $("answerPage").append("<img src='https://imgc.allpostersimages.com/img/print/posters/toy-story-3-cast_a-G-7565576-0.jpg?w=947&h=634'>");



};


    
function timesUp() {
    $("#question").hide();
    $("#choices").hide();
    $("#answerPage").show();
    $("#answerPage").html("Time's Up!!!")
    $("#answerPage").append("The Correct Answer was: " + questions[currentQuestion].options[correctA]);
    $("#answerPage").append("<p>" + correctImage + "</p>");


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
        setTimeout(tenSeconds, 1000 * 3);
        
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
