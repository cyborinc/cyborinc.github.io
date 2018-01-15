var countDownDate = new Date("Feb 23, 2018 18:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = ("0" + days).slice(-2) + "  :  " + ("0" + hours).slice(-2) + "  :  "
  + ("0" + minutes).slice(-2) + "  :  " + ("0" + seconds).slice(-2);
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Welcome.";
  }
}, 1000);