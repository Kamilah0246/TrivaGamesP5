var panel = $("#quiz-area")
var countStartNumber = 30;

//Question set 
var question =[

    {
        question: "What year did BTS debut?",
        answers:["2016", "2010", "2013"],
        correctAnswer: "2013",
        image: "assets\bts gif debut.gif"
    },
    {
        question: "Which BTS album was number one in the Billboard 200 Chart in 2018?",
        answers:["Wings", "Love Yourself: Her", "Love Yourself: Tear"],
        correctAnswer: "Love Yourself: Tear",
        image: "assets\bts gif billboard.gif"

    },
]

    //Variable to hold out setInterval
    var timer;

    var game = {

        questions: questions,
        currentQuestion: 0,
        counter: countStartNumber,
        correct: 0,
        incorrect: 0,

        countdown: function(){
            game.counter--;
            $("#counter-number").html(game.counter);
            if (game.counter === 0){
                console.log("TIME UP");
                game.timeUp()
            }
        },

        loadQuestion: function(){
            timer = setInterval(game.countdown, 1000);
            panel.html("<h2>" + questions[this.currentQuestion].question + "<h2>");
            for(var i = 0; i < questions[this.currentQuestion].answers.length; i++)
            {
                panel.append("<button class = 'answer-button' id = 'button' data-name =' " + 
                questions[this.currentQuestion].answers[i] + "'>" +
                questions[this.currentQuestion].answers[i] + "</button>");
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
            $("counter-number").html(game.counter);
            panel.html("<h2>Out of Time</h2>");
            panel.append("<h3>The correct answer was: </h3>" + questions[this.currentQuestion].correctAnswer);
            panel.append("<img src='" + this.questions[this.currentQuestion].image);

            if (game.currentQuestion === questions.length -1)
                {
                    setTimeout(game.results, 3*1000);
                }
                else 
                {
                    setTimeout(game.nextQuestion, 3*1000);
                }
        },

        results: function(){

            clearInterval(timer);
            panel.html("<h2>All done, here's how you did!</h2>");
            $("counter-number").html(game.counter);

            panel.append("<h3>Correct Answers:" + game.correct + "</h3>");
            panel.append("<h3>Incorrect Answers:" + game.incorrect + "</h3>");
            panel.append("<h3>Unanswered:" + (questions.length = (game.correct + game.incorrect)) + "</h3>");
            panel.append("<br><button id= 'start-over'>Start Over?</button>");
        },




    },







]