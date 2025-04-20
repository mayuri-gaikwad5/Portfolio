// Open project in modal when image is clicked
document.querySelectorAll('.project-image').forEach(function(img) {
    img.addEventListener('click', function() {
      const projectLink = img.getAttribute('data-project');
      document.getElementById('modal-content').src = projectLink;
      document.getElementById('modal').style.display = 'flex'; // Show the modal
    });
  });
  
  // Close the modal
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none'; // Hide the modal
    document.getElementById('modal-content').src = ''; // Clear content
  });
  
  // Open the project in a new window
  function openInNewWindow() {
    const projectLink = document.getElementById('modal-content').src;
    if (projectLink) {
      window.open(projectLink, '_blank'); // Open in new tab
    }
  }
  
  