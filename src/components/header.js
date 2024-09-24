const createHeader = () => {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-box';
  const searchWrapper = document.createElement('div');
  searchWrapper.className = 'search-wrapper';
  const searchInputWrapper = document.createElement('div');
  searchInputWrapper.className = 'search-input-wrapper';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = 'city';
  searchInput.name = 'city';
  searchInput.required = true;
  searchInput.placeholder = 'Search City...';
  const searchInputBorder = document.createElement('div');
  searchInputBorder.className = 'input-border';
  const searchInputClear = document.createElement('i');
  searchInputClear.className = 'fas fa-x clear-btn';
  const searchLabel = document.createElement('label');
  searchLabel.setAttribute('for', 'city');
  const searchIcon = document.createElement('i');
  searchIcon.className = 'fas fa-search';
  const searchButton = document.createElement('div');
  searchButton.id = 'search-btn';
  searchButton.className = 'search-btn btn';
  searchButton.textContent = 'Search';
  searchLabel.appendChild(searchIcon);
  searchInputWrapper.appendChild(searchInput);
  searchInputWrapper.appendChild(searchInputBorder);
  searchInputWrapper.appendChild(searchInputClear);
  searchWrapper.appendChild(searchLabel);
  searchWrapper.appendChild(searchInputWrapper);
  searchContainer.appendChild(searchWrapper);
  searchContainer.appendChild(searchButton);
  header.appendChild(title);
  header.appendChild(searchContainer);

  return header;
};

export const headerContent = (city) => {
  document.querySelector('header h1').textContent = city;
}

export default () => {
  const header = createHeader();
  return header;
};
