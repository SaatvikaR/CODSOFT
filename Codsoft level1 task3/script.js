const display = document.getElementById("display");

function displayFunc(value) {
  if (value =="=") {
    try {
      display.value = eval(display.value);
    } catch (err) {
      display.value = "Error";
    }
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}