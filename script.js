

document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    let email = document.getElementById('email').value;

    if (email) {
        // Simulating a successful form submission
        document.getElementById('response-message').innerHTML = "Thank you for subscribing!";
        document.getElementById('email').value = ""; // Clear the input field
    } else {
        document.getElementById('response-message').innerHTML = "Please enter a valid email!";
    }
});

