"use strick";
//'🎉 Số đúng!'\
//'⛔️ Không có số!'
let score = 5;
let hightCore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function displayScore(score) {
  document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔️ Không có số!");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    displayMessage("🎉 Đoán đúng rồi!");
    if (score > hightCore) {
      console.log("áđss");
      hightCore = score;
      document.querySelector(".highscore").textContent = hightCore;
    }
  } else {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage("Số đoán quá cao!")
        : displayMessage("Số đoán quá thấp!");
      score--;
    } else {
      displayMessage("Thua rồi huhu!");
      score = 0;
    }
    displayScore(score);
  }
});

document.querySelector(".again").addEventListener("click", function (ev) {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("bất đầu đoán...!");
  displayScore(score);
  document.querySelector("body").style.backgroundColor = "";
  document.querySelector(".number").style.width = "";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  console.log(secretNumber);
});
