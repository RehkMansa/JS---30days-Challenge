const value = document.querySelector('#counter');
const buttons = document.querySelectorAll('.btn');
let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let btnID = e.currentTarget.id;
    if (btnID == 'decrease') {
      count--;
    } else if (btnID == 'increase') {
      count++;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = 'hsl(0, 52%, 45%)';
    } else if (count > 0) {
      value.style.color = 'hsl(17, 100%, 57%)';
    } else {
      value.removeAttribute('style');
    }
    value.textContent = count;
  });
});
