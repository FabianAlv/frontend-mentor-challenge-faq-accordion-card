function onClick(index) {
  const answers = document.getElementsByClassName('card__faq__answer');
  const questions = document.getElementsByClassName('card__faq__question');
  const answer = answers[index];
  const question = questions[index];

  if (answer.classList.contains('card__faq__answer--active')) {
    answer.classList.remove('card__faq__answer--active');
    question.classList.remove('card__faq__question--active');
  } else {
    removeActive();
    answer.classList.add('card__faq__answer--active');
    question.classList.add('card__faq__question--active');
  }
}

function removeActive() {
  const activeAnswer = document.getElementsByClassName('card__faq__answer--active')[0];
  const activeQuestion = document.getElementsByClassName('card__faq__question--active')[0];

  if (activeAnswer) {
    activeAnswer.classList.remove('card__faq__answer--active')
  }

  if (activeQuestion) {
    activeQuestion.classList.remove('card__faq__question--active')
  }
}

function addOnClick() {
  const questions = document.getElementsByClassName('card__faq__question');

  let index = 0;
  for (let question of questions) {
    let index2 = index;
    question.onclick = () => onClick(index2);
    ++index;
  }
}

addOnClick();