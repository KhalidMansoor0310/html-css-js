const quizDB = [
    {
        question:"Q1:Whats HTML stands For?",
        a:"HyperTextMarkUp",
        b:"Hyper Text Mark Up Language",
        c:"Hyper Text Mark Up",
        ans:"ans2"
    },
    {
        question:"Q2:Whats CSS stands For?",
        a:"Cascadding style sheet",
        b:"Candle candle smart",
        c:"Hyper Text Mark Up",
        ans:"ans1"
    },
    {
        question:"Q3:what is python?",
        a:"Snake",
        b:"language",
        c:"Programming language",
        ans:"ans3"
    },
    {
        question:"Q4:What is jquery?",
        a:"library",
        b:"Language",
        c:"package",
        ans:"ans1"
    } 
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const submit = document.querySelector('.submit');
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector('.showRes');
const scoreCard = document.querySelector('.score');

let questionCount = 0;
let score =0 ;

const loadQuestions = () =>{
   const quizList = quizDB[questionCount];

   question.innerText = quizList.question;
   option1.innerText = quizList.a;
   option2.innerText = quizList.b;
   option3.innerText = quizList.c;


}
loadQuestions();

const getCheckedAns = () =>{
    let answer;
    answers.forEach((currentElem)=>{
        if(currentElem.checked){
            answer = currentElem.id;
        }
    });
    return answer;
}
submit.addEventListener('click',()=>{
    const getAns = getCheckedAns();
    if(getAns == quizDB[questionCount].ans){
        score++;
        
    }
    scoreCard.innerText = score;
    questionCount++;
    if(questionCount < quizDB.length){
        loadQuestions();
    }
    else{
                showScore.innerHTML = `<h2>Your current Grade is ${score}</h2>
                <button class="submit" onclick="location.reload()" >Play Again</button>`
            }
})


