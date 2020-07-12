const quiz = [
  {
    question: 'Q1:あいなし',
    answers: [ 'つまらない', '身分が高い', 'むやみだ', '可愛らしい'],
    correct: 'つまらない'
  }, {
    question: 'Q2:あえか（なり）',
    answers: [ '浮気だ', '華奢だ', '優美だ', '上品だ'],
    correct: '華奢だ'
  }, {
    question: 'Q3:あかなくに',
    answers: [ 'ちょっと', '心配で', 'つまらない', '名残惜しい'],
    correct: '名残惜しい'
  },{
    question: 'Q4: つきづきし',
    answers: [ '新しい', '古い', '調和している、似つかわしい', '身分が高い'],
    correct: '調和している、似つかわしい'
  }, {
    question: 'Q5:興あり',
    answers: [ '面白い', '素晴らしい', '偽り', '不吉だ'],
    correct: '面白い'
  }, {
    question: 'Q6:えならぬ',
    answers: [ '何とも言いようもなく立派な', '得ることができない', 'あってはいけない', 'どうすることもできない'],
    correct: '何とも言いようもなく立派な'
  }, {
    question: 'Q7:昔おぼゆ',
    answers: [ '浮気する', '習慣づく', '幼なじみの', '昔風の'],
    correct: '昔風の'
  }, {
    question: 'Q8:心にくし',
    answers: [ '憎めない', '奥ゆかしい', '憎い', '性格が悪い'],
    correct: '奥ゆかしい'
  }, {
    question: 'Q9:安らかなり',
    answers: [ '病に伏している', '安っぽい', '落ち着きがある', '長生きしている'],
    correct: '落ち着きがある'
  }, {
    question: 'Q10:ことざま',
    answers: [ '物事や人の様子', '昔と変わった様子', '天皇の発言', '世間の動向'],
    correct: '物事や人の様子'
  }, {
    question: 'Q11:なべてならぬ',
    answers: [ '食べてはいけない', '完全ではない', '並べてはいけない', '普通でない'],
    correct: '普通でない'
  }, {
    question: 'Q12:心ばへ',
    answers: [ '気遣い', '心変わり', '心の有り様、性格', '気品'],
    correct: '心の有り様、性格'
  }, {
    question: 'Q13:まぼる',
    answers: [ 'じっと見つめる', 'まごまごする', '幻を見る', '地面を掘る'],
    correct: 'じっと見つめる'
  }, {
    question: 'Q14:心ふかし',
    answers: [ '不快', '思慮深い', '物腰が柔らかい', '平凡な'],
    correct: '思慮深い'
  }, {
    question: 'Q15:いふかひなし',
    answers: [ 'つまらない、たわいもない', '言う方が良い', '愉快', '寂しい'],
    correct: 'つまらない、たわいもない'
  }, {
    question: 'Q16:うるさし',
    answers: [ '不躾だ', '下品だ', '騒ぎだ', '面倒だ'],
    correct: '面倒だ'
  }, {
    question: 'Q17:ばうぞくなり',
    answers: [ '盗賊の', '不作法だ', '治安が悪い', '拘束された'],
    correct: '不作法だ'
  }, {
    question: 'Q18:けしからず',
    answers: [ '興味がない', '何もない', 'よくない', 'けして〜ない'],
    correct: 'よくない'
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
    $window.alert('不正解!');
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
