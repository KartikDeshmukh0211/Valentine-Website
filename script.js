const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".container");
const heartsContainer = document.getElementById("hearts");
const hintText = document.getElementById("hintText");
const pic = document.getElementById("valentine-pic");
const text = document.querySelector("h1");
const para = document.querySelector(".container p");
const h1 = document.querySelector("#txt");
const allBtns = document.querySelector(".buttons");
const partnerName = document.querySelector("#name");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get("name");

if (name != null) {
  partnerName.innerText = name;
}

let noBtnClickCount = 0;

const messages = [
  "Are you sure? My heart just skipped a beat.",
  "No? But I already planned our forever.",
  "Every time you click No, a teddy bear cries.",
  "I baked cookies for you... now theyre sad.",
  "I checked the rules of love... No is not an option!",
  "What if I say please... with puppy eyes?",
  "Breaking news: Someone just broke my heart.",
  "Cupid is literally shaking right now.",
  "Even Google says you should click Yes.",
  "No? But I already told my mom about us.",
  "Think of all the cute selfies we could take.",
  "Without you, my playlist is just sad songs.",
  "Clicking No is illegal in 10 countries.",
  "I promise unlimited hugs if you click Yes.",
  "Oops! I think you meant to press Yes.",
  "Every time you say No, a rose loses a petal.",
  "But what about our imaginary future together?",
  "You're making my heart buffer... please reload.",
  "You must be playing hard to get.",
  "Your smile is the only answer I need.",
  "If love had a captcha, you'd be my perfect match.",
  "Even your shadow is whispering Yes right now.",
  "Not even AI can process why you clicked No.",
  "Ill wait... but please dont keep me waiting too long.",
  "Your heart knows the answer… just listen.",
];

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", handleNoClick);
yesBtn.addEventListener("click", celebrate);

function moveButton() {
  if (window.innerWidth > 600) {
    const containerRect = container.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - noBtnRect.width;
    const maxY = containerRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  }
}

function handleNoClick() {
  if (window.innerWidth <= 600) {
    noBtnClickCount++;
    const scale = 1 + noBtnClickCount * 0.1;
    yesBtn.style.transform = `scale(${scale})`;
    hintText.style.display = "block";
    if (noBtnClickCount > 1) {
      hintText.innerText = messages[noBtnClickCount - 2];
    }
  }
}

function celebrate() {
  if (window.innerWidth <= 600) {
    hintText.style.display = "none";
  }
  pic.src = "https://media.tenor.com/SqYXXNI-A4IAAAAi/happy-valentines.gif";
  text.innerText = "Yay! I'm so happy you said yes! ❤️";
  allBtns.innerHTML = "";
  para.classList.add("hide");
  h1.classList.add("hide");
  partnerName.classList.add("hide");
  createHearts();
}

function createHearts() {
  heartsContainer.innerHTML = "";
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.opacity = Math.random();
    heart.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
    heartsContainer.appendChild(heart);
  }
}

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
            @keyframes fall {
                0% { transform: translateY(-100vh); }
                100% { transform: translateY(100vh); }
            }
        `,
  styleSheet.cssRules.length
);
