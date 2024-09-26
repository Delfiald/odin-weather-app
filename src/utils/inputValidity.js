export default () => {
  const input = document.getElementById('city');

  if (input.validity.valueMissing) {
    input.reportValidity();
    return null;
  }

  input.setCustomValidity('');
  return input.value;
};
