const quiz = [
  {
    question: 'Q1:As a trained linguist by profession, I would like to share with my colleagues in higher education the curruent findings on the importance of language as an instrument of thought.The psycologists of language tell us that ( ) carry on higher order congnitive activities especially of such functions as analysis, synthesis and evaluation, we need language.',
    answers: [ 'to be able to', 'we can try to', 'the reason to', 'one can plan to'],
    correct: 'to be able to'
  }, {
    question: 'Q2: There were all kinds of stories told about the war that made it sound as if it was happening in a fareway and different land. It was not until refugees started passing through our town ( ) we began to see that it was actually taking place in our country.',
    answers: [ 'that', 'when', 'where', 'while'],
    correct: 'that'
  }, {
    question: 'Q3:カッコ内の意味として最も適切なものを選んでください。The builder’s (conservative)　estimate of the time requires to remodel the kitche was six weeks.',
    answers: [ 'traditional', 'cautious', 'quick', 'optimistic'],
    correct: 'cautious'
  },{
    question: 'Q4: If you don’t go, I won’t　( )',
    answers: [ 'nor', 'too', 'also', 'either'],
    correct: 'nor'
  }, {
    question: 'Q5:She believes (  ) innocent',
    answers: [ 'for him to be', 'him to be', 'who he is', 'if he were'],
    correct: 'him to be'
  }, {
    question: 'Q6:A situation that is ( ) is very serious and worrying.',
    answers: [ 'important', 'grave', 'final', 'mobile'],
    correct: 'grave'
  }, {
    question: 'Q7:The man was once wealthy, but is now ( )',
    answers: [ 'broke', 'fallen', 'spoiled', 'faild'],
    correct: 'broke'
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
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解！'+'正解は'+'「'+quiz[quizCount].correct+'」');
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
