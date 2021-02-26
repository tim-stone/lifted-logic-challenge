document.getElementById('contact-form').addEventListener('submit', formSubmit);

function formSubmit() {
  document.getElementById('thank-you').style.display = 'block'; //adds thank you message on submit
  document.getElementById('form-container').style.display = 'none'; //removes form on submit
}
