export default () => {
  const loadingScreen = document.createElement('div');
  loadingScreen.className = 'loading-screen';
  const loadingWrapper = document.createElement('div');
  loadingWrapper.className = 'loading-wrapper';

  const loadingIcon = document.createElement('i');
  loadingIcon.className = 'fas fa-cloud';
  const loadingCircle = document.createElement('div');
  loadingCircle.className = 'loading-circle'

  loadingWrapper.appendChild(loadingIcon)
  loadingWrapper.appendChild(loadingCircle)

  loadingScreen.appendChild(loadingWrapper)
  return loadingScreen
}