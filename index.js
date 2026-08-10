function calculator() {
    let input;
let operator;
let secInput;
if (operator==="+") {
    result = (input + secInput);
    console.log(result);
}
else if (operator==="-") {
 result = (input - secInput);
  console.log(result);
}
else if (operator==="*") {
    result = (input * secInput);
     console.log(result);
}
else if (operator==="/") {
   result = (input / secInput);
    console.log(result);
}
else if (operator==="%") {
    result = (input % secInput);
     console.log(result);
}
else {
    result= ("invalid operator");
}

}
calculator();

// let again;
// again = prompt("do u want again");
 
// while (again === "yes") {
// calculator();
// break;
// }


let mainFunc = document.querySelectorAll('btn');
//   mainFunc.addEventListener('click', calculator);
mainFunc.forEach(function(button) {
    mainFunc.addEventListener("click", function() {
        console.log("You clicked:", button.textContent);
    });
});