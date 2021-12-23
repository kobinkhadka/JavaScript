
 //Render error message in paragraph element when button is clicked 
let renderMessage = document.getElementById('error'); 

function displayError(){ 

    renderMessage.innerText = "Something Went Wrong Plz try again G"


}

///Calculator

let num1 = 8 
let num2 = 2 


let answer = document.getElementById('answer')

function add()  { 
     
     answer.textContent = num1 + num2 

    }

function subtract() { 
   
    answer.textContent = num1- num2
}

function multiply() { 
    answer.textContent  = num1 * num2
}

function division() { 
    answer.textContent = num1/num2
}















