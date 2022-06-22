const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      display.innerText = display.innerText.substr(
        0,
        display.innerText.length - 1
      );
    } else if (item.id == "equal" && display.innerText != "") {
      display.innerText = eval(display.innerText);
      display.innerText = parseFloat(display.innerText.toFixed(2));
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Zero equals zero :)";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});
