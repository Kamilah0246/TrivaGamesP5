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
            $("#counter-number").html(game.counter):
            if (game.counter === 0){
                console.log("TIMES UP");

                game.timeUp()
            }
        },

        loadQuestion: function(){
            timer = setInterval(game.countdown, 1000);
            panel.html("<h2>" + questions[this.currentQuestion].question + "<h2>");
            for(var i = 0; i < questions[this.currentQuestion].answers.length; i++)
        
            panel.append("<button class = 'answer-button' id = 'button' data-name =' " + 
            questions[this.currentQuestion].answers[i] + "'>" +
            questions[this.currentQuestion].answers[i] + "</button>");
        }




    },







]