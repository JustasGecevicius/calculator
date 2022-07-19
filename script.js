const buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
input.value = "222+100"

function startUp() {
  let columns = 1;
  let rows = 2;
  buttons.forEach((elem) => {
    if (columns == 5) {
      columns = 1;
      rows++;
    }
    elem.style.gridColumn = `${columns}`;
    elem.style.gridRow = `${rows}`;
    elem.addEventListener("click", (e) => {
      screen(e);
    });
    columns++;
  });
}
startUp();

function screen(event) {
  if (event.target.className == "=") {
    calc();
    return;
  }
  console.log(event.target.className);
  let input = document.querySelector("input");
  input.value = input.value + event.target.className;
}
function calc() {

  let repos = /^(\d+)[\/\*\-\+](\d+)$/;
  let symbolRepos = /[\/\*\-\+]/;
  let value = input.value;
  let string = value.match(repos);
  let symbol = string[0].match(symbolRepos);
let a = Number(string[1]);
let b = Number(string[2]);
  switch (symbol[0]) 
  {
    case "+":
      console.log(addition(a, b));
      break;
      case "-":
      console.log(subtraction(a, b));
      break;
      case "*":
      console.log(multiplication(a, b));
      break;
      case "/":
      console.log(division(a, b));
      break;
  }


  input.value = input.value = "";
}
function addition(a, b)
{
  return a + b;
}
function subtraction(a, b)
{
  return a - b;
}
function multiplication(a, b)
{
  return a * b;
}
function division(a, b)
{
  return a / b;
}