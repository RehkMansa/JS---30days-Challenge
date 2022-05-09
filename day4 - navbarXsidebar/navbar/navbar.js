const toggleBtn = document.querySelector('.navbar-toggle');
const menuLinks = document.querySelector('.links');
toggleBtn.addEventListener('click', (e) => {
  menuLinks.classList.toggle('hide');
});
