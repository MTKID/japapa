const quiz = [
  {
    question: '朝鮮半島の気候を、北部南部それぞれあげよ',
    answers: [ 'わかる', 'わからない', ],
    correct: '北部はDw,南部はCfa'
  }, {
    question: '韓国で、1970年に農村人口が都市への人口流入のため減少したため、農村開発のために起きた運動をなんというか',
    answers: [ 'わかる', 'わからない', ],
    correct: 'セマウル運動'
  }, {
    question: '近年の韓国で、日本への野菜等の輸出のためにメジャーな農業は何か',
    answers: [ 'わかる', 'わからない', ],
    correct: '園芸農業'
  }, {
    question: '１９７０年、韓国で財閥が牽引したことで高度経済成長が成長したことをなんというか',
    answers: [ 'わかる', 'わからない', ],
    correct: '漢江の奇跡'
  }, {
    question: '韓国は１９９６年に何に加盟した？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'OECD(経済協力開発機構)'
  }, {
    question: 'アジア諸国で経済が停滞しIMFが援助した事案を？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'アジア通貨危機'
  }, {
    question: '朝鮮半島はおおよそがどんな地形？また半島西側の海岸はどのようになっているか',
    answers: [ 'わかる', 'わからない', ],
    correct: '安定陸塊で西側はリアス海岸'
  }, {
    question: '韓国で盛んなアニメやテレビドラマといった産業をなんというか',
    answers: [ 'わかる', 'わからない', ],
    correct: 'コンテンツ産業'
  }, {
    question: '中国の対外開発政策のうちの１つで、ハイテク技術とかを集めた経済技術開発区を３つあげよ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'シャンハイ、ターリェン、チョンチン'
  }, {
    question: '中国で、外国資本や技術の導入のために設けた経済特区５つをあげよ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'アモイ、スワトウ、シェンチェン、チューハイ、ハイナン'
  }, {
    question: '中国で、沿岸部と内陸部の格差是正のため行われている開発をなんという？',
    answers: [ 'わかる', 'わからない', ],
    correct: '西部大開発'
  }, {
    question: 'チンハイ省とチベット省を結ぶ鉄道をなんという？',
    answers: [ 'わかる', 'わからない', ],
    correct: '青蔵鉄道'
  }, {
    question: '内モンゴル自治区で取り入れられている発電方法は？',
    answers: [ 'わかる', 'わからない', ],
    correct: '風力発電'
  }, {
    question: '中国は発電量が世界何位？',
    answers: [ 'わかる', 'わからない', ],
    correct: '一位'
  }, {
    question: '２００９年にできたダムで、様々なメリットデメリットを抱えているらしい中国の有名なダムは？',
    answers: [ 'わかる', 'わからない', ],
    correct: '三峡ダム'
  }, {
    question: '鉄鉱石を多く輸入し、また鉄鋼を多く輸出しているアジアの国３つあげよ',
    answers: [ 'わかる', 'わからない', ],
    correct: '中国、韓国、それと日本'
  }, {
    question: '日本のエビ輸入元',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ベトナム、インド、インドネシア'
  }, {
    question: '中国のODA支出のうち、そこでよく取れる銅を狙ったもので１９６０sから始まった有名なものはどこへのものか。',
    answers: [ 'わかる', 'わからない', ],
    correct: 'タンザニア'
  }, {
    question: '中国の一国二制度は、中国本体が社会主義体制であるのに対して資本主義を認めているが、２つある特別行政区をそれぞれあげよ。',
    answers: [ 'わかる', 'わからない', ],
    correct: '香港とマカオ'
  }, {
    question: '東南アジアで、緩衝国としてどこの植民地でもなかった国は？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'タイ'
  }, {
    question: '東南アジアの国で、旧宗主国がフランスなのはどこ？３か国です。',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ベトナム、ラオス、カンボジア'
  }, {
    question: '東南アジアの国で旧宗主国がイギリスなのはどこ？４か国です。',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ミャンマー、シンガポール、マレーシア、ブルネイ'
  }, {
    question: '東南アジアの国で、旧宗主国がオランダなのはどこ？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'インドネシア'
  }, {
    question: '東南アジアの国で、旧宗主国がスペインからアメリカに移った国はどこ？またその国宗教をどうぞ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'フィリピンでカトリック'
  }, {
    question: 'イスラム教を信仰している東南アジアの国を３つどうぞ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'インドネシア、ブルネイ、マレーシア'
  }, {
    question: '大乗仏教を信仰している東南アジアの国をどうぞ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ベトナム'
  }, {
    question: '上座仏教を進行している東南アジアの国をどうぞ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ミャンマー、タイ、ラオス、カンボジア'
  }, {
    question: 'ベトナムで、社会主義を維持しながら市場経済化と対外経済かを進める政策は？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ドイモイ'
  }, {
    question: 'シンガポールが行った、日本を参考にした経済政策は？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ルックイースト政策'
  }, {
    question: 'マラッカ海峡は浅すぎてタンカーが通れませんが、どこなら通れますか？ちなみに、バリ島のすぐ東にあります。',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ロンボク海峡'
  }, {
    question: '東南アジアの河川で、河口が三角州で稲作が盛んなことで有名なもの３つどうぞ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'メコン川、チャオプラヤ川、エーヤワディー川'
  }, {
    question: '東南アジア諸国はWWⅡ後、輸入指向型から輸出指向型に転向し、何を設置しましたか',
    answers: [ 'わかる', 'わからない', ],
    correct: '輸出加工区'
  }, {
    question: '東南アジアは基本的に熱帯だが、ところにより高山気候や温帯が存在する。理由は？',
    answers: [ 'わかる', 'わからない', ],
    correct: '新規造山帯に位置し、標高が高いから'
  }, {
    question: '夏季に温まり安いのは大陸と海のどちらで、風の向きを答えなさい',
    answers: [ 'わかる', 'わからない', ],
    correct: '大陸で、海→大陸に吹く。冬は逆。'
  }, {
    question: 'インド南部でICTが盛んなところはどこか',
    answers: [ 'わかる', 'わからない', ],
    correct: 'バンガロール'
  }, {
    question: '多々財閥が作ったインド初の製鉄所で、ダモダル炭田やシングブーム鉄山が隣接するのはどこにあるか',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ジャムシェドプル'
  }, {
    question: 'インドで植民地時代に盛んだった工業は？',
    answers: [ 'わかる', 'わからない', ],
    correct: '綿工業'
  }, {
    question: 'インドで植民地から解放後採用した、市場経済と計画経済を混ぜた体制をなんというか',
    answers: [ 'わかる', 'わからない', ],
    correct: '混合経済体制'
  }, {
    question: '混合経済体制により国際競争力が低下したインドで１９８０年代から統制の緩和を行ってきたが、１９９１年からは市場を解放した。その後は車作ったりしてる。',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ごめんなさいこれ問題じゃありません'
  }, {
    question: '夏のモンスーンのために降水が見られる沿岸部とヒンドスタン周辺ではどんな農業を行っているか',
    answers: [ 'わかる', 'わからない', ],
    correct: '稲作'
  }, {
    question: '年降水量が１０００mm以下の地域では小麦を作っているが特に有名な地方はどこか',
    answers: [ 'わかる', 'わからない', ],
    correct: 'パンジャブ地方'
  }, {
    question: '小麦、世界ランキング３位までどうぞ',
    answers: [ 'わかる', 'わからない', ],
    correct: '中国、インド、ロシア'
  }, {
    question: 'レグール土で有名なデカン高原は主に何を作っている？',
    answers: [ 'わかる', 'わからない', ],
    correct: '綿花や落花生'
  }, {
    question: '綿花、世界ランキング４位までどうぞ！',
    answers: [ 'わかる', 'わからない', ],
    correct: 'インド、中国、アメリカ、パキスタン'
  }, {
    question: '白い革命といえば乳製品ですがバター作っている世界ランキング、３位までどうぞ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'インド、アメリカ、パキスタン'
  }, {
    question: '牛乳も３位までどうぞ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'アメリカ、インド、中国'
  }, {
    question: 'スリランカは何教？',
    answers: [ 'わかる', 'わからない', ],
    correct: '仏教'
  }, {
    question: 'パキスタンとバングラディッシュは何教？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'イスラーム教'
  }, {
    question: 'スリランカで８割を占める民族は？また残りの少数民族もどうぞ',
    answers: [ 'わかる', 'わからない', ],
    correct: '多いのがシンハラ、少ないのがタミル人'
  }, {
    question: '寒いところは何小麦？',
    answers: [ 'わかる', 'わからない', ],
    correct: '春小麦'
  }, {
    question: 'アムダリア川、シムダリア川から過度な取水を行ったことで湖の流量が減少して枯渇した湖の名前は',
    answers: [ 'わかる', 'わからない', ],
    correct: 'アラル海'
  }, {
    question: '塩類が地表に集積し、耕作不能になったことを',
    answers: [ 'わかる', 'わからない', ],
    correct: '塩害'
  }, {
    question: 'イランでは水を引くために作った地下水路をカナートと呼びますが、アフガニスタンではカレーズですが、アフリカではなんと呼びますか？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'フォガラ'
  }, {
    question: 'シャブロン（米）エクソンモービル（米）ロイヤル・ダッチ・シェル（英・蘭）等が、化石燃料における利益を独占したことをなんという',
    answers: [ 'わかる', 'わからない', ],
    correct: '国際石油資本（メジャー）'
  }, {
    question: '国際石油資本（メジャー）に対して産油国が起こした行動を？',
    answers: [ 'わかる', 'わからない', ],
    correct: '資源ナショナリズム'
  }, {
    question: '１９８０−１９８８年にわたってシャトルアラブ川の領有を巡って起きた戦争は？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'イラン・イラク戦争'
  }, {
    question: 'フセイン政権が大量破壊景気を持ってる疑惑で米・英・豪が侵攻した戦争を？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'イラク戦争'
  }, {
    question: 'トルコ・イラン・シリア・イランにまたがる山岳地帯（クルディスタン）に住んでる人たちが独立したくて騒いでる問題は？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'クルド人独立問題'
  },{
    question: 'パレスチナ人の暫定自治区を二箇所どうぞ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ガザ地区、ヨルダン川西岸地区'
  }, {
    question: '１９c半ば、ユダヤ人が国家再建のために起こした運動を？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'シオニズム運動'
  },{
    question: '１９４８年、イスラエルが建国を宣言したために周辺のアラブ諸国と起こした戦争は？',
    answers: [ 'わかる', 'わからない', ],
    correct: '中東戦争'
  }, {
    question: '白金の生産がトップの国',
    answers: [ 'わかる', 'わからない', ],
    correct: '南アフリカ'
  },{
    question: 'ダイヤといえば？３つどうぞ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ロシア、ボツワナ、コンゴ（民）'
  }, {
    question: 'カザフスタンは何の埋蔵が盛んですか。主に２つどうぞ。',
    answers: [ 'わかる', 'わからない', ],
    correct: 'レアメタル。ウラン鉱は世界一'
  },{
    question: 'ウズベキスタンで取れる資源で有名なものを２つ',
    answers: [ 'わかる', 'わからない', ],
    correct: '金鉱、天然ガス'
  }, {
    question: 'キルギスでよく取れるものを３つ',
    answers: [ 'わかる', 'わからない', ],
    correct: '金、水銀、アンチモン鉱'
  },{
    question: 'ザンベジ川の近くにあるCuがよく取れるとこ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'カリバダム'
  },{
    question: 'エジプトで広範囲の灌漑農業ができるのはナイル川流域にある何のおかげか',
    answers: [ 'わかる', 'わからない', ],
    correct: 'アスワンハイダム'
  },{
    question: '北アフリカは何語？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'アラビア語'
  },{
    question: 'エチオピアは何語？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'アムハラ語'
  },{
    question: 'ウガンダ、ケニアは何語？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'スワヒリ語'
  },{
    question: '奴隷貿易で有名な３国',
    answers: [ 'わかる', 'わからない', ],
    correct: 'トーゴ、ベナン、ナイジェリア'
  },{
    question: 'エチオピアの宗教は何？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'キリスト教のコプト派'
  },{
    question: '少数で牧畜民のツチ族と、多数で農民族のフツ族の争いは？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ルワンダ内戦'
  },{
    question: 'ナイジェリアでおきた、イボ族（キリスト教）VSハウサ族（イスラム教）VSヨルバ族（キリスト教）でポートハーコート油田（ニジェール川の三角州）も絡んだ内戦は？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ビアフラ紛争'
  },{
    question: 'ナイジェリアの首都は',
    answers: [ 'わかる', 'わからない', ],
    correct: 'アブジャ'
  },{
    question: '１９９１年から始まって、今も実質無政府状態のやつ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ソマリア内戦'
  },{
    question: 'アラブ系のスーダン政府VS非アラブ系諸民族の争いで、２０１１年南スーダンが独立したやつ',
    answers: [ 'わかる', 'わからない', ],
    correct: 'ダルフール紛争'
  },{
    question: 'アメリカから独立した、アフリカで二番目に独立した国は？',
    answers: [ 'わかる', 'わからない', ],
    correct: 'リベリア'
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
