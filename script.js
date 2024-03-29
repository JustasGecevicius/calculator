const buttons = document.querySelectorAll("button");
const inputField = document.querySelector("input");
const mainRepos = /(\d+)|[\/\*\-\+]/g;
let fullArray;
let displayed = false;

//a function to set up the number grid and add the event listeners to the buttons
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
      elem.classList.add("buttonactive");
      setTimeout(function elemremove() {
        elem.classList.remove("buttonactive");
      }, 100);
    });
    columns++;
  });
}
//initializing the startup sequence
startUp();

// a function to change what is displayed on the screen
function screen(event) {
  //if the = button was pressed launches the calc function
  if (event.target.className == "=") {
    fullArray = inputField.value.match(mainRepos);
    calc();
    return;
  }
  // checks if the answer has been displayed previously if yes, clears the screen and resets the displayed variable
  if (displayed == true) {
    inputField.value = "";
    displayed = false;
  }
  //displays the typed numbers on the screen
  inputField.value = inputField.value + event.target.className;
}

function calc() {
  //two loops to go over the whole array of numbers and arithmetic symbols
  //the first loop goes over the multiplication and division symbols;
  for (let i = 1; i < fullArray.length; i++) {
    if (/\d/.test(fullArray[i - 1]) && /\d/.test(fullArray[i + 1])) {
      if (fullArray[i] == "*") {
        let a = Number(fullArray[i - 1]);
        let b = Number(fullArray[i + 1]);
        multiplication(a, b, i);
        i--;
      } else if (fullArray[i] == "/") {
        let a = Number(fullArray[i - 1]);
        let b = Number(fullArray[i + 1]);
        division(a, b, i);
        i--;
      }
    } else {
      fullArray = ["Error"];
      break;
    }
  }
  //the second loop goes over the addition and subtraction symbols
  for (let i = 1; i < fullArray.length; i++) {
    if (/\d/.test(fullArray[i - 1]) && /\d/.test(fullArray[i + 1])) {
      if (fullArray[i] == "+") {
        let a = Number(fullArray[i - 1]);
        let b = Number(fullArray[i + 1]);
        addition(a, b, i);
        i--;
      } else if (fullArray[i] == "-") {
        let a = Number(fullArray[i - 1]);
        let b = Number(fullArray[i + 1]);
        subtraction(a, b, i);
        i--;
      }
    } else {
      fullArray = ["Error"];
      break;
    }
  }
  inputField.value = fullArray[0];
  displayed = true;
}

//the mathematical functions
function addition(a, b, i) {
  if (typeof a != "number" || typeof b != "number") {
    inputField.value = "ERROR";
    return;
  }
  let x = a + b;
  fullArray.splice(i - 1, 3, x);
}
function subtraction(a, b, i) {
  if (typeof a != "number" || typeof b != "number") {
    inputField.value = "ERROR";
    return;
  }
  let x = a - b;
  fullArray.splice(i - 1, 3, x);
}
function multiplication(a, b, i) {
  console.log(!/\d/.test(b), !/\d/.test(a));
  if (!/\d/.test(a) || !/\d/.test(b)) {
    inputField.value = "ERROR";
    return;
  }
  let x = a * b;
  fullArray.splice(i - 1, 3, x);
}
function division(a, b, i) {
  // console.log(typeof a, typeof b);
  if (typeof a != "number" || typeof b != "number") {
    inputField.value = "ERROR";
    return;
  }
  //console.log("error");
  let x = a / b;
  fullArray.splice(i - 1, 3, x);
}

let buttoneffect = function (e) {
  console.log(e);
};
