

var nameForm = document.getElementById('form3Example1c');
var emailForm = document.getElementById('form3Example3c');
var passwordForm = document.getElementById('form3Example4c');
var confirmPasswordForm = document.getElementById('form3Example4cd');

regForm.addEventListener('submit',function(e) {
    e.preventDefault();
    if (passwordForm.value!=confirmPasswordForm.value) { 
        Swal.fire ({ 
            position: 'center',
            icon: 'error',
            title: 'Password and Confirm Password are not the same',
            showConfirmButton: false,
            timer: 6000
        });
    }
    else{

        // set data to local storage
        localStorage.setItem( 'name', nameForm.value);
        localStorage.setItem( 'email',emailForm.value);
        localStorage.setItem( 'password',passwordForm.value);

        // get data from local storage
        // delete data from local storage
        // update data in local storage

        Swal.fire({
            position: 'center',
            icon: "success",
            title: 'Your account was created successfully',
            showConfirmButton: false,
            timer: 6000
          });

        }
});