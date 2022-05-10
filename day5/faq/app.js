const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', (e) => {
    question.classList.toggle('show');
  });
});
