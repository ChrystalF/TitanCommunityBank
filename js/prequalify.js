/* 
   This program verifies whether the required entries contain values and whether the email address entered match.
*/

var validateEntries = function(event) {
   'use strict';
   var isValid = true;
   var header = '';
   var html = '';
   var required = '<span>Required field</span>';
   var errorMsg = 'Please review your entries and complete all required fields.';
   var emailError = 'The second entry does not match the first entry. Please try again.';

   var emailAddress = document.getElementById('emailAddress').value; 
   var confirmEmail = document.getElementById('confirmEmail').value;
   var firstName = document.getElementById('firstName').value;
   var lastName = document.getElementById('lastName').value;
   var phoneNumber = document.getElementById('phoneNumber').value;
   var city = document.getElementById('city').value;
   var state = document.getElementById('state').value;
   var zipCode = document.getElementById('zipCode').value;
   var grossIncome = document.getElementById('grossIncome').value;
   var SSN = document.getElementById('SSN').value;
   var agreementCheckbox = document.getElementById('agreementCheckbox').checked;
   var applicationHeader = document.getElementById('applicationHeader');
   var applicationInformation = document.getElementById('applicationInformation');
   var applicationForm = document.getElementById('applicationForm');

   if (emailAddress === '') {
      emailAddress = required;
      header = errorMsg;
      isValid = false;
   }
   if (confirmEmail === '') {
      confirmEmail = required;
      header = errorMsg; 
      isValid = false;
   }
   if (confirmEmail !== emailAddress) {
      confirmEmail = required;
      header = emailError;
      isValid = false;
   }
   if (firstName === '') {
      firstName = required;
      header = errorMsg;
      isValid = false;
   }
   if (lastName === '') {
      lastName = required;
      header = errorMsg;
      isValid = false;
   }
   if (phoneNumber === '') {
      phoneNumber = rquired;
      header = errorMsg;
      isValid = false;
   }
   if (city === '') {
      city = required;
      header = errorMsg;
      isValid = false;
   }
   if (state === '') {
      state = required;
      header = errorMsg;
      isValid = false;
   }
   if (zipCode === '') {
      zipCode = required;
      header = errorMsg;
      isValid = false;
   }
   if (grossIncome === '') {
      grossIncome = required;
      header = errorMsg;
      isValid = false;
   }
   if (SSN === '') {
      SSN = required;
      header = errorMsg;
      isValid = false;
   }
   if (agreementCheckbox === false) {
      agreementCheckbox = required;
      header = errorMsg;
      isValid = false;
   }

   applicationHeader.firstChild.nodeValue = header;
   if (isValid === false && (header === errorMsg || emailError)) {
      applicationInformation.innerHTML = html;
      event.preventDefault();
   } else {
      applicationInformation.innerHTML = '';
      applicationForm.submit();
   }
   if (isValid && parseInt(grossIncome) > 45000) {
      alert('Congratulations! You are prequalified for a loan. A representative will contact you soon.');
   } else if (isValid = true && parseInt(grossIncome) < 45000) {
      alert('We are sorry. You do not qualify for a loan at this time.');
   }
};

var resetForm = function() {
   applicationForm.reset();
   applicationHeader.firstChild.nodeValue = '';
   applicationInformation.innerHTML = '';
   
};

function init() {
   'use strict';
   if (document && document.getElementById) {
      var apply = document.getElementById('apply');
      apply.onclick = validateEntries;
      var reset = document.getElementById('reset');
      reset.onclick = resetForm; 
      emailAddress.focus();
   };
};

document.addEventListener('DOMContentLoaded', init);
   