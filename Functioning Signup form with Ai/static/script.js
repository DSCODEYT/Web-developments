document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validate the input fields (you can add more validation)
        if (!username || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Create a user object
        const user = {
            username: username,
            email: email,
            password: password
        };

        // Send user data to the backend (Flask API) for storage
        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Hide the form and show the success message
                form.style.display = 'none';
                successMessage.style.display = 'block';

                // Clear form inputs
                form.reset();
            } else {
                alert('Signup failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
