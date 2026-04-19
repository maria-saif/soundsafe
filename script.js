document.querySelectorAll('.view-after').forEach(button => {
  button.addEventListener('click', function() {
    const afterSrc = this.parentElement.querySelector('img').dataset.after;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    lightboxImg.src = afterSrc;
    lightbox.style.display = 'flex';
  });
});

document.querySelector('.lightbox .close').addEventListener('click', function() {
  document.getElementById('lightbox').style.display = 'none';
});