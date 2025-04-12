'use strict';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach((input) => {
      const name = input.getAttribute('name');
      const label = document.createElement('label');
      label.className = 'field-label';

      if (!input.id) {
        input.id = name;
      }

      label.setAttribute('for', input.id);
      label.textContent = capitalize(name);
      input.setAttribute('placeholder', capitalize(name));

      input.parentElement.insertBefore(label, input);
    });
  });
});
