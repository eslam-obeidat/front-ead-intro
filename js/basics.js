// alert("Hi Eslam")



function myFunction() {

    let x = 4
    let y = 6

    document.getElementById("demo").innerHTML = x + y ;
    // document.getElementById("demo").innerHTML = "Paragraph changed.";
}



// how to declare a variable in javascript
// var, let, const
// what is var??

// var is a keyword which is used to declare a variable in javascript

var a = 10;
var c = ' Hello World';
// console.log(a);

// console.log('hellow i am js from contact page') 



// what is let ??
// let is a keyword which is used to declare a variable in javascript

let b = 20;
b = 30
console.log(b);


// what is const ??

// const is a keyword which is used to declare a variable in javascript

const d = 30;
 console.log(d);



// what is the difference between var, let and const ??

// var and let both are same bul the difference is var is a global variable and let is a local variable
 
// const is a variable which value is not changeable

// what is the data type in js ??

// string, number, boolean, object, undefined, nuly


// what is the string ??

// string is a data type which is used to store a string value

var test = 'hellow world'; 
console.log(test); 

// what is the number ??

// number is a datatype which is used to store a number value

var test1 = 10;
console.log(test1);

// what is the boolean ??

// boolean is a data type which is used to store a true or false value

var test2 = true;
console.log(test2);


// what is the object ??

// object is a data type which is used to store a object value

var test3 ={
    // key: value

name: 'hellow',

age: 20,

address: 'dhaka'
}
console.log(test3);


// intro to js

// syntax
// data types
// variables
// conditionals
// loops
// functions

// 1. syntax

// 2. data types

// string> contain text,num, symbols, spaces, etc but it must be in quotes
// number> contain numbers
// number > int float, double
// boolean> true, false
// array> collection of data > can contain any data type [data, data, data] index > 0,1,2,3,4,5,6,7,8,9
// object> collection of data > can contain any data type (keytvalue, key:value, key: value)
// null> empty> the variable is empty
// undefined> the variable is not defined
// NaN> not a number

// 3. variables

// var > global scope
// var name = Value;

// let > local scope
// let name = Value;

// const local scope
// const name = Value;

        var name = "ahmed";
        var age1 = '40';
                    // propertise : parseInt : To convert the variable to int
        var newAge = parseInt(age1);
        console.log(typeof(newAge));
        console.log(age1);
        let age = 20;
        const isMarried = false;
        const salary = 1000.5;
        const skills = ["html", "css", "js"];
        
        var person = {
        
             name: "ahmad",
             age: 25,
             isMarried: true,
             salary: 1500.5,
             skills: ["html", "css", "js"]
             }

        console.log(typeof(name),'name:',name);
        console.log(typeof(age),'age:',age);
        console.log(typeof(isMarried),'isMarried:',isMarried);
        console.log(typeof(salary),'salary:',salary);
        console.log(typeof(skills),'skills:',skills);


// 4. conditionals

// 2 condetions if true > do something
// else do something else

// if (condition) {
//        // do something

// } else {
//       //do something else

var x = 10;
var y = 20;

if (x > y ){
    console.log ('x is greater than y');
}

else {
    console.log ('x is less than y');
}

var x = 30;
var y = 20;

if (x > y ){
    console.log ('x is greater than y');
    // alert ('x is greater than y');
}

else {
    console.log ('x is less than y');
    // alert ('x is less than y');
}

// 5. loops

// for loop
// while loop
// do while loop

// loop > repeat something code for many times
// for loop > repeat something code for many times > for (start; end; step)
// start > the start point for the loop
// end > the end point for the loop
// step > the step for the loop
// for (start; end; step) {  
    //        //de something
// }

// operations > + , - , * , / , % , ++ , --

// x ++ > x = x + 1
// x -- > x = x - 1
// x += 5 > x = x + 5
// x -= 5 > x = x - 5
// ++x > x = x + 1
// = , == , === , > , < , >= , <= , != , !== 

        // = :  Assign or attribute a new value   
        // == : comparison ( compare the value, not data type) ( check the value only)
        // === : comparison (check the value and the data type)
        // != : not equle ( check the value only)
        // !== : not equle  (check the value and the data type)


var x = 20

        // console.log(x++);
        console.log(++x);
        console.log(x);
        console.log(++x);

// for loop
    for (var i=0; i<10; i++){ 
        console.log(i);
    } 

    for (var i=0; i<10; i++){ 
        if ( i == 8) {
            continue;       // continue : do skip or delete
        }
        console.log(i);
    } 
    for (var i=0; i<10; i++){ 
        if ( i == 5) {
            break;       // break : the function is to break the loop 
        }
        console.log(i);
    } 


var newSrt = "10";   //string
var newNum = 10 ;   //number
        console.log(newSrt == newNum );

var newSrt = "10";   //string
var newNum = 10 ;   //number
        console.log(newSrt === newNum );        


// while loop > repeat something code for many times while (condition)

// while (condition) {
    //        //dksomething
// }

var x = 60 

while (x < 100){
    console.log(x);
    x++;
}

do {
console.log(x);
x++;
}
while (x < 100);
 