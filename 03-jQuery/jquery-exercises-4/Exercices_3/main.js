 // Write your solution here

let firstName = $("#text_1").val();
let lastName = $("#text_2").val();
let email = $("#text_3").val();
let phoneNumber = $("#text_4").val();

$("form").submit(function(e){
    e.preventDefault();

    firstName = $("#text_1").val();
    lastName = $("#text_2").val();
    email = $("#text_3").val();
    phoneNumber = $("#text_4").val();

    $('.error').remove();

    if (firstName.length < 1) {
    $('#text_1').after('<span class="error">This field is required</span>');
    alert("Field is blank. Submit will be prevented.");
    return false; 
    }
    if (lastName.length < 1) {
    $('#text_2').after('<span class="error">This field is required</span>');
    alert("Field is blank. Submit will be prevented.");
    return false; 
    }
    if (email.length < 1) {
        $('#text_3').after('<span class="error">This field is required</span>');
        alert("Field is blank. Submit will be prevented.");
        return false; 
    }
    else {
        let rgx = /^([a-zA-Z0-9_. -+])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        let validEmail = rgx.test(email);
        
        if (!validEmail) {
            $('#text_3').after('<span class="error">Enter a valid email</span>');
          }
    }
    if (phoneNumber.length < 10) {
        $('#text_4').after('<span class="error">This field is required</span>');
        }  
        else{
        let regEx = /[0-9\-\(\)\s ]+/;
        let validNumber = regEx.test(phoneNumber);
        
        if (!validNumber) {
            $('#text_4').after('<span class="error">Enter a valid phone number</span>')
            alert("Field is blank. Submit will be prevented.");
            return false; 
        }
    }
});




