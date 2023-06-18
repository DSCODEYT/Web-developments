  

// Get the signup form container element
const signupFormContainer = document.getElementById("signupFormContainer");

// Get the login form container element
const loginFormContainer = document.getElementById("loginFormContainer");

// Get the "Sign up" button element from the navigation bar
const showSignupFormButton = document.getElementById("showSignupForm");

// Get the "Log in" button element from the navigation bar
const showLoginFormButton = document.getElementById("showLoginForm");

// Get the "Sign up for free" link element
const showSignupFormLink = document.getElementById("showSignupFormLink");

// Get the "Sign up for free" link element
const showLoginFormLink = document.getElementById("showLoginFormLink");







// showing and hiding the login and signup forms
const showLoginForm = document.getElementById('showLoginForm');
const loginContainer = document.getElementById('login-container');

showLoginForm.addEventListener('click', function() {
  loginContainer.style.display = 'flex';
});

const showSignupForm = document.getElementById('showSignupForm');
const signupcontainer = document.getElementById('signup-container');

showSignupForm.addEventListener('click', function() {
  signupcontainer.style.display = 'flex';
});





// Add an event listener to the "Sign up" button
showSignupFormButton.addEventListener("click", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Show the signup form and hide the login form
  signupFormContainer.style.display = "block";
  loginFormContainer.style.display = "none";
});

// Add an event listener to the "Log in" button
showLoginFormButton.addEventListener("click", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Show the login form and hide the signup form
  loginFormContainer.style.display = "block";
  signupFormContainer.style.display = "none";
});





// Get the "Cut button" from forms
const signupCutButton = document.getElementById('signupCutButton');
const loginCutButton = document.getElementById('loginCutButton');


// Event listeners for cut buttons
signupCutButton.addEventListener('click', closeSignupForm);
loginCutButton.addEventListener('click', closeLoginForm 
 // Function to close the Sign up form
 function closeSignupForm() {
 signupFormContainer.style.display = 'none';
 signupcontainer.style.display = 'none';
}

 // Function to close the Log in form
 function closeLoginForm() {
 loginFormContainer.style.display = 'none';
 loginContainer.style.display = 'none';
}




// Add an event listener to the "Sign up for free" link
showSignupFormLink.addEventListener("click", function(event) {
  // Prevent the default link navigation behavior
  event.preventDefault();

  // Show the signup form and hide the login form
  signupFormContainer.style.display = "block";
  loginFormContainer.style.display = "none";

  loginContainer.style.display = 'none';
  signupcontainer.style.display = 'block';
});

// Add an event listener to the "Log in" link
showLoginFormLink.addEventListener("click", function(event) {
  // Prevent the default link navigation behavior
  event.preventDefault();

  // Show the signup form and hide the login form
  loginFormContainer.style.display = "block";
  signupFormContainer.style.display = "none";

  loginContainer.style.display = 'block';
  signupcontainer.style.display = 'none';
});




// Review card Slideshow functionality
let reviewCards = document.querySelectorAll('.review-card-position');
let currentCardIndex = 0;

function showNextCard() {
  reviewCards[currentCardIndex].classList.remove('active');

  currentCardIndex++;
  if (currentCardIndex >= reviewCards.length) {
    currentCardIndex = 0;
  }

  reviewCards[currentCardIndex].classList.add('active');
}

// Change the card every 2 seconds
setInterval(showNextCard, 2000);






