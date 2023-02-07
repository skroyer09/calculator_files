const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const operator = document.querySelector("#operator");
const calculate = document.querySelector("#calculate");
const results = document.querySelector("#results");
const decimals = document.querySelector("#decimals");
const doRound = document.querySelector("#doround");

calculate.addEventListener("click", function () {
  // We convert the input into floats in order to make them calculatable
  const firstVal = parseFloat(firstNumber.value);
  const secondVal = parseFloat(secondNumber.value);
  let result;
  // switch works better than if statements in this case, as it only loads the option which has been chosen
  // where if statements loads all possible options
  switch (operator.value) {
    case "add":
      result = firstVal + secondVal;
      break;
    case "sub":
      result = firstVal - secondVal;
      break;
    case "mul":
      result = firstVal * secondVal;
      break;
    case "div":
      result = firstVal / secondVal;
      break;
  }
  if (doRound.checked) {
    result = result.toFixed(decimals.value);
  }
  results.innerHTML = `<li>${result}</li>` + results.innerHTML;
  firstNumber.value = result;
});

document.querySelector("#clear").addEventListener("click", function () {
  results.innerHTML = "";
});
