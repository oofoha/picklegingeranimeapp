

// Handle the quiz button click
document.getElementById('quiz-button').addEventListener('click', function() {
    alert("Quiz coming soon! Stay tuned.");
});

// Handle genre selection
document.querySelectorAll('.genre-card').forEach(card => {
    card.addEventListener('click', function() {
        alert(`You selected the ${this.dataset.genre} genre!`);
    });
});

// Handle social sharing
document.getElementById('share-button').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: 'Pickle Ginger Anime Adviser',
            text: 'I just found an anime recommendation using Pickle Ginger!',
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        alert("Sharing not supported in this browser.");
    }
});

// Handle newsletter subscription
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

