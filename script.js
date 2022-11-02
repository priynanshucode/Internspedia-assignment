var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

    function validatename(){
        var name = document.getElementById('contact-name').value;

        if (name.length == 0){
            nameError.innerHTML = 'Name is required';
            return false;
        }
        if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            nameError.innerHTML='write full mame';
            return false;
        }
        nameError.innerHTML = 'valid';
        return true;
        

        

    }
    function validatephone(){
        var phone = document.getElementById('contact-phone').value;
        if(phone.length == 0){
            phoneError.innerHTML = 'phone is required';
            return false;
        }
        if (phone.length !== 10){
            phoneError.innerHTML ='phone no. should be 10 digit';
            return false;
        }
        if(!phone.match(/^[0-9]{10}$/)){
            phoneError.innerHTML ='Phone no is requied';
            return false;
        }
        phoneError.innerHTML = 'Valid';
        return true;
    }

function validateEmail(){
        var email = document.getElementById('contact-email').value;

        if(email.length == 0){
            emailError.innerHTML = 'Email is required';
            return false;
        }
        if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailError.innerHTML = 'Email is not valid';
            return false;
        }
        emailError.innerHTML = 'valid';
        return true;
    }
    

   function  validatemessage(){
        var message = document.getElementById('contact-message').value;
        var required = 30;
        var left = required - message.length;
        if(left > 0){
            messageError.innerHTML = left + 'more character required';
            return false;
        }
        messageError.innerHTML = 'valid'
        return true;




    }
    function validateform(){
        if(!validatename() || !validatephone() || !validateEmail() || !validatemessage()){
            submitError.style.display = 'Block';
            submitError.innerHTML = 'Fix all error to Submit';
            setTimeout(function(){submitError.innerHTML = 'None'},3000);
            return false;
        }
        
    }
        

    