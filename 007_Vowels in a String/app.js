let newText = document.getElementById("text");
let newButton = document.getElementById("button");
let newResult = document.getElementById("result");


newButton.addEventListener("click", ()=>{
    let sesli = ["a","e","i","ı","o","ö","u","ü"]
    counter = 0
    let b = newText.value

    console.log(b.toString().indexOf("a"))

    for(let i=0 ; i< b.length ; i++){
        if(0<b.toString().indexOf(sesli[i])){
            counter++;
        }
         
    else{
        return 
    }

}

    newResult.innerHTML= counter

})

// let s = ["a","e","i"]
// let t = ["Lorem ipsum dolor sit amet"]

// console.log(t.toString().indexOf(s[0]));


