document.getElementById('contact-form').addEventListener('submit', function(event) {
<<<<<<< HEAD
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var reason = document.getElementById('reason').value.trim();
    var checkbox = document.getElementById('checkbox').checked;
=======
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let reason = document.getElementById('reason').value.trim();
    let checkbox = document.getElementById('checkbox').checked;
>>>>>>> fc0659c9a67e52b1ffa06eb886d11eaa8fb32cfb
  
    if (!name || !email || !message || !reason || !checkbox) {
      event.preventDefault();
      alert('Por favor, complete todos los campos obligatorios.');
    }
  });