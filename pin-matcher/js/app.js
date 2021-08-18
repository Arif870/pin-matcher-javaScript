// random number generate function

function getPinNumber() {
  let randomNumber = Math.round(Math.random() * 10000);
  let fitPin = randomNumber + "";

  let pinLength = fitPin.length;

  if (pinLength == 4) {
    document.getElementById("pin-input").value = fitPin;
  } else {
    return getPinNumber();
  }
}

document.getElementById("generate-button").addEventListener("click", () => {
  getPinNumber();
});

document.getElementById("keyPad").addEventListener("click", e => {
  let pressedKey = e.target.innerText;

  let calValue = document.getElementById("input-values");

  let previousCal = calValue.value;

  let totalCal = previousCal + pressedKey;
  calValue.value = totalCal;

  if (pressedKey == "C") {
    calValue.value = "";
  }
});

function pinCheck() {
  let pin = document.getElementById("pin-input").value;

  let givenPin = document.getElementById("input-values").value;

  if (pin == givenPin) {
    document.getElementById("success").style.display = "block";
    document.getElementById("failed").style.display = "none";
  } else {
    document.getElementById("failed").style.display = "block";
    document.getElementById("success").style.display = "none";
  }
}
