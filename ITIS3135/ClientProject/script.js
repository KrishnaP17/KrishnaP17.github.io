// Select the HOME link
const homeLink = document.querySelector('header div.dropdown a');

// Add a click event listener to the HOME link
homeLink.addEventListener('click', (event) => {
  // Prevent the default action of the link
  event.preventDefault();

  // Navigate to the homepage
  window.location.href = 'index.html';
});


// script.js
containerFeat.addEventListener('mouseover', function(event) {
  console.log('Mouseover event triggered');
  if (event.target.dataset.description) {
      const description = event.target.dataset.description;
      carDescription.textContent = description;
      carDescription.style.display = 'block';
  }
});

containerFeat.addEventListener('mouseout', function() {
  console.log('Mouseout event triggered');
  carDescription.style.display = 'none';
});
