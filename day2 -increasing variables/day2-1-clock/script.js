function showTime() {
  var date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";
  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours -= 12;
    session = "PM";
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let currentTime = hours + " : " + minutes + " : " + seconds + " " + session;
  document.getElementById("clock").innerHTML = currentTime;
}
showTime();

setInterval(showTime, 1000);

let timer = 0;

let stopwatch = document.getElementById(" ");
console.log(stopwatch);
