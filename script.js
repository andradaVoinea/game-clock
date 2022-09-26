setInterval(setClock, 1000); //we want to call a certain function every second

const hourHand = document.querySelector("[data-hour-hand]");
// how we select our data attribute - which we added in the HTML code
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  //call the current date constructor, it's gonna give you the current time that you run it on
  const secondsRatio = currentDate.getSeconds() / 60; //we divide it by 60 because there's 60 seconds in a minute
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  //we use the secondRatio because we don't want our minutes and hour hands to jump by entire minutes or hours
  //we want them to slowly go through
  //we tell it to move by a percentage of a minute
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  //we add the minutesRatio to getHours
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
//we call it as soon as the page loads, so that the clock starts immediately at the correct time
