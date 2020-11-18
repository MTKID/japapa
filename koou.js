const quiz = [
  {
    question: 'Q1:むべ〜（む・けむ・らむ・べし）',
    answers: [ 'なるほど〜だろう', 'どうにかして〜たい', 'まさか〜まい', 'まるで〜のようだ'],
    correct: 'なるほど〜だろう'
  },

  {
    question: 'Q2:さだめて〜（む・けむ・らむ・べし）',
    answers: [ 'まさか〜まい', 'きっと〜だろう', 'もしかすると〜だろう', 'ひたすら〜たい'],
    correct: 'きっと〜だろう'
  },

  {
    question: 'Q3:けだし〜（む・けむ・らむ・べし）',
    answers: [ 'きっと〜だろう', 'まるで〜のようだ', 'さあ〜わからない', 'もしかすると〜だろう'],
    correct: 'もしかすると〜だろう'
  },

  {
    question: 'Q4:いつしか〜（む・ばや・もがな・てしがな・にしがな・なむ）',
    answers: [ '早く〜たい', 'ひたすら〜たい', 'どうにかして〜たい', '次第に〜たい'],
    correct: '早く〜たい'
  },

  {
    question: 'Q5:ひとへに〜（む・ばや・もがな・てしがな・にしがな・なむ）',
    answers: [ '当然〜たい', '一度でも〜たい', 'ひたすら〜たい', 'もしかすると〜たい'],
    correct: 'ひたすら〜たい'
  },

  {
    question: 'Q6:よし〜（とも）',
    answers: [ 'たとえ〜ても', 'もし〜ならば', 'たとえてみても', 'どうにかして〜みても'],
    correct: 'たとえ〜ても'
  },
  {
    question: 'Q7:ゆめゆめ〜（な）',
    answers: [ 'さあ〜わからない', '決して〜するな', 'まさか〜まい', 'ゆめにも〜思わない'],
    correct: '決して〜するな'
  },
  {
    question: 'Q8:いさ〜知らず',
    answers: [ 'まさか〜まい', 'ほとんど〜ない', 'まだ〜ない', 'さあ〜わからない'],
    correct: 'さあ〜わからない'
  },
  {
    question: 'Q9:あへて〜（ず・じ・まじ・で）',
    answers: [ 'きっと〜しない', 'まったく〜ない', '決して〜ない・進んでは〜ない', 'わざわざ〜しない・もはや〜ない'],
    correct: '決して〜ない・進んでは〜ない'
  },
  {
    question: 'Q10:をさをさ〜（ず・じ・まじ・で）',
    answers: [ 'ほとんど〜ない', 'まさか〜ない', 'まったく〜ない', '決して〜ない'],
    correct: 'ほとんど〜ない'
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
