const quiz = [
  {
    question: 'Q1:Ag2O',
    answers: [ 'わかる', 'わからない',],
    correct: '褐色'
  }, {
    question: 'Q2:Cu(OH)2',
    answers: [ 'わかる', 'わからない', ],
    correct: '青白色'
  }, {
    question: 'Q3:Zn(OH)2 ',
    answers: [ 'わかる', 'わからない', ],
    correct: '白色'
  },{
    question: 'Q4: Al(OH)3',
    answers: [ 'わかる', 'わからない', ],
    correct: '白'
  }, {
    question: 'Q5:Pb(OH)2',
    answers: [ 'わかる', 'わからない',],
    correct: '白色'
  }, {
    question: 'Q6:Fe(OH)3',
    answers: [ 'わかる', 'わからない', ],
    correct: '赤褐色'
  }, {
    question: 'Q7:Fe(OH)2',
    answers: [ 'わかる', 'わからない',],
    correct: '緑白色'
  },
  
];


const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].answer){
    $window.alert('「'+quiz[quizCount].correct+'」');
    score++;
  } else {
    $window.alert('正解は'+'「'+quiz[quizCount].correct+'」');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};


init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
