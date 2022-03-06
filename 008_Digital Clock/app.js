let newHour = document.querySelector(".hour");
let newMinutes = document.querySelector(".minute")
let newSecond = document.querySelector(".second")

function clock(){
    let d = new Date();
    let h = d.getHours().toString().padStart(2,"0")
    let m = d.getMinutes().toString().padStart(2,"0")
    let s = d.getSeconds().toString().padStart(2,"0")

    newHour.innerText= h 
    newMinutes.textContent = m
    newSecond.innerText = s
}

setInterval(clock,1000)











