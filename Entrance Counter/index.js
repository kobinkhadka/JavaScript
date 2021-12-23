

let counter = document.getElementById("count")

let count = 0 

function increment(){
    count += 1

    counter.innerText = count;
}


let displayCount = document.getElementById("counter")

function save(){ 

    let first = count + " - "

    displayCount.textContent += first

    count = 0 

    counter.innerText = count


}

 
 
 






