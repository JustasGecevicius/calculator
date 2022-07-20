const buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
input.value = "222+100*3+100/2-22";
const mainRepos = /(\d+)|[\/\*\-\+]/g;
let value = input.value;
let fullString = value.match(mainRepos);

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

  for(let i = 0; i < fullString.length; i++)
  {
    console.log(i);
    if(fullString[i] == "*")
    {
      let a = Number(fullString[i - 1]);
      let b = Number(fullString[i + 1]);
      multiplication(a, b, i);
      i--;
    }
    else if(fullString[i] == "/")
    {
      let a = Number(fullString[i - 1]);
      let b = Number(fullString[i + 1]);
      division(a, b, i);
      i--;
    }
  }
  for(let i = 0; i < fullString.length; i++)
  {
    if(fullString[i] == "+")
    {
      let a = Number(fullString[i - 1]);
      let b = Number(fullString[i + 1]);
      console.log("+");
      addition(a, b, i);
      i--;
    }
    else if(fullString[i] == "-")
    {
      let a = Number(fullString[i - 1]);
      let b = Number(fullString[i + 1]);
      subtraction(a, b, i);
      i--;
    }
  }



  input.value = input.value = "";
}
function addition(a, b, i)
{
  let x = a + b;  
  fullString.splice(i - 1, 3, x);
  console.log(fullString);
}
function subtraction(a, b, i)
{
  let x = a - b;  
  fullString.splice(i - 1, 3, x);
  console.log(fullString);
}
function multiplication(a, b, i)
{
  let x = a * b;  
  fullString.splice(i - 1, 3, x);
  console.log(fullString);
}
function division(a, b, i)
{
  let x = a / b;  
  fullString.splice(i - 1, 3, x);
  console.log(fullString);
}