// function add(){
//     document.write(10+20+"<br>")
// }
// function name(){
//     document.write()
// }

// document.getElementById("bt").onclick=()=>{name(),add()}    

// let str ="helloeveryonegoodmorning"
//    document.write(str.indexO('e'))
//    document.write(str.indexOf('every'))
// document.write(str.includes('og'))
// // document.write(str.replace("good", "very good"))
// document.write(str.split('og'))

document.querySelector("p").onmouseover=()=>{document.querySelector("p").style.backgroundColor="Red";}
document.querySelector("p").onmouseout=()=>{document.querySelector("p").style.backgroundColor="white";}

document.querySelector("textarea").onkeyup=(e)=>{
    document.querySelector("p").innerHTML=e.target.value
}
document.querySelector("select").onchange=(e)=>{

    let op=e.target.value
    let num1 = document.querySelector("#box1").value
    let num2 = document.querySelector("#box2").value
    document.write(op)
    document.write(num1)
    document.write(num2)

    switch(op){

        case "+":document.querySelector("p").innerHTML=num1+num2
                         break;
         case "-":document.querySelector("p").innerHTML=num1-num2
                   break;

         case "*":document.querySelector("p").innerHTML=num1*num2
                     break;
         case "/":document.querySelector("p").innerHTML=num1/num2
                     break;
    }
}
document.querySelector("button").onclick=()=>{
    alert("jain")
}
