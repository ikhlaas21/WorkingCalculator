// function MyFunction(number){
//     document.querySelector("#display-text").innerHTML += number;
//   }

// function delMyFunction(){
//     document.querySelector("#display-text").innerHTML = document.querySelector("#display-text").innerHTML.slice(0, -1)
//   }

let sum = " ";
function MyFunction(char){
    sum += char;
    document.getElementById("output").innerHTML += char;
}

function calculate() {
    sum = eval(sum);
    document.getElementById("output").innerHTML = sum;
}

function reset(clear) {
    console.log(" ");
    document.getElementById("output").innerHTML = " ";
    sum = " ";
}

function del(){
    document.querySelector("#output").innerHTML = document.querySelector("#output").innerHTML.slice(0, -1)
  }