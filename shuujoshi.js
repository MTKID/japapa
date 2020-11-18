const quiz = [
  {
    question: 'Q1:ばや',
    answers: [ '〜たい', '〜あってほしい', '〜しないでくれ', '〜よ'],
    correct: '〜たい'
  },
  {
    question: 'Q2:てしがな・にしがな',
    answers: [ '〜があったらなあ', '〜だろう', '〜たい・〜たいものだ', '〜ことよ・〜なあ'],
    correct: '〜たい・〜たいものだ'
  },
  {
    question: 'Q3:なむ',
    answers: [ '〜あったらなあ', '〜てほしい・〜てくれたらなあ', '〜ならば', '〜ことよ・〜なあ'],
    correct: '〜てほしい・〜てくれたらなあ'
  },
  {
    question: 'Q4:もがな・がな',
    answers: [ '〜があったらなあ・〜であったらなあ', '〜ことよ・〜なあ', '〜たい', '〜てほしい・〜てくれたらなあ'],
    correct: '〜があったらなあ・〜であったらなあ'
  },
  {
    question: 'Q5:かし',
    answers: [ '〜よ・〜ね（念押し）', '〜なあ（詠嘆）', '〜な（禁止）', '〜たい'],
    correct: '〜よ・〜ね（念押し）'
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
