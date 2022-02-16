let lowNumber = document.getElementById("palin_input");
let topNumber = document.getElementById("perfect_input");
let newButton = document.getElementById("palin_button");
let perButton = document.getElementById("perfect_button")
let newArea = document.getElementById("palin_area");
let perArea =document.getElementById("perfect_area");


newButton.addEventListener("click", ()=>{
    let palinar = []
    for(let i = +lowNumber.value ; i< +topNumber.value; i++){
         if(i<10){
             palinar.push(i.toString())
         }
         else{
             if(i.toString()[0]==i.toString()[i.toString().length-1]){
                palinar.push(i.toString())
             }
         }
         newArea.textContent = palinar
       }

})

// ---------------------------------------------

perButton.addEventListener("click", ()=>{

    for(let i = topNumber.value; i> +lowNumber.value; i--){
    count = 0;
    for(let p = 1; p <= topNumber.value/2; p++){
        i%p==0 && i!=p ? count+=p:"continue";
        }
        i==count ? perArea.innerHTML+=i +"\n": "continue" ;
      }
    })




