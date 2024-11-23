document.addEventListener("DOMContentLoaded", function () {
  fetch('files/header.html')
  .then(response => response.text())
  .then(data => document.querySelector('header').innerHTML = data);

  fetch('files/footer.html')
    .then(response => response.text())
    .then(data => document.querySelector('footer').innerHTML = data);
});
