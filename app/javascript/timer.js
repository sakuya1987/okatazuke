let endText = document.getElementById("end-text");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");

startBtn.addEventListener("click", function() {
    this.classList.add("is-hidden");
    resetBtn.classList.add("is-hidden");
    stopBtn.classList.remove("is-hidden");

});

stopBtn.addEventListener("click", function() {
  this.classList.add("is-hidden");
  startBtn.classList.remove("is-hidden");
  resetBtn.classList.remove("is-hidden");

});

resetBtn.addEventListener("click", function() {
  this.classList.add("is-hidden");
  startBtn.classList.remove("is-hidden");

});