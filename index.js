const { hash } = window.location; 

const message = atob(hash.replace('#', ''));

if (message) {
  document.querySelector('#msg-form').classList.add('hide');
  document.querySelector('#msg-show').classList.remove('hide');

  document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  // No backend server to receive info -- method above keeps form from submitting to a db
  document.querySelector("#msg-form").classList.add('hide');
  document.querySelector("#link-form").classList.remove('hide');
  // toggles visibility at click event 

  const input = document.querySelector('#message-input');
  // accepts an input from the user
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector('#link-input')
  linkInput.value = `${window.location}#${encrypted}`; 
  linkInput.select();
  // auto selects new string created
});
