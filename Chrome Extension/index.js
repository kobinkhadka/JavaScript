
let myLeads = []

const saveButton = document.getElementById("save-button")
const inputEntered= document.getElementById("input")
const list = document.getElementById('list')
const buyButton = document.getElementById("container")


saveButton.addEventListener("click", function(){

    myLeads.push(inputEntered.value)

    inputEntered.value =''
    
    renderLeads()

})


function renderLeads(){

    let listItems = ""

    for(let i = 0; i < myLeads.length; i++){

    listItems += "<li> <a href='#'>" + myLeads[i] + "</a></li>"

    }

    list.innerHTML = listItems


}



























