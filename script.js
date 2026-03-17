
// Handle the quiz button click
const quizButton = document.getElementById('quiz-button');
if (quizButton) {
    quizButton.addEventListener('click', function() {
        alert("Quiz coming soon! Stay tuned.");
    });
}

// Handle genre selection
document.querySelectorAll('.genre-card').forEach(card => {
    card.addEventListener('click', function() {
        alert(`You selected the ${this.dataset.genre} genre!`);
    });
    // Keyboard accessibility: trigger on Enter/Space
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            alert(`You selected the ${this.dataset.genre} genre!`);
        }
    });
});

// Handle social sharing
const shareButton = document.getElementById('share-button');
if (shareButton) {
    shareButton.addEventListener('click', function() {
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
}

// Handle newsletter subscription
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = document.getElementById('email');
        const responseMsg = document.getElementById('response-message');
        const email = emailInput ? emailInput.value.trim() : '';

        if (email) {
            if (responseMsg) {
                responseMsg.textContent = "Thank you for subscribing!";
                responseMsg.className = 'form-message';
            }
            if (emailInput) emailInput.value = '';
        } else {
            if (responseMsg) {
                responseMsg.textContent = "Please enter a valid email address.";
                responseMsg.className = 'form-message error';
            }
        }
    });
}

