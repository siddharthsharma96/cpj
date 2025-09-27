let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let valueS = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let msg = document.querySelector(".message");
let Score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let localSCore = 20;
let fun = (para) => {
  // 1. Score =score-1;
  localSCore--;
  // 2. update the score on ui also
  Score.textContent = localSCore;
  // 3. message shpow too low
  msg.textContent = para;
};

checkBtn.addEventListener("click", () => {
  console.log("Button Clicked");
  let inputVaL = Number(valueS.value);

  if (!inputVaL) {
    console.log("No value");
    // show message with no input
    msg.textContent = "No number";
  } else if (inputVaL == randomNumber) {
    console.log("Equal value");
    // operation we ahev to perform
    // 1. Change body color to green
    document.querySelector("body").style.backgroundColor = "green";
    // 2. Show random value instead of ? mark
    number.textContent = randomNumber;
    // 3. show message as correct value
    msg.textContent = "Correct Value";
    // 4. Check highscore value is less than score then update the highscore value
    if (localSCore > highScore.textContent) {
      highScore.textContent = localSCore;
    }
  } else if (inputVaL > randomNumber) {
    console.log("high value");

    fun("Too high");
  } else if (inputVaL < randomNumber) {
    console.log("low value");
    fun("Too Low");
  }
});

againBtn.addEventListener("click", () => {
  // change backgroundColor to black
  document.querySelector("body").style.backgroundColor = "black";
  // Generate random value again
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  // make localScore=20
  localSCore = 20;
  // update the score on the ui
  Score.textContent = localSCore;
  // msg sgould be start Guessing...
  msg.textContent = "Start guessing...";
  //   put ? at the quare box
  number.textContent = "?";
  valueS.textContent = "";
});
