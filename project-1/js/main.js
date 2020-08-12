// document object model

const form = document.getElementById('form');
const Username = document.getElementById('Username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const Password2 = document.getElementById('Confirm-Password');

function ShowError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}
function showSuccess(input,message){
    const formControl = input.parentElement;
    formControl.className ="form-control success";
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    if(Username.value == ''){
        ShowError(Username,'username required');
    }else{
        showSuccess(Username)
    }
    if(Email.value == ''){
        ShowError(Email,'username required');
    }else{
        showSuccess(Email)
    }
    if(Password.value == ''){
        ShowError(Password,'username required');
    }else{
        showSuccess(Password)
    }
    if(Password2.value == ''){
        ShowError(Password2,'username required');
    }else{
        showSuccess(Password2)
    }
})
