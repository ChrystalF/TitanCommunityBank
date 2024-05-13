var resetPassword = function(event) {
    'use strict';
    event.preventDefault(); // Prevent form submission by default

    var isValid = true;
    var resetPasswordForm = document.getElementById('resetPasswordForm');
    var password = document.getElementById('password').value;
    var newPassword = document.getElementById('newPassword').value;
    var emailAddress = document.getElementById('emailAddress').value;
    var storedEmailAddress = decodeURIComponent(getCookie('email')); // Decode the stored email address
    var storedPassword = getCookie('password');
    
    if (storedEmailAddress !== emailAddress || storedPassword !== password) {
        isValid = false;
    }
    
    if (isValid) {
        // Removing the old password from session cookies
        document.cookie = 'password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'; 
        // Updating the password in session cookies
        document.cookie = 'password=' + encodeURIComponent(newPassword) + '; path=/; SameSite=None; Secure';
        alert('Your password has been reset.');
        resetPasswordForm.submit();
    } else {
        alert('The email address or password is not in our system. The password cannot be reset.');
    }
};

function init() {
    'use strict';
    if (document && document.getElementById) {
        var resetPasswordForm = document.getElementById('resetPasswordForm');
        resetPasswordForm.addEventListener('submit', resetPassword); // Use addEventListener
    }
}

document.addEventListener('DOMContentLoaded', init);

// Function to retrieve cookie value by name
function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(name + '=') === 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return '';
}