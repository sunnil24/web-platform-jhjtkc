const updateButton = document.getElementById('updateDetails');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');

if (typeof favDialog.showModal !== 'function') {
  favDialog.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}
updateButton.addEventListener('click', () => {
  if (typeof favDialog.showModal === 'function') {
    favDialog.showModal();
  } else {
    outputBox.value =
      'Sorry, the <dialog> API is not supported by this browser.';
  }
});

selectEl.addEventListener('change', (e) => {
  confirmBtn.value = selectEl.value;
});

favDialog.addEventListener('close', () => {
  outputBox.value = `${
    favDialog.returnValue
  } button clicked - ${new Date().toString()}`;
});
