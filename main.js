var panel = $("#quiz-area");
var countStartNumber = 30;

//Question set 
var questions = [

    {
        question: "What year did BTS debut?",
        answers:["2016", "2010", "2013"],
        correctAnswer: "2013",
        image: "assets/bts gif debut.gif"
    },

    {
        question: "Which BTS album was number one in the Billboard 200 Chart in 2018?",
        answers:["Wings", "Love Yourself: Her", "Love Yourself: Tear"],
        correctAnswer: "Love Yourself: Tear",
        image: "assets/bts gif billboard.gif"

    },

    {
        question: "Which BTS album was nominated for a Grammy award in 2019 for its album package?",
        answers:["Love Yourself: Tear", "Love Yourself: Answer", "Love Yourself: Her"],
        correctAnswer: "Love Yourself: Tear",
        image: "assets/Bts grammy gif.gif"
    },

    {
        question: "What is the name of V's dog?",
        answers:["Holly", "Yeontan", "Baliey"],
        correctAnswer: "Yeontan",
        image: "assets/V and Yeontan gif.gif"
    },

    {
        question: "Which BTS member gets scared the most?",
        answers:["Jungkook", "Namjoon", "J-Hope"],
        correctAnswer: "J-Hope",
        image: "assets/Jhope gif.gif"
    }
]

//Variable to hold out setInterval
var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.timeUp();
        }
    },

    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);
        panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++)
        {
            panel.append("<button class='answer-button' id='button' data-name='" +
            questions[this.currentQuestion].answers[i] +
            "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function() {
        game.counter = countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {
        
        clearInterval(timer);

        $("#counter-number").html(game.counter);

        panel.html("<h2>Out of Time!</h2>");
        panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        panel.append("<img src='" + questions[this.currentQuestion].image + "'/>" );

        if (game.currentQuestion === questions.length - 1)
        {
            setTimeout(game.results, 3 * 1000);
        }
        else
        {
            setTimeout(game.nextQuestion, 3 * 1000);
        }

    },

    results: function() {

        clearInterval(timer);

        panel.html("<h2>All done, here's how you did!</h2>");

        $("#counter-number").html(game.counter);

        panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (questions.length - (game.correct + game.incorrect)) + "</h3>");
        panel.append("<br><button id='start-over'>Start Over?</button>");
        
    },

    clicked: function(e) {

        clearInterval(timer);
        if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) 
        {
            this.answeredCorrectly();
        }
        else
        {
            this.answeredIncorrectly();
        }

    },

    answeredIncorrectly: function() {

        game.incorrect++;

        clearInterval(timer);

        panel.html("<h2>Nope!</h2>");
        panel.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
        panel.append("<img src='" + questions[game.currentQuestion].image + "'/>" );

        if (game.currentQuestion === questions.length - 1)
        {
            setTimeout(game.results, 3 * 1000);
        }
        else
        {
            setTimeout(game.nextQuestion, 3 * 1000);
        }

    },

    answeredCorrectly: function() {

        game.correct++;

        clearInterval(timer);

        panel.html("<h2>Correct!</h2>");
        panel.append("<img src='" + questions[game.currentQuestion].image + "'/>" );

        if (game.currentQuestion === questions.length - 1)
        {
            setTimeout(game.results, 3 * 1000);
        }
        else
        {
            setTimeout(game.nextQuestion, 3 * 1000);
        }

    },

    reset: function() {

        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();

    }

};


// CLICK EVENTS
// ----------------------------------------------------------------
$(document).on("click", "#start-over", function() {
    game.reset();
});

$(document).on("click", ".answer-button", function(e) {
    game.clicked(e);
});

$(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30 </span> Seconds</h2>");
    game.loadQuestion();
});


































