let numberOne = document.getElementById("number_one");
let newOperator = document.getElementById("operator");
let numberTwo = document.getElementById("number_two");

let newButtun = document.getElementById("calcu");
let newResult = document.getElementById("result");


newButtun.addEventListener("click", ()=>{

    let a = numberOne.value;
    let b = numberTwo.value;
    
     if (newOperator.value == "+"){
         let resulte = (+a) + (+b);
         newResult.innerHTML = resulte
     }
     else if (newOperator.value == "-"){
        let resulte = (+a) - (+b);
        newResult.innerHTML = resulte
     } 
     else if (newOperator.value == "/"){
        let resulte = (+a) / (+b);
        newResult.innerHTML = resulte
     } 
     else if (newOperator.value == "*"){
        let resulte = (+a)* (+b);
        newResult.innerHTML = resulte
     }

    
     else{
        alert("invalid entry");
    }

    

})





