"use strict";

var virus = document.querySelector('.virus');
var audio = document.querySelector('audio');
var randomNumber;

var randomizer = function randomizer() {
  randomNumber = Math.round(Math.random() * 5) + 1;
};

var sayMyName = function sayMyName() {
  virus.classList.toggle('shake');
  virus.addEventListener('animationend', function () {
    virus.classList.remove('shake');
  });
  randomizer();
  audio.src = "./audio/".concat(randomNumber, ".mp3");

  if (audio.currentTime !== 0) {
    audio.load();
  }

  audio.play();
};

virus.addEventListener('click', sayMyName);