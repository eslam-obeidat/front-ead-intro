var loginForm = document.getElementById('loginForm');
var emailForm = document.getElementById('form2Example1');
var passwordForm = document.getElementById('form2Example2');


loginForm.addEventListener('submit',function(e) {
    e.preventDefault();

    let isLogin=false;
    let usersData = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    for(let  i = 0 ;i< usersData.length;i++){
        if(emailForm.value == usersData[i]['email'] && passwordForm.value == usersData[i]['password']){
            localStorage.setItem('email',usersData[i]['email']);
            localStorage.setItem('password',usersData[i]['password']);
            localStorage.setItem('name',usersData[i]['name']);
            alert('Your are logged in successfully ');
            
                    //   window.location = "../index.html";
                    location.replace("../index.html");
                    isLogin = false;
                return;
            }
            else{
                isLogin = true;
            }
        }
        

        if(isLogin){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Your email or password is wrong', 
                showConfirmButton: false,
                timer: 6000
            });
        }
        
    });
    // if (emailForm.value == localStorage.getItem('email') && passwordForm.value == localStorage.getItem('password')) {
    //     Swal.fire ({ 
    //         position: 'center',
    //         icon: 'success',
    //         title: 'Your are logged in successfully',
    //         showConfirmButton: false,
    //         timer: 6000
    //     });

    //                    // To move from page to page
                       
    //     window.location ="../index.html";
    //     // location.replace(../index.html");
    // }
    // else {
    //     Swal.fire ({ 
    //         position: 'center',
    //         icon: 'error',
    //         title: 'Your email or password is wrong',
    //         showConfirmButton: false,
    //         timer: 6000

    //     });

        
    // }
// });