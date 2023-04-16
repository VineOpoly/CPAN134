var form = document.getElementById('email-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting
  var emailInput = document.getElementById('email-input');
  var email = emailInput.value.trim();
  if (email !== '') {
    alert('Thanks for subscribing, ' + email + '!');
    emailInput.value = ''; // clear the input field
  } else {
    alert('Please enter a valid email address.');
  }
});

var form = document.getElementById('email-form');
var emailInput = document.getElementById('email-input');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting
  var email = emailInput.value.trim();
  if (email !== '') {
    localStorage.setItem('email', email); // save the email to localStorage
    alert('Thanks for subscribing, ' + email + '!');
    emailInput.value = ''; // clear the input field
  } else {
    alert('Please enter a valid email address.');
  }
});

// check if there is a saved email in localStorage
var savedEmail = localStorage.getItem('email');
if (savedEmail !== null) {
  emailInput.value = savedEmail;
}


