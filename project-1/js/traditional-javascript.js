// document object model

const form = document.getElementById('form');
const Username = document.getElementById('Username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const Password2 = document.getElementById('Confirm-Password');

function ShowError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    small = formControl.querySelector('small');
    small.innerText = message;
    
}
function showSuccess(input,message){
    const formControl = input.parentElement;
    formControl.className ="form-control success";
}

function isEmailValid(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(Username.value == ''){
        ShowError(Username,'Username required');
    }else{
        showSuccess(Username)
    }
    if(Email.value == ''){
        ShowError(Email,'Email required');
    }else if (!isEmailValid(Email.value)){
        ShowError(Email,'Email not valid');
    
    }else{
        showSuccess(Email)
    }
    if(Password.value == ''){
        ShowError(Password,'Password  required');
    }else{
        showSuccess(Password)
    }
    if(Password2.value == ''){
        ShowError(Password2,'Password required');
    }else{
        showSuccess(Password2)
    }
})
