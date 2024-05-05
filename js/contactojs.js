document.getElementById('contact-form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let reason = document.getElementById('reason').value.trim();
    let checkbox = document.getElementById('checkbox').checked;
  
    if (!name || !email || !message || !reason || !checkbox) {
      event.preventDefault();
      alert('Por favor, complete todos los campos obligatorios.');
    }
  });