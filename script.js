const buttons = document.querySelectorAll("button");


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
    elem.addEventListener("click", (e) => {screen(e);})
    columns++;
  });
}
startUp();

function screen(event){

    if(event.target.className == "=")
    {
        calc();
        return;
    }
console.log(event.target.className)
let input = document.querySelector("input");
input.value = input.value + event.target.className;

}
function calc()
{   
    
    console.log("zeba")
    let input = document.querySelector("input");
input.value = input.value = "";
}


