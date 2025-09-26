



function addNumbers(a, b){
    console.log(a + b)
}

function subtractNumbers(a, b){
    console.log(a - b)
}

addNumbers(4, 2);
subtractNumbers(5, 8)


function displayName(name){
    console.log("good morning " + name)
}

displayName("Victor")

function greet(){
    console.log("Good Morning")
}

greet()






console.log("counter")

let number = 0;
const nCounter = document.getElementById("n-counter")

setInterval(() => {
    number++
    // console.log(number)

    nCounter.textContent = number;

}, 500);

