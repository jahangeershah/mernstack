// document object model

const form = document.getElementById('form');
const Username = document.getElementById('Username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const Password2 = document.getElementById('Confirm-Password');


// if something went wrong then run this function
function ShowError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    small = formControl.querySelector('small');
    small.innerText = message;
    
}
// if every function successfully runs then run this function 
function showSuccess(input,message){
    const formControl = input.parentElement;
    formControl.className ="form-control success";
}
// email validation function
function isEmailValid(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function getFieldId(input){
    return  input.id.charAt([0]).toUpperCase() + input.id.slice(1);
}
// checking all fields if empty
function fieldCheckRequired(inputArray){
    inputArray.forEach(function (input) {
        if(input.value==''){
            console.log(input.id);
            // ShowError(input,input.id + 'is required') ;
             ShowError(input,`${getFieldId(input)}` + ' is required') ;
        }else{
            showSuccess(input);
        }  
    })
}
// checking if password is equal to confirm password
function  checkPassMatch(input1,input2){
    if(input1.value === input2.value ){
        showSuccess(input2)
    }else{
        ShowError(input2,'password Not matched');
    }
}
// checking length of the field with maximum value and minum value.
function checkLength(input,min,max){
    if(input.value.length< min){
        ShowError(input,`${getFieldId(input)} is required atleast ${min} long`);
    }else if (input.value.length > max){
        ShowError(input, `maximum ${max}  required` );
    }else{
        showSuccess(input);
    }
}
// form validation process with all the given functions
form.addEventListener('submit',function(e){
    e.preventDefault();
    fieldCheckRequired([Username,Email,Password,Password2]);
    checkLength(Username,3,10);
    checkLength(Password,3,12);
    checkPassMatch(Password,Password2);
})
