// alert("Hi Eslam") 

             //==================//
            // changeBackground //
           //==================//

var body = document.getElementsByTagName('body');

// console.log(body[0]);
// console.log(body[0].style.backgroundColor);

             //==================//
            // changeBackground //
           //==================//

// function changeBackground(){

// // alert('Hello from Button'); 
// body[0].style.backgroundColor='red';
// }

function changeBackground() {

    if(body[0].style.backgroundColor=='red'){
        body[0].style.backgroundColor= 'silver';
    
    }else
    body[0].style.backgroundColor='red';
    }

    var userName = document.getElementById("userName"); 
    userName.innerHTML = localStorage.getItem("name");    




    var loginOrOut = document.getElementById("loginOrOut"); 



    if (localStorage.getItem('name') != null) {
     loginOrOut.innerHTML='logout';
    }

    else{
        alert('you are not a user please login'); 
        location.replace('../pages/login.html');
    }