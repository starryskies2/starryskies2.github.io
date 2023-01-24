/** @format */
// iphone 12 pro max Ios version 16.2
var hour = 00;
var minute = 10;
var seconds = 00;
function login() {
  var Username = document.getElementById("username");
  var Password = document.getElementById("password");
  if (Password.value !== "24" && Username.value !== "Maria") {
    alert(
      "Incorrect username or passwrd please verify them and try again BEFORE THE WORLD ENDS!!!!!",
    );
  } else {
    alert(
      "well done you SAVED THE GODAM WORLD MARIA!!!!!! YOU EARNED YOURSELF ONE TIME BEING EATEN OUR BY YOUR BOYFRIEND ELI",
    );
    changetitle();
    showpics();
  }
}
function changetitle() {
  document.getElementById("h1").innerHTML =
    "WELL DONE YOU SOLVED THE RIDDLE AND SAVED THE WORLD";
  document.body.style.backgroundColor = "pink";
  document.getElementById("h1").style.color = "rgb(147, 255, 212)";
}
function showpics() {
  var y = document.getElementById("bdaypic1");
  y.style.display = "block";
  var c = document.getElementById("bdaypic2");
  c.style.display = "block";
  var x = document.getElementById("nuke");
  x.style.display = "none";
}

function play() {
  var m = document.getElementById("clue");
  var c = prompt("enter your boyfriends name to unlock the next clue");
  if (c == "Elichay") {
    (m.style.display = "none"), (m.style.display = "block");
  } else {
    alert("you dont know your own boyfriend name????");
  }
}

const targetDate = new Date();
targetDate.setMinutes(targetDate.getMinutes() + 10);

function getTimeSegmentElements(segmentElement) {
  const segmentDisplay = segmentElement.querySelector(".segment-display");
  const segmentDisplayTop = segmentDisplay.querySelector(".segment-display__top");
  const segmentDisplayBottom = segmentDisplay.querySelector(".segment-display__bottom");

  const segmentOverlay = segmentDisplay.querySelector(".segment-overlay");
  const segmentOverlayTop = segmentOverlay.querySelector(".segment-overlay__top");
  const segmentOverlayBottom = segmentOverlay.querySelector(".segment-overlay__bottom");

  return {
    segmentDisplayTop,
    segmentDisplayBottom,
    segmentOverlay,
    segmentOverlayTop,
    segmentOverlayBottom,
  };
}

function updateSegmentValues(displayElement, overlayElement, value) {
  displayElement.textContent = value;
  overlayElement.textContent = value;
}

function updateTimeSegment(segmentElement, timeValue) {
  const segmentElements = getTimeSegmentElements(segmentElement);

  if (parseInt(segmentElements.segmentDisplayTop.textContent, 10) === timeValue) {
    return;
  }

  segmentElements.segmentOverlay.classList.add("flip");

  updateSegmentValues(
    segmentElements.segmentDisplayTop,
    segmentElements.segmentOverlayBottom,
    timeValue,
  );

  function finishAnimation() {
    segmentElements.segmentOverlay.classList.remove("flip");
    updateSegmentValues(
      segmentElements.segmentDisplayBottom,
      segmentElements.segmentOverlayTop,
      timeValue,
    );

    this.removeEventListener("animationend", finishAnimation);
  }

  segmentElements.segmentOverlay.addEventListener("animationend", finishAnimation);
}

function updateTimeSection(sectionID, timeValue) {
  const firstNumber = Math.floor(timeValue / 10) || 0;
  const secondNumber = timeValue % 10 || 0;
  const sectionElement = document.getElementById(sectionID);
  const timeSegments = sectionElement.querySelectorAll(".time-segment");

  updateTimeSegment(timeSegments[0], firstNumber);
  updateTimeSegment(timeSegments[1], secondNumber);
}

function getTimeRemaining(targetDateTime) {
  const nowTime = Date.now();
  const complete = nowTime >= targetDateTime;

  if (complete) {
    return {
      complete,
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
  }

  const secondsRemaining = Math.floor((targetDateTime - nowTime) / 1000);
  const hours = Math.floor(secondsRemaining / 60 / 60);
  const minutes = Math.floor(secondsRemaining / 60) - hours * 60;
  const seconds = secondsRemaining % 60;

  return {
    complete,
    seconds,
    minutes,
    hours,
  };
}

function updateAllSegments() {
  const timeRemainingBits = getTimeRemaining(new Date(targetDate).getTime());

  updateTimeSection("seconds", timeRemainingBits.seconds);
  updateTimeSection("minutes", timeRemainingBits.minutes);
  updateTimeSection("hours", timeRemainingBits.hours);

  return timeRemainingBits.complete;
}

const countdownTimer = setInterval(() => {
  const isComplete = updateAllSegments();

  if (isComplete) {
    clearInterval(countdownTimer);
  }
}, 1000);
updateAllSegments();