export default () => {
  const toggler = document.createElement('div');
  toggler.className = 'unit-toggler'
  const togglerWrapper = document.createElement('div')
  togglerWrapper.className = 'toggler-wrapper'
  const togglerButton = document.createElement('div')
  togglerButton.className = 'toggler-btn'
  togglerButton.textContent = 'US'
  const togglerText = document.createElement('div')
  togglerText.className = 'toggler-text'
  togglerText.textContent = 'F / miles'

  togglerWrapper.appendChild(togglerButton)
  togglerWrapper.appendChild(togglerText)

  toggler.appendChild(togglerWrapper)

  return toggler
}

export const togglerContent = (unit, text) => {
  const togglerBtn = document.querySelector('.toggler-btn');
  const togglerText = document.querySelector('.toggler-text');

  togglerBtn.textContent = unit;
  togglerText.textContent = text;
}