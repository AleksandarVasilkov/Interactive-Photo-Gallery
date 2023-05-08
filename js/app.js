

document.addEventListener('DOMContentLoaded', function() {
  baguetteBox.run('.gallery');
  
  const searchBox = document.getElementById('search');
  const photos = document.querySelectorAll('.photo');

  searchBox.addEventListener('input', function() {
      const searchTerm = searchBox.value.toLowerCase();

      photos.forEach(function(photo) {
          const caption = photo.querySelector('a').getAttribute('data-caption').toLowerCase();

          if (caption.indexOf(searchTerm) > -1) {
              photo.style.display = 'block';
          } else {
              photo.style.display = 'none';
          }
      });
  });
});

  