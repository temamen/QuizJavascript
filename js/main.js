
const quizData = [
    {
        question: "1. Why We Use <br> Element",
        a: "To Make Text Bold",
        b: "To Make Text Italic",
        c: "To Add Breakline",
        d: "To Create Horizontal Line",
        correct: "c",
    },
    {
        question: "2. Is <img> Element Has Attribute href",
        a: "Yes",
        b: "No Its For Anchor Tag <a>",
        c: "All Elements Has This Attribute",
        d: "Answer 1 And 3 Is Right",
        correct: "b",
    },
    {
        question: "3. How Can We Make Element Text Bold",
        a: "Putting It Inside <b> Tag",
        b: "Putting It Inside <strong> Tag",
        c: "Customizing It With Font-Weight Property In CSS",
        d: "All Answers Is Right",
        correct: "d",
    },
    {
        question: "4. What Is The Right Hierarchy For Creating Part Of Page",
        a: "<h2> Then <p> Then <h1> Then <p> Then <h3> Then <p> Then <img>",
        b: "<h1> Then <p> Then <h3> Then <p> Then <h2> Then <p> Then <img>",
        c: "<h2> Then <p> Then <h3> Then <p> Then <h1> Then <p> Then <img>",
        d: "All Solutions Is Wrong",
        correct: "d"
      },
      {
        question: "5. How Can We Include External Page Inside Our HTML Page",
        a: "By Using Include in HTML",
        b: "By Using Load In HTML",
        c: "By Using iFrame Tag",
        d: "All Solutions Is Wrong",
        correct: "c"
      },
      {
        question: "6. What Is The Tag That Not Exists in HTML",
        a: "<object>",
        b: "<basefont>",
        c: "<abbr>",
        d: "All Tags Is Exists in HTML",
        correct: "d"
      },
      {
        question: "7. How We Specify Document Type Of HTML5 Page",
        a: "<DOCTYPE html>",
        b: "<DOCTYPE html5>",
        c: "<!DOCTYPE html5>",
        d: "<!DOCTYPE html>",
        correct: "d"
      },
      {
        question: "8. What Is The Element Thats Not Exists in HTML5 Semantics",
        a: "<article>",
        b: "<section>",
        c: "<blockquote>",
        d: "<aside>",
        correct: "c"
      },
      {
        question: "9. In HTML Can We Use This Way To Add Attributes",
        a: "<div class='class-name'>",
        b: "<div class=class-name>",
        c: "<div class=\"class-name\">",
        d: "All Is Right",
        correct: "d"
      },
      {
        question: "10. Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<javascript>",
        c: "<script>",
        d: "<scripting>",
        correct: "b"
      }
];
const quiz = document.getElementById("quiz");
const qustionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if (minutes==="00" && seconds==="00")
        {
            
            alert("Restart Quiz");
            RestartQuiz();
        }
    }, 1000);
}
    
   
window.onload = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
        
    startTimer(fiveMinutes, display);
};
function RestartQuiz(){
    currentQuiz = 0;
    score = 0;
    loadQuiz();
}
function loadQuiz() {

    const currentQuizData = quizData[currentQuiz];
    qustionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    deSelectedAnswered();
}
loadQuiz();
//  var xx=getSelected();

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
            console.log(answer);
        }
    });
    console.log(answer);
    return answer;
}

function deSelectedAnswered() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer != undefined){

        if (answer === (quizData[currentQuiz].correct)) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
        <h2> You answered correctly at ${score}/${quizData.length} quize</h2>
        <button onclick="location.reload()">Reload</button>
        `
        }
    }
    
});