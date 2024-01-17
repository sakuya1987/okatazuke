let endText = document.getElementById("end-text");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");
let timePass = document.getElementById("time-pass");
let rest = null;
let targetTime;
let timerI;
let timerT;

startBtn.addEventListener("click", function() {
    this.classList.add("is-hidden");
    resetBtn.classList.add("is-hidden");
    endText.classList.add("is-hidden");
    stopBtn.classList.remove("is-hidden");
    startTimer(rest);
});

stopBtn.addEventListener("click", function() {
  this.classList.add("is-hidden");
  startBtn.classList.remove("is-hidden");
  resetBtn.classList.remove("is-hidden");
  clearInterval(timerI);
  clearInterval(timerT)

});

resetBtn.addEventListener("click", function() {
  this.classList.add("is-hidden");
  startBtn.classList.remove("is-hidden");
  rest = null;
  timePass.innerHTML = "00分00秒";

});

let startTimer = function(rest) {
    let nowTime = new Date();
  if (rest){
        targetTime = nowTime.getTime() + rest;
  }
  else{
    let timerM = Number(document.getElementById("select-min").value);
    let timerS = Number(document.getElementById("select-sec").value);
    rest = (timerM * 60 + timerS) * 1000;
        targetTime = nowTime.getTime() + rest;
  }
    timerI = setInterval(countDown, 1, targetTime);
    timerT = setTimeout(timeUp, rest);
}

let countDown = function(targetTime) {
  let dT = new Date();
  rest = targetTime - dT.getTime();
  let M = Math.floor(rest / 60000);
  let S = Math.floor((rest - M * 60000) / 1000);
  timePass.innerHTML = `${M}分 ${S}秒`;
}

let timeUp = function() {
  clearInterval(timerI);
  stopBtn.classList.add("is-hidden");
  startBtn.classList.remove("is-hidden");
  endText.classList.remove("is-hidden");
  timePass.innerHTML = "00分00秒";
  rest = null;
}