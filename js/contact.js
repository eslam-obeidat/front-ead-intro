
// Swal.fire("SweetAlert2 is working!");

// var contactForm = document.getElementById('contactForm');
// console.log(contactForm);


var contactForm = document.getElementById('contactForm');
var nameForm = document.getElementById('name');
var emailForm = document.getElementById('email');
var subjectForm = document.getElementById('subject'); 


contactForm.addEventListener('submit',function(e){
    // alert('hi eslam')
    e.preventDefault();
    console.log(e);
    
    Swal.fire({
    position: 'center',
    icon: "success",
    title: 'Your name is ' + nameForm.value + 'and your email is ' + emailForm.value + 'and your subject is ' + subjectForm.value ,
    showConfirmButton: false,
    timer: 6000
  });
})



