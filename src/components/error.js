export default (errorCode) => {
  const errorScreen = document.createElement('div');
  errorScreen.className = 'error-screen';
  const errorWrapper = document.createElement('div');
  errorWrapper.className = 'error-wrapper';

  const errorIcon = document.createElement('i');
  errorIcon.className = 'fas fa-cloud-bolt';
  const errorText = document.createElement('div');
  errorText.textContent = errorCode

  errorWrapper.appendChild(errorIcon)
  errorWrapper.appendChild(errorText)

  errorScreen.appendChild(errorWrapper)
  return errorScreen
}