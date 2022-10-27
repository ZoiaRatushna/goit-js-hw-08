import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

const localStorage = window.localStorage;

function onFormData(e) {
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  formData.email = email.value;
  formData.message = message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    if (data.email)
      email.value = data.email;
    if (data.message)
      message.value = data.message;
  }
};

dataFromLocalStorage();