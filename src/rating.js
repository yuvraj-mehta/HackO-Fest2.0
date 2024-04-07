// ratings.js
let currentQuestionIndex = 0;
let set = 0;
let Rating = 0;
const questions = [
  "On a scale of 1-10, how satisfied are you with the promises made by this politician?",
  "How likely are you to recommend this politician to your friends and family?",
  "How well did this politician address the issues in his constituency?",
  "Rate the overall service of this politician in his constituency.",
  "How easy was it for citizens in his constituency to raise any issues to this leader during his/her term?",
  "How likely are you to vote again for this politician?",
  "To what extent did this politician meet your expectation?",
  "How satisfied are you with the work of this politician?",
  "Rate the speed of resolving issues in his/her constituency?",
  "How well did this leader solve your problems?"
];

function rate(num) {
  if (set === 1) {
    document.querySelector('.required-text').innerHTML = "You have already rated, move to next question."
  } else if (set === 0) {
    Rating = Rating + num;
  }
  set = 1;
}

function nextQuestion() {
  if (set === 1) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      document.querySelector('.question').textContent = questions[currentQuestionIndex];
    } else {
      let averageRating = Number(Rating / 10);
      console.log("Average Rating:", Number(averageRating));
      document.querySelector('.question').textContent = `Your average rating of this politician is: ${Number(averageRating)}`;
      document.querySelector('.rating-span').innerHTML = `${Number(averageRating)}`;
      document.querySelector('.ratings').style.display = 'none';
      document.querySelector('.next-button').style.display = 'none';
    }
    set = 0;
    document.querySelector(".required-text").innerHTML = "";
  } else {
    document.querySelector(".required-text").innerHTML = "Please rate this question first.";
  }
}

export { rate, nextQuestion };
