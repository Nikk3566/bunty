const openButton = document.getElementById('openButton');
const loveLetter = document.getElementById('loveLetter');
const giftCard = document.querySelector('.gift-card');

openButton.addEventListener('click', () => {
  giftCard.classList.add('opened');
  loveLetter.classList.remove('hidden');
  openButton.textContent = 'दिल से स्वीकार करो';
});

const animateGift = () => {
  giftCard.style.transform = 'rotateX(15deg) rotateY(10deg) translateY(-8px)';
  setTimeout(() => {
    giftCard.style.transform = '';
  }, 2200);
};

setInterval(animateGift, 4200);
