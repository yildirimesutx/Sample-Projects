let newNumber = document.getElementById("palin_input");
let newButton = document.getElementById("palin_button");
let newArea = document.getElementById("palin_area");

newButton.addEventListener("click", ()=> {

    let p = newNumber.value
    let t = 0

    for(let i = 0; i< p){
    let t = console(i)
       t +=i
       newArea.innerHTML= t
    }
})


