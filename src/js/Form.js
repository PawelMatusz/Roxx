const message = document.querySelector('[data-confirm-form]');

const showMessageToggle = e => {
  if (e.target.dataset.formSend === 'open') {
    message.classList.add('is-active');
  } else if (e.target.dataset.formSend === 'close') {
    message.classList.remove('is-active');
  }
};

export default showMessageToggle;
