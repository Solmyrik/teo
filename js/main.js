function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

const faqItem = document.querySelectorAll('.answer__label');
faqItem.forEach((e) => {
  e.addEventListener('click', feqHandler);
});
function feqHandler(e) {
  console.log(e.currentTarget);
  e.preventDefault();
  currentContent = e.currentTarget.nextElementSibling;
  e.currentTarget.classList.toggle('active');
  if (e.currentTarget.classList.contains('active')) {
    currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
  } else {
    currentContent.style.maxHeight = 0;
  }
}
