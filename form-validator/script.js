const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const re_password = document.getElementById('re-password');

function showError(input, message){
    input.className = "form-control is-invalid"
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback"
    
    
}

function showSuccess(input){
    input.className = "form-control is-valid"
    const div = input.nextElementSibling;
    div.innerText = "Başarılı";
    div.className = "valid-feedback"
}

// Source - https://stackoverflow.com/a
// Posted by John Rutherford, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-09, License - CC BY-SA 4.0

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function checkEmail(input){
    if(!validateEmail(input.value)){
        showError(input, 'Email geçersiz hmm');
    } else {
        showSuccess(input);
    }
}

function checkRequired(inputs){
    inputs.forEach(function(input){

    if(input.value.trim() === ''){
        showError(input, `${input.id.toUpperCase()} gerekli`);
    } else {
        showSuccess(input);
    }

    });
}

function checkLength(input, min, max){
    
    if(input.value.length < min){
        showError(input, `${input.id.toUpperCase()} en az ${min} karakter olmalı`);
    } else if(input.value.length > max){
        showError(input, `${input.id.toUpperCase()} en fazla ${max} karakter olmalı`);
    } else {
        showSuccess(input);
    }

}

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Parolalar eşleşmiyor');
    } 
}

function checkPhone(input){

    const exp = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

    if(!exp.test(input.value)){
        showError(input, 'Geçersiz telefon numarası');
    }else {
        showSuccess(input);
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, re_password, phone ]);
    checkEmail(email);
    checkLength(username, 3, 15);
    checkLength(password, 3, 15);
    checkLength(re_password, 3, 15);
    checkPasswordsMatch(password, re_password);
    checkPhone(phone);


});