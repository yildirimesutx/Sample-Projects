let newNumber = document.getElementById("number");
let lowNumber = document.getElementById("low_number");
let uppNumber = document.getElementById("upp_number");

let newButton = document.getElementById("button");
let newResult = document.getElementById("result");

newButton.addEventListener("click", ()=>{
  let counter = 0;
  let list = [] ;
  let news ;

  let n = +newNumber.value;
  let l = +lowNumber.value;
  let u = +uppNumber.value;

  if(0<n && 0<l && l<u){
      for(let i = l; i<u ; i++){
        news = i
        if(news.toString().includes(n)){
            counter++;
            if(news.toString()[0]==n && news.toString()[1]==n){
                counter++;
            }
            list.push(i);
        }

      }
      
  }else{
      return -1;
  }

  newResult.innerHTML = list.length

})


// function countDigit(digits,low,high){
//     let counter = 0;
//     let myArray = [];
//     let news ;
//     if(0<digits && 0<low && low<high){
//         for(let i = low;i<=high;i++){
//             news = i
//             if(news.toString().includes(digits)){
//                 counter++;
//                 if(news.toString()[0]==digits && news.toString()[1]==digits){
//                     counter++;
//                 }
//                 myArray.push(i);
//             }
//         }
//     }else{
//         return -1;
//     }
//     return `${counter}\n${myArray}`;
    
// }
// console.log(countDigit(2,10,23));


// let list = [0,1,2,3,4,5,6,7,8]

// console.log(list.length)


