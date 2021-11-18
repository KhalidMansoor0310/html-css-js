const quizDB = [
    {
        question:"Best programming languages in 2021?",
        a:"C++",
        b:"Java",
        c:'Python',
        d:'jumla',
        ans:"ans3"
    },
    {
        question:"Best computer laptops for SOftware engineers in 2021?",
        a:"lenovo",
        b:"Dell",
        c:'HP',
        d:'Access',
        ans:"ans1"
    },
    {
        question:"Best university in Pakistan are?",
        a:"GIK",
        b:"NUST",
        c:'ICUP',
        d:'AUP',
        ans:"ans1"
    },
    {
        question:"Best programming languages in 2021?",
        a:"C++",
        b:"f**l",
        c:'Python',
        d:'jumla',
        ans:"ans3"
    }
]

let question = document.querySelector('.question');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
let answers = document.querySelectorAll('.answer');
let scoreCard = document.querySelector('.scoreCard');
let submit = document.querySelector('.submit');

let count = 0;
let score = 0;
function loadQuestions(){
    let quizlist = quizDB[count];
    question.innerText = quizlist.question
    option1.innerText = quizlist.a;
    option2.innerText = quizlist.b;
    option3.innerText = quizlist.c;
    option4.innerText = quizlist.d;    
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
    if(getAns == quizDB[count].ans){
        score++;
    }
    scoreCard.innerText = score;
    count++;
    if(count < quizDB.length){
        loadQuestions();
    }
    else{
                scoreCard.innerHTML = `<h2>Your current Grade is ${score}</h2>
                <button class="submit" onclick="location.reload()" >Play Again</button>`
            }
})