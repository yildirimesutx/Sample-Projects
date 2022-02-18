let newText = document.getElementById("text");
let newButton = document.getElementById("button");
let newResult = document.getElementById("result");


let sesli = "aeiıoöuü";
let counter = 0;

newButton.addEventListener("click", ()=>{
    
  
    let b = newText.value.toLowerCase();

    // console.log(b.toString().indexOf("a"))

    for(let i=0 ; i< b.length ; i++){
        if(sesli.includes(b[i])){
            counter++;   
        }       
    }
    newResult.innerHTML= counter
})

// let s = ["a","e","i"]
// let t = ["Lorem ipsum dolor sit amet"]

// console.log(t.toString().indexOf(s[0]));

// let sesli = ["a","e","i","ı","o","ö","u","ü"]
