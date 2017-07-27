var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function tick() {

var currTime = new Date();

document.getElementById("header").innerHTML =
  days[currTime.getDay()] +
  " " +
  months[currTime.getMonth()] +
  " " +
  currTime.getDate() +
  " " +
  currTime.getHours() +
  ":" +
  currTime.getMinutes();
}

var secondCheck = setInterval(tick, 1000);