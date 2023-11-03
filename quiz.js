'use strict';

let quizData = [];
let quiz1 = document.getElementById('quiz_1');
let quiz2 = document.getElementById('quiz_2');
let quiz3 = document.getElementById('quiz_3');
let quiz4 = document.getElementById('quiz_4');
let quetion = document.getElementById('quetion');
let quetionLength = 0;
let answer1 = document.getElementById('answer1Cont');
let answer2 = document.getElementById('answer2Cont');
let answer3 = document.getElementById('answer3Cont');
let answer4 = document.getElementById('answer4Cont');
let judge1 = null;
let judge2 = null;
let judge3 = null;
let judge4 = null;
let correct = document.getElementById('correct');
let correctExplanation = document.getElementById('correctExplanation');
let correctCount = 0;
let stats = document.getElementById('stats');
let i = 0;

$(document).ready(function(){
  $.ajax({url: 'quiz.json', dataType: 'json'})
  .done(function(data){
    quizData = data;
    
    // クイズジャンルを入れる処理
    quiz1 = quizData.GameQuiz.QuizName;
    document.getElementById('quiz_1').textContent = quiz1;
    quiz2 = quizData.AnimeQuiz.QuizName;
    document.getElementById('quiz_2').textContent = quiz2;
    quiz3 = quizData.LaSSAQuiz.QuizName;
    document.getElementById('quiz_3').textContent = quiz3;
    quiz4 = quizData.InvestmentQuiz.QuizName;
    document.getElementById('quiz_4').textContent = quiz4;

    // クイズジャンルのボタンを押したあとの処理
    
    /* GameQuiz */
    $('#quiz_1').on('click', function(){

      let setUp1 = document.getElementById('selectQuiz');
      setUp1.classList.add('displayNone');
      setUp1 = document.getElementById('quetionMain');
      setUp1.classList.remove('displayNone');

      quetion = quizData.GameQuiz.Question[i];
      document.getElementById('quetion').textContent = quetion;
      answer1 = quizData.GameQuiz.Answers[i].Answer1;
      document.getElementById('answer1Cont').textContent = answer1;
      judge1 = quizData.GameQuiz.CorrectOrIncorrect[i].COI1;
      document.getElementById('answer1').classList.add(`${judge1}`);
      answer2 = quizData.GameQuiz.Answers[i].Answer2;
      document.getElementById('answer2Cont').textContent = answer2;
      judge2 = quizData.GameQuiz.CorrectOrIncorrect[i].COI2;
      document.getElementById('answer2').classList.add(`${judge2}`);
      answer3 = quizData.GameQuiz.Answers[i].Answer3;
      document.getElementById('answer3Cont').textContent = answer3;
      judge3 = quizData.GameQuiz.CorrectOrIncorrect[i].COI3;
      document.getElementById('answer3').classList.add(`${judge3}`);
      answer4 = quizData.GameQuiz.Answers[i].Answer4;
      document.getElementById('answer4Cont').textContent = answer4;
      judge4 = quizData.GameQuiz.CorrectOrIncorrect[i].COI4;
      document.getElementById('answer4').classList.add(`${judge4}`);

      $('#answerButton').on('click', function(){
        let setUp2 = document.getElementById('quetionMain');
        setUp2.classList.add('displayNone');
        setUp2 = document.getElementById('checkingAnswers');
        setUp2.classList.remove('displayNone');

        // とってきたラジオボタンにcorrectがあるか判定する関数
        let chooseButton = document.querySelector('[name="answerButtons"]:checked');
        if (chooseButton.classList.contains('Correct') === true) {
          document.getElementById('JudgeZone').textContent = '○　正解です';
          correctCount += 1;
        } else {
          document.getElementById('JudgeZone').textContent = '×　不正解です';
        }

        document.getElementById('correct').textContent = `答えは　${quizData.GameQuiz.AnswerCorrect[i]}`;
        document.getElementById('correctExplanation').textContent = quizData.GameQuiz.AnswerExplanation[i];
      });
      $('#nextbutton').on('click', function(){

        judge1 = quizData.GameQuiz.CorrectOrIncorrect[i].COI1;
        document.getElementById('answer1').classList.remove(`${judge1}`);
        judge2 = quizData.GameQuiz.CorrectOrIncorrect[i].COI2;
        document.getElementById('answer2').classList.remove(`${judge2}`);
        judge3 = quizData.GameQuiz.CorrectOrIncorrect[i].COI3;
        document.getElementById('answer3').classList.remove(`${judge3}`);
        judge4 = quizData.GameQuiz.CorrectOrIncorrect[i].COI4;
        document.getElementById('answer4').classList.remove(`${judge4}`);

        let setUp3 = document.getElementById('checkingAnswers');
        setUp3.classList.add('displayNone');
        setUp3 = document.getElementById('quetionMain');
        setUp3.classList.remove('displayNone');

        quetionLength = quizData.GameQuiz.Question.length;
        i += 1;

        if (i < quetionLength) {
          quetion = quizData.GameQuiz.Question[i];
          document.getElementById('quetion').textContent = quetion;
          quetionLength = quizData.GameQuiz.Question.length;
          answer1 = quizData.GameQuiz.Answers[i].Answer1;
          document.getElementById('answer1Cont').textContent = answer1;
          judge1 = quizData.GameQuiz.CorrectOrIncorrect[i].COI1;
          document.getElementById('answer1').classList.add(`${judge1}`);
          answer2 = quizData.GameQuiz.Answers[i].Answer2;
          document.getElementById('answer2Cont').textContent = answer2;
          judge2 = quizData.GameQuiz.CorrectOrIncorrect[i].COI2;
          document.getElementById('answer2').classList.add(`${judge2}`);
          answer3 = quizData.GameQuiz.Answers[i].Answer3;
          document.getElementById('answer3Cont').textContent = answer3;
          judge3 = quizData.GameQuiz.CorrectOrIncorrect[i].COI3;
          document.getElementById('answer3').classList.add(`${judge3}`);
          answer4 = quizData.GameQuiz.Answers[i].Answer4;
          document.getElementById('answer4Cont').textContent = answer4;
          judge4 = quizData.GameQuiz.CorrectOrIncorrect[i].COI4;
          document.getElementById('answer4').classList.add(`${judge4}`);
        } else {
          let setUp4 = document.getElementById('checkingAnswers');
          setUp4.classList.add('displayNone');
          setUp4 = document.getElementById('quetionMain');
          setUp4.classList.add('displayNone');
          setUp4 = document.getElementById('endDisplay');
          setUp4.classList.remove('displayNone');

          document.getElementById('stats').textContent = `${correctCount}問/${quetionLength}問中`;
        }
      });
      // 最終画面からトップページに戻る時の処理
      $('#retrunToTop').on('click', function(){

        location.reload();
      });
    });

    /* AnimeQuiz */
    $('#quiz_2').on('click', function(){

      let setUp1 = document.getElementById('selectQuiz');
      setUp1.classList.add('displayNone');
      setUp1 = document.getElementById('quetionMain');
      setUp1.classList.remove('displayNone');

      quetion = quizData.AnimeQuiz.Question[i];
      document.getElementById('quetion').textContent = quetion;
      answer1 = quizData.AnimeQuiz.Answers[i].Answer1;
      document.getElementById('answer1Cont').textContent = answer1;
      judge1 = quizData.AnimeQuiz.CorrectOrIncorrect[i].COI1;
      document.getElementById('answer1').classList.add(`${judge1}`);
      answer2 = quizData.AnimeQuiz.Answers[i].Answer2;
      document.getElementById('answer2Cont').textContent = answer2;
      judge2 = quizData.AnimeQuiz.CorrectOrIncorrect[i].COI2;
      document.getElementById('answer2').classList.add(`${judge2}`);
      answer3 = quizData.AnimeQuiz.Answers[i].Answer3;
      document.getElementById('answer3Cont').textContent = answer3;
      judge3 = quizData.AnimeQuiz.CorrectOrIncorrect[i].COI3;
      document.getElementById('answer3').classList.add(`${judge3}`);
      answer4 = quizData.AnimeQuiz.Answers[i].Answer4;
      document.getElementById('answer4Cont').textContent = answer4;
      judge4 = quizData.AnimeQuiz.CorrectOrIncorrect[i].COI4;
      document.getElementById('answer4').classList.add(`${judge4}`);

      $('#answerButton').on('click', function(){
        let setUp2 = document.getElementById('quetionMain');
        setUp2.classList.add('displayNone');
        setUp2 = document.getElementById('checkingAnswers');
        setUp2.classList.remove('displayNone');

        // とってきたラジオボタンにcorrectがあるか判定する関数
        let chooseButton = document.querySelector('[name="answerButtons"]:checked');
        if (chooseButton.classList.contains('Correct') === true) {
          document.getElementById('JudgeZone').textContent = '○　正解です';
          correctCount += 1;
        } else {
          document.getElementById('JudgeZone').textContent = '×　不正解です';
        }

        document.getElementById('correct').textContent = `答えは　${quizData.AnimeQuiz.AnswerCorrect[i]}`;
        document.getElementById('correctExplanation').textContent = quizData.AnimeQuiz.AnswerExplanation[i];
      });
      $('#nextbutton').on('click', function(){

        judge1 = quizData.AnimeQuiz.CorrectOrIncorrect[i].COI1;
        document.getElementById('answer1').classList.remove(`${judge1}`);
        judge2 = quizData.AnimeQuiz.CorrectOrIncorrect[i].COI2;
        document.getElementById('answer2').classList.remove(`${judge2}`);
        judge3 = quizData.AnimeQuiz.CorrectOrIncorrect[i].COI3;
        document.getElementById('answer3').classList.remove(`${judge3}`);
        judge4 = quizData.AnimeQuiz.CorrectOrIncorrect[i].COI4;
        document.getElementById('answer4').classList.remove(`${judge4}`);

        let setUp3 = document.getElementById('checkingAnswers');
        setUp3.classList.add('displayNone');
        setUp3 = document.getElementById('quetionMain');
        setUp3.classList.remove('displayNone');

        quetionLength = quizData.AnimeQuiz.Question.length;
        i += 1;

        if (i < quetionLength) {
          quetion = quizData.AnimeQuiz.Question[i];
          document.getElementById('quetion').textContent = quetion;
          quetionLength = quizData.AnimeQuiz.Question.length;
          answer1 = quizData.AnimeQuiz.Answers[i].Answer1;
          document.getElementById('answer1Cont').textContent = answer1;
          judge1 = quizData.AnimeQuiz.CorrectOrIncorrect[i].COI1;
          document.getElementById('answer1').classList.add(`${judge1}`);
          answer2 = quizData.AnimeQuiz.Answers[i].Answer2;
          document.getElementById('answer2Cont').textContent = answer2;
          judge2 = quizData.AnimeQuiz.CorrectOrIncorrect[i].COI2;
          document.getElementById('answer2').classList.add(`${judge2}`);
          answer3 = quizData.AnimeQuiz.Answers[i].Answer3;
          document.getElementById('answer3Cont').textContent = answer3;
          judge3 = quizData.AnimeQuiz.CorrectOrIncorrect[i].COI3;
          document.getElementById('answer3').classList.add(`${judge3}`);
          answer4 = quizData.AnimeQuiz.Answers[i].Answer4;
          document.getElementById('answer4Cont').textContent = answer4;
          judge4 = quizData.AnimeQuiz.CorrectOrIncorrect[i].COI4;
          document.getElementById('answer4').classList.add(`${judge4}`);
        } else {
          let setUp4 = document.getElementById('checkingAnswers');
          setUp4.classList.add('displayNone');
          setUp4 = document.getElementById('quetionMain');
          setUp4.classList.add('displayNone');
          setUp4 = document.getElementById('endDisplay');
          setUp4.classList.remove('displayNone');

          document.getElementById('stats').textContent = `${correctCount}問/${quetionLength}問中`;
        }
      });
      // 最終画面からトップページに戻る時の処理
      $('#retrunToTop').on('click', function(){

        location.reload();
      });
    });

    /* LaSSAQuiz */
    $('#quiz_3').on('click', function(){

      let setUp1 = document.getElementById('selectQuiz');
      setUp1.classList.add('displayNone');
      setUp1 = document.getElementById('quetionMain');
      setUp1.classList.remove('displayNone');

      quetion = quizData.LaSSAQuiz.Question[i];
      document.getElementById('quetion').textContent = quetion;
      answer1 = quizData.LaSSAQuiz.Answers[i].Answer1;
      document.getElementById('answer1Cont').textContent = answer1;
      judge1 = quizData.LaSSAQuiz.CorrectOrIncorrect[i].COI1;
      document.getElementById('answer1').classList.add(`${judge1}`);
      answer2 = quizData.LaSSAQuiz.Answers[i].Answer2;
      document.getElementById('answer2Cont').textContent = answer2;
      judge2 = quizData.LaSSAQuiz.CorrectOrIncorrect[i].COI2;
      document.getElementById('answer2').classList.add(`${judge2}`);
      answer3 = quizData.LaSSAQuiz.Answers[i].Answer3;
      document.getElementById('answer3Cont').textContent = answer3;
      judge3 = quizData.LaSSAQuiz.CorrectOrIncorrect[i].COI3;
      document.getElementById('answer3').classList.add(`${judge3}`);
      answer4 = quizData.LaSSAQuiz.Answers[i].Answer4;
      document.getElementById('answer4Cont').textContent = answer4;
      judge4 = quizData.LaSSAQuiz.CorrectOrIncorrect[i].COI4;
      document.getElementById('answer4').classList.add(`${judge4}`);

      $('#answerButton').on('click', function(){
        let setUp2 = document.getElementById('quetionMain');
        setUp2.classList.add('displayNone');
        setUp2 = document.getElementById('checkingAnswers');
        setUp2.classList.remove('displayNone');

        // とってきたラジオボタンにcorrectがあるか判定する関数
        let chooseButton = document.querySelector('[name="answerButtons"]:checked');
        if (chooseButton.classList.contains('Correct') === true) {
          document.getElementById('JudgeZone').textContent = '○　正解です';
          correctCount += 1;
        } else {
          document.getElementById('JudgeZone').textContent = '×　不正解です';
        }

        document.getElementById('correct').textContent = `答えは　${quizData.LaSSAQuiz.AnswerCorrect[i]}`;
        document.getElementById('correctExplanation').textContent = quizData.LaSSAQuiz.AnswerExplanation[i];
      });
      $('#nextbutton').on('click', function(){

        judge1 = quizData.LaSSAQuiz.CorrectOrIncorrect[i].COI1;
        document.getElementById('answer1').classList.remove(`${judge1}`);
        judge2 = quizData.LaSSAQuiz.CorrectOrIncorrect[i].COI2;
        document.getElementById('answer2').classList.remove(`${judge2}`);
        judge3 = quizData.LaSSAQuiz.CorrectOrIncorrect[i].COI3;
        document.getElementById('answer3').classList.remove(`${judge3}`);
        judge4 = quizData.LaSSAQuiz.CorrectOrIncorrect[i].COI4;
        document.getElementById('answer4').classList.remove(`${judge4}`);

        let setUp3 = document.getElementById('checkingAnswers');
        setUp3.classList.add('displayNone');
        setUp3 = document.getElementById('quetionMain');
        setUp3.classList.remove('displayNone');

        quetionLength = quizData.LaSSAQuiz.Question.length;
        i += 1;

        if (i < quetionLength) {
          quetion = quizData.LaSSAQuiz.Question[i];
          document.getElementById('quetion').textContent = quetion;
          quetionLength = quizData.LaSSAQuiz.Question.length;
          answer1 = quizData.LaSSAQuiz.Answers[i].Answer1;
          document.getElementById('answer1Cont').textContent = answer1;
          judge1 = quizData.LaSSAQuiz.CorrectOrIncorrect[i].COI1;
          document.getElementById('answer1').classList.add(`${judge1}`);
          answer2 = quizData.LaSSAQuiz.Answers[i].Answer2;
          document.getElementById('answer2Cont').textContent = answer2;
          judge2 = quizData.LaSSAQuiz.CorrectOrIncorrect[i].COI2;
          document.getElementById('answer2').classList.add(`${judge2}`);
          answer3 = quizData.LaSSAQuiz.Answers[i].Answer3;
          document.getElementById('answer3Cont').textContent = answer3;
          judge3 = quizData.LaSSAQuiz.CorrectOrIncorrect[i].COI3;
          document.getElementById('answer3').classList.add(`${judge3}`);
          answer4 = quizData.LaSSAQuiz.Answers[i].Answer4;
          document.getElementById('answer4Cont').textContent = answer4;
          judge4 = quizData.LaSSAQuiz.CorrectOrIncorrect[i].COI4;
          document.getElementById('answer4').classList.add(`${judge4}`);
        } else {
          let setUp4 = document.getElementById('checkingAnswers');
          setUp4.classList.add('displayNone');
          setUp4 = document.getElementById('quetionMain');
          setUp4.classList.add('displayNone');
          setUp4 = document.getElementById('endDisplay');
          setUp4.classList.remove('displayNone');

          document.getElementById('stats').textContent = `${correctCount}問/${quetionLength}問中`;
        }
      });
      // 最終画面からトップページに戻る時の処理
      $('#retrunToTop').on('click', function(){

        location.reload();
      });
    });

    /* InvestmentQuiz */
    $('#quiz_4').on('click', function(){

      let setUp1 = document.getElementById('selectQuiz');
      setUp1.classList.add('displayNone');
      setUp1 = document.getElementById('quetionMain');
      setUp1.classList.remove('displayNone');

      quetion = quizData.InvestmentQuiz.Question[i];
      document.getElementById('quetion').textContent = quetion;
      answer1 = quizData.InvestmentQuiz.Answers[i].Answer1;
      document.getElementById('answer1Cont').textContent = answer1;
      judge1 = quizData.InvestmentQuiz.CorrectOrIncorrect[i].COI1;
      document.getElementById('answer1').classList.add(`${judge1}`);
      answer2 = quizData.InvestmentQuiz.Answers[i].Answer2;
      document.getElementById('answer2Cont').textContent = answer2;
      judge2 = quizData.InvestmentQuiz.CorrectOrIncorrect[i].COI2;
      document.getElementById('answer2').classList.add(`${judge2}`);
      answer3 = quizData.InvestmentQuiz.Answers[i].Answer3;
      document.getElementById('answer3Cont').textContent = answer3;
      judge3 = quizData.InvestmentQuiz.CorrectOrIncorrect[i].COI3;
      document.getElementById('answer3').classList.add(`${judge3}`);
      answer4 = quizData.InvestmentQuiz.Answers[i].Answer4;
      document.getElementById('answer4Cont').textContent = answer4;
      judge4 = quizData.InvestmentQuiz.CorrectOrIncorrect[i].COI4;
      document.getElementById('answer4').classList.add(`${judge4}`);

      $('#answerButton').on('click', function(){
        let setUp2 = document.getElementById('quetionMain');
        setUp2.classList.add('displayNone');
        setUp2 = document.getElementById('checkingAnswers');
        setUp2.classList.remove('displayNone');

        // とってきたラジオボタンにcorrectがあるか判定する関数
        let chooseButton = document.querySelector('[name="answerButtons"]:checked');
        if (chooseButton.classList.contains('Correct') === true) {
          document.getElementById('JudgeZone').textContent = '○　正解です';
          correctCount += 1;
        } else {
          document.getElementById('JudgeZone').textContent = '×　不正解です';
        }

        document.getElementById('correct').textContent = `答えは　${quizData.InvestmentQuiz.AnswerCorrect[i]}`;
        document.getElementById('correctExplanation').textContent = quizData.InvestmentQuiz.AnswerExplanation[i];
      });
      $('#nextbutton').on('click', function(){

        judge1 = quizData.InvestmentQuiz.CorrectOrIncorrect[i].COI1;
        document.getElementById('answer1').classList.remove(`${judge1}`);
        judge2 = quizData.InvestmentQuiz.CorrectOrIncorrect[i].COI2;
        document.getElementById('answer2').classList.remove(`${judge2}`);
        judge3 = quizData.InvestmentQuiz.CorrectOrIncorrect[i].COI3;
        document.getElementById('answer3').classList.remove(`${judge3}`);
        judge4 = quizData.InvestmentQuiz.CorrectOrIncorrect[i].COI4;
        document.getElementById('answer4').classList.remove(`${judge4}`);

        let setUp3 = document.getElementById('checkingAnswers');
        setUp3.classList.add('displayNone');
        setUp3 = document.getElementById('quetionMain');
        setUp3.classList.remove('displayNone');

        quetionLength = quizData.InvestmentQuiz.Question.length;
        i += 1;

        if (i < quetionLength) {
          quetion = quizData.InvestmentQuiz.Question[i];
          document.getElementById('quetion').textContent = quetion;
          quetionLength = quizData.InvestmentQuiz.Question.length;
          answer1 = quizData.InvestmentQuiz.Answers[i].Answer1;
          document.getElementById('answer1Cont').textContent = answer1;
          judge1 = quizData.InvestmentQuiz.CorrectOrIncorrect[i].COI1;
          document.getElementById('answer1').classList.add(`${judge1}`);
          answer2 = quizData.InvestmentQuiz.Answers[i].Answer2;
          document.getElementById('answer2Cont').textContent = answer2;
          judge2 = quizData.InvestmentQuiz.CorrectOrIncorrect[i].COI2;
          document.getElementById('answer2').classList.add(`${judge2}`);
          answer3 = quizData.InvestmentQuiz.Answers[i].Answer3;
          document.getElementById('answer3Cont').textContent = answer3;
          judge3 = quizData.InvestmentQuiz.CorrectOrIncorrect[i].COI3;
          document.getElementById('answer3').classList.add(`${judge3}`);
          answer4 = quizData.InvestmentQuiz.Answers[i].Answer4;
          document.getElementById('answer4Cont').textContent = answer4;
          judge4 = quizData.InvestmentQuiz.CorrectOrIncorrect[i].COI4;
          document.getElementById('answer4').classList.add(`${judge4}`);
        } else {
          let setUp4 = document.getElementById('checkingAnswers');
          setUp4.classList.add('displayNone');
          setUp4 = document.getElementById('quetionMain');
          setUp4.classList.add('displayNone');
          setUp4 = document.getElementById('endDisplay');
          setUp4.classList.remove('displayNone');

          document.getElementById('stats').textContent = `${correctCount}問/${quetionLength}問中`;
        }
      });
      // 最終画面からトップページに戻る時の処理
      $('#retrunToTop').on('click', function(){

        location.reload();
      });
    });

    /************↓この間に新しいクイズジャンルを入れる↓**************/


    /************↑この間に新しいクイズジャンルを入れる↑**************/
  
  })
  .fail(function(){
    console.log('読み込みエラー');
  });
});
