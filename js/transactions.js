class Transactions {
   constructor(date, description, type, amount) {
   this.date = date;
   this.description = description;
   this.type = type; // Credit or Debit
   this.amount = amount;
   }
};

var transactions = [];
var accountBalance = 0;
var formatter = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD',
   minimumFractionDigits: 2,
});

// Determines whether the input is a number, then adds deposit amount to user's account balance.
var addDeposit = function() { 
   var depositAmount = Number(document.getElementById('depositAmount').value);
   if (depositAmount < 0) {
      alert('Enter a dollar amount.');
      depositAmount = '';
   } else {
      var dateNow = new Date();
      transactions.push({'date': (dateNow.getMonth()+ 1) + '-' + dateNow.getDate() + '-' + dateNow.getFullYear(), 'description': 'deposit', 'type': 'N/A', 'amount': depositAmount});
      accountBalance += depositAmount;
      var accountBalanceFormatted = formatter.format(accountBalance);
      document.getElementById('userBalance').innerHTML = accountBalanceFormatted;
      console.log(accountBalanceFormatted);
   }
   for (var i = 0; i < transactions.length; i++) {
      if (transactions[i] == transactions.at(-1)) {
         var tr = '<tr><td>' + transactions[i].date + '</td>' + '<td>' + transactions[i].description + '</td>' + '<td>' + transactions[i].type + '</td>' + '<td>' + transactions[i].amount + '</td></tr>';
      document.getElementById('userTransactions').innerHTML += tr;
      }
   };
};
// Determines whether the input is a number, then subtracts withdrawal amount to user's account balance.
var subtractWithdrawal = function() {
   var withdrawAmount = Number(document.getElementById('withdrawAmount').value);
   if (withdrawAmount < 0) {
      alert('Enter a dollar amount.');
      withdrawAmount = '';
   } else {
      var dateNow = new Date();
      transactions.push({'date': (dateNow.getMonth()+ 1) + '-' + dateNow.getDate() + '-' + dateNow.getFullYear(), 'description': 'withdrawal', 'type': 'N/A', 'amount': withdrawAmount});
      accountBalance -= withdrawAmount;
      var accountBalanceFormatted = formatter.format(accountBalance);
      document.getElementById('userBalance').innerHTML = accountBalanceFormatted;
      console.log(accountBalanceFormatted);
   }
   for (var i = 0; i < transactions.length; i++) {
      if (transactions[i] == transactions.at(-1)) {
         var tr = '<tr><td>' + transactions[i].date + '</td>' + '<td>' + transactions[i].description + '</td>' + '<td>' + transactions[i].type + '</td>' + '<td>' + transactions[i].amount + '</td></tr>';
      document.getElementById('userTransactions').innerHTML += tr;
      }
   };
   
};

function init() {
   'use strict';
   var creditTotal = 0;
   var debitTotal = 0;
   document.getElementById('depositButton').onclick = addDeposit;
   document.getElementById('withdrawButton').onclick = subtractWithdrawal;
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           var transactions = JSON.parse(this.responseText);
           for (var i = 0; i < transactions.length; i++) {
               var tr = '<tr><td>' + transactions[i].date + '</td>' + '<td>' + transactions[i].description + '</td>' + '<td>' + transactions[i].type + '</td>' + '<td>' + transactions[i].amount + '</td></tr>';
               document.getElementById('userTransactions').innerHTML += tr;
           } 

           for (var i = 0; i < transactions.length; i++) {
               if (transactions[i].type == 'credit') {
                   creditTotal += transactions[i].amount;
               }  
               else if (transactions[i].type == 'debit') {
                   debitTotal += transactions[i].amount;
               } 
           }
           var difference = creditTotal - debitTotal;
           accountBalance += difference;
           var accountBalanceFormatted = formatter.format(accountBalance);
           document.getElementById('userBalance').innerHTML = accountBalanceFormatted;
       } 
   };
   xhttp.open('GET', 'http://localhost:3000/transactions', true);
   xhttp.send();
}

document.addEventListener('DOMContentLoaded', init);


