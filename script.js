
const music = document.getElementById('Musik');
const muteButton = document.getElementById('muteButton');


muteButton.addEventListener('click', function () {

  music.muted = !music.muted;


  if (music.muted) {
    muteButton.textContent = 'Unmute';
  } else {
    muteButton.textContent = 'Mute';
  }

});

var countDownDate = new Date("Dec 24, 2026 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("Countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Countdown").innerHTML = "EXPIRED";
  }
}, 1000);

const snowflakes = ["❄", "❅", "❆"];

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";

  snowflake.textContent =
    snowflakes[Math.floor(Math.random() * snowflakes.length)];

  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
  snowflake.style.opacity = Math.random();
  snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

setInterval(createSnowflake, 200);


