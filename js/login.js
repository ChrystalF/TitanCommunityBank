var validateEntries = function(event) {
    'use strict';
    event.preventDefault(); // Prevent the default form submission behavior

    var isValid = true;
    var loginForm = document.getElementById('loginForm');
    var emailAddress = document.getElementById('emailAddress').value;
    var password = document.getElementById('password').value;
    var storedEmail = getCookie('email');
    var storedPassword = getCookie('password');
    var loginHeader = document.getElementById('loginHeader');
    var msg = 'Email address and/or password do not match. Please try again.';
    var header = '';
    
    if (emailAddress !== storedEmail || password !== storedPassword) {
        header = msg;
        isValid = false;
    } 

    loginHeader.firstChild.nodeValue = header;

    if (isValid) {
        document.cookie = 'password=' + encodeURIComponent(password) + '; path=/; SameSite=None; Secure';
        if (loginForm) { // Check if loginForm is not null before submitting
            loginForm.submit();
        }
    }
};

function init() {
    'use strict';
    if (document && document.getElementById) {
        var loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', validateEntries);  
    }
}

document.addEventListener('DOMContentLoaded', init);

// Function to retrieve cookie value by name
function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return decodeURIComponent(match[2]);
    }
    return '';
}