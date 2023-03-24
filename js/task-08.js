const form = document.querySelector('.login-form');

form.addEventListener('submit', onInputEvent);

function onInputEvent(event) {
  event.preventDefault();

  const formInputs = event.currentTarget.elements;
  const email = formInputs.email.value;
  const password = formInputs.password.value;

  if (email === '' || password === '') {
    alert('Всі поля повинні бути заповнені');
  } else {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log('Name:', name, ';', 'Value:', value);
    });
  }

  form.reset();
}
