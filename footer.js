
// Function to load the footer content
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    // Insert the footer HTML into the container
    document.getElementById('footer-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));
