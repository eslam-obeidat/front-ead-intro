
            // propertise : innerHTML : Fetch the text inside the html tag
            // propertise : textContant : Bring the text inside the content

var footer = document.getElementById('footerP').innerHTML ;
console.log(footer);


var footer = document.getElementById('footerP');
console.log(footer);
footer.innerHTML = "Hello fram js";
footer.style.color ="red";


//tke the input from the form which the class name for this form
//is userInput and when i submit the form ikwant to take the value
// of the input and put it in the hi tag which the class name is myName

// 1. take the form
// 2. take the input
// 3. take the value of the input
// 4. put the value in the h1 tag

var myForm = document.getElementsByClassName('userInput')[0]
var myInput = document.getElementsByClassName('input')[0] 
var myName = document.getElementsByClassName('myName')[0]


// event in js
// event is action that happen when the user do something
// eventlistner: is a function that wait for the event to happen 

// 1.click
// 2. mouseover
// 3.mouseout
// 4.keyup
// 5.keydown
// 6.keypress
// 7.submit
// 8.change
// 9.load
// 10.scroll

myForm.addEventListener('submit', function(e) { 

            // propertise : e.preventDefault : And her guest: After I send you the input, do not reload and leave the page in the state it is currently in
    e.preventDefault() 
    console.log(e)

    myName.innerHTML = myInput.value
    myInput.value = ""
    myName.style.color = "red"
    myName.style.fontWeight = "bold"
    myName.style.fontFamily = "arial"
    myName.style.textAlign = "center"
})
    // take 2 input from the from called sumation and when submit the form  
    // i want to take the value of the 2 input and put the result in thep tag the class is result 


    var myForm2 = document.getElementsByClassName('sumation')[0]
    var myInput1 = document.getElementById('num1')
    var myInput2 = document.getElementById('num2')
    var myResult = document.getElementsByClassName('result')[0]
    
    myForm2.addEventListener('submit', function(e){
        e.preventDefault() 
        console.log (e)
    
    myResult.innerHTML = parseInt(myInput1.value) + parseInt(myInput2.value)

    myInput1.value = ""
    myInput2.value = ""
    myResult.style.color = "red"
    myResult.style.fontweight = "bold"
    myResult.style.fontFamily = "arial"
    myResult.style.textAlign = "center"
    
    }) 

    