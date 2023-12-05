// let name= null; //variable declaration
   
// //value assign

// console.log(  1=== 4);  //not equal

//     // if(condition) (your code)                //if else block
//     // else if(condition) (your code)
//     // else if(condition) (your code)
//     // else(code)
//      if(5==4)
//      {
//         console.log("equal");
//         console.log("ab toh hoga run");
//      }else{
//         console.log("not equal");
//      }

// console.log(name)


// let age =26

// if(age >=50)
// {
//     console.log("senior citizen")
// }else if(age>=27){
//     console.log("adult")
// }else{
//     console.log("p");
// }

// let studentmarks = 90;

// if(studentmarks < 92)
// {
//     console.log("A plus grade")
// }else if(studentmarks <=90)
// {
//     console.log("a grade")
// }
// else if(studentmarks >=80)
// {
//     console.log("b grade")
// }
// else if(studentmarks >=70)
// {
//     console.log("c grade")
// }
// else if(studentmarks <=55)
// {
//     console.log("d grade")
// }
// else(studentmarks >33)
// {
//     console.log("fail")
// }

// let x= 5;

// x++;
// x++;
// x++;


// // x=++x*80/2;

// console.log(x);


//for loops

// for(var i=0; i<=20; i+=3) // 1,3,5,7,9 odd num

// {
//     console.log(i);
// }
// let x = 20;
// for(let i=0; i<=x; i++)

// {
//     if(i%3==0)
//     console.log(i, "is a multiple of 3");
// }

//String Method(length,)
// let str = "jain himansh"
// console.log(name.length);
//(slice)

// let nam = "jainhimansh";

// let slicedName = nam.slice(0,1)
// console.log(slicedName);

// let nam = "jainhimansh"
// let substringName =nam.substring(3,9)
// console.log(substringName.length);

//(replace)

// let nam = "jenny";

// let replacedName =nam.replace("e", "x");
// console.log(replacedName);

//replaceAll
// let nam = "jenny";

// let replacedName =nam.replace("n", "x");
// console.log(replacedName);

//uppder case

// let nam = "hima";

// let upperName = nam.toUpperCase();
// console.log(upperName);

//lower case
// let nam = "HIMA";

//  let upperName = nam.toLowerCase();
//  console.log(upperName);

// let nam= "hima";

// let toCheck = "HiMa";

// console.log(nam.includes(toCheck.toLowerCase()));

//trim space
// let nam = "         jainey   ";

// let trimmedName = nam.trim();
// console.log(trimmedName);

// let nam = "jenny";

// let character = nam.charAt(2);
// console.log(character);

//index of
// let nam = "j a een ny";

// let indexofc = nam.indexOf("e");
// console.log(indexofc);

//concat(2 string add)
// let text1 = "jain";
// let text2 = " himanshu";

// let joinedText = text1.concat(text2);
// console.log(joinedText);

// let text1 = "jain";
// let text2 = "himanshu";

// let joinedText =text1+text2;
// console.log(joinedText);

//convert in string
// let x = 789; //or true
// let y = x.toString();

// console.log(typeof y,x);


//NUMBER METHODS   ******

// let x=6.5525482525214;

// let fixedTwODecimalPlaces = x.toFixed(2);
// console.log(fixedTwODecimalPlaces);

// let x=6.5525482525214;
// let flooredvariable = Math.floor(6.55);
// console.log(flooredvariable); //output 6 hi ayga


// let x = -Infinity;

// console.log(x);
// let x = 5;
// let y = "7";
// console.log(x+y); //corecion means data type coverstion automaticlly

//-- when no is sub-- string ==> string convert to number

//- boolean case m true ko 1 bana dega or false ko bana dega 1

//truthey &falsy Values
//all the numbers
//except (0,false,null,undefined, nana (empty string))are truthey values 
//bracket vali false values


//Array
//Array is a list of elements to declared an array we use [] in js , all element are asingned an index same as string


// let students = ["sunny", "manoj", "nitin"];

// let myele = students[1];
// console.log(myele);

//Methods
//1) indexof = arr.indexof(values)==> give the index of particuleer element
//2) length ==> same as string 
//3)

//loops (forEach)
 
// let x =["hima" , "himansh", "jain"];
// x[0] = "jenny";
// console.log(x);

// for(let i=0; i<=5; i++)
// {
//     console.log(i);
// }
// let arr=["hima", "jenny", "himansh"];

// for(i=0; i<=arr.length; i++)
// {
//     arr[i]= "ambedkar";
//  }
//  console.log(arr);


//function in java Script

// function myFunc(){     //this is void function
//     console.log("abc");
// }
// myFunc();   //calling the function

// function add5(input){     //this is void function
//     console.log(input+5);
// }
// add5(4);   //calling the function

// function add5(input){
//     return input+5;
// }
// add5(4);


// mY cALCULETER
// const mycalcu = (input1, input2, todo)=>{
//     let result;
//     if(todo=="add"){
//         result =input1+ input2;
//     }else if (todo == "sub"){
//         result =input1-input2;
//     }else if (todo=="multi"){
//         result=input1*input2;
//     }else if(todo=="div"){
//         result = input1/input2;
//     }else {
//         result = "wrong command";
//     }
//     return result;
// };
//     console.log(mycalcu(8,6, "sub"));

//() =>{} ARROW FUNCTION
