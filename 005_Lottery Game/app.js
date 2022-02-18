let newBut = document.getElementById("but")
let newResult = document.getElementById("result")


newBut.addEventListener("click", ()=>{
    resultBox = []
    while(resultBox.length<6){
        let randomNumber = Math.trunc(Math.random()*50+1)

        if (resultBox.includes(randomNumber)){
            continue;
        }
        else{
            resultBox.push(randomNumber)
        }
    }
    newResult.innerHTML = resultBox.join(" , ")
})




//  let a = Math.trunc(Math.random()*50+1)

// console.log(a)