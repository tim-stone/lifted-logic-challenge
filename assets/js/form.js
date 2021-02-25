document.getElementById('contact-form').addEventListener('submit', formSubmit);

function formSubmit() {
  document.getElementById('thank-you').style.display = 'block';
  document.getElementById('form-container').style.display = 'none';
}
