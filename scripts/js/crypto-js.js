
    document.getElementById('monformulaire').addEventListener('submit', function (event) {
    var formData = new FormData(this);
    var encryptedValue = encryptData(formData.get('noms'), 'sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==');
    formData.set('noms', encryptedValue);
    var encryptedValue = encryptData(formData.get('email'), 'sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==');
    formData.set('email', encryptedValue);
    var encryptedValue = encryptData(formData.get('msg'), 'sha512-a+SUDuwNzXDvz4XrIcXHuCf089/iJAoN4lmrXJg18XnduKK6YlDHNRalv4yd1N40OKI80tFidF+rqTFKGPoWFQ==');
    formData.set('msg', encryptedValue);
    // Envoyez les données chiffrées au serveur
    // ...
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  }
  );
  