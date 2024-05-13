var validateEntries = function(event) {
    'use strict';

    var isValid = false; // Set isValid to false initially
    var emailAddress = document.getElementById('emailAddress').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var msg = 'This field is required.';
    var passwordMsg = 'The password entries do not match. Please try again.';
    var header = '';
    
    var registrationHeader = document.getElementById('registrationHeader');
    var registrationForm = document.getElementById('registrationForm');

    // Check for empty fields
    if (!emailAddress || !password || !confirmPassword) {
        header = msg;
    } else if (password !== confirmPassword) { // Check if passwords match
        header = passwordMsg;
    } else {
        isValid = true; // Set isValid to true only if all validations pass
    }
    
    // Update the header with the message
    registrationHeader.firstChild.nodeValue = header;
    
    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    } else { 
        // Set session cookies only if all validations pass
        document.cookie = 'email=' + encodeURIComponent(emailAddress) + '; path=/';
        document.cookie = 'password=' + encodeURIComponent(password) + '; path=/';
        // Submit the form
        registrationForm.submit();
    }
};

function init() {
    'use strict';
    if (document && document.getElementById) {
        var registrationForm = document.getElementById('registrationForm');
        registrationForm.addEventListener('submit', validateEntries);  
    }
};

document.addEventListener('DOMContentLoaded', init);