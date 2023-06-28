// "私のウェブサイトへようこそ"を波紋効果でアニメーションさせる
const title = document.querySelector('h1');
let fontSize = 24;
let isIncreasing = true;

function animateTitle() {
  if (isIncreasing) {
    fontSize += 1;
    if (fontSize >= 36) {
      isIncreasing = false;
    }
  } else {
    fontSize -= 1;
    if (fontSize <= 24) {
      isIncreasing = true;
    }
  }
  
  title.style.fontSize = `${fontSize}px`;
  
  requestAnimationFrame(animateTitle);
}

animateTitle();
