function email() {
    let a = prompt("enter your email please")
    let b = a.indexOf("@")
    let c = a.indexOf(".")
    let d = a.indexOf(".")+4;
    if ( b>0 & c>0 & a.length <=d){
        console.log("true mail")
    }
    else{
        console.log("false mail try again")
    }
}

email()




// let a = "clarusway@gmail.com";
// let b = a.indexOf("@")
// let c = a.indexOf(".")
// let d = a.indexOf(".")+3;




// console.log(d);
// console.log(c);
