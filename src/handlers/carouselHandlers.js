export default () => {
  const carousels = document.querySelectorAll('.today-weather > .weather-overview, .today-weather > .weather-details');
  const indicators = document.querySelectorAll('.indicator-wrapper > div');
  let activeIndex = 0;
  const carouselsArray = [...carousels];
  const indicatorsArray = [...indicators];

  const removeActive = () => {
    activeIndex = carouselsArray.findIndex(item => item.classList.contains('active'));

    carouselsArray.forEach((item) => {
      item.classList.remove('active');
    })

    indicatorsArray.forEach((item) => {
      item.classList.remove('active');
    })
  }

  const setIndicator = (index) => {
    indicators[index].classList.add('active')
  }

  const carouselActive = (index) => {
    carousels[index].classList.add('active');
  }

  return {
    next: () => {
      removeActive();

      let currentIndex = 0;
      if(activeIndex < carouselsArray.length - 1){
        currentIndex = activeIndex + 1;
      }else{
        currentIndex = 0;
      }

      carouselActive(currentIndex);
      setIndicator(currentIndex);
    },
    previous: () => {
      removeActive();

      let currentIndex = 0;
      if(activeIndex > 0){
        currentIndex = activeIndex - 1;
      }else{
        currentIndex = 1;
      }

      carouselActive(currentIndex);
      setIndicator(currentIndex);
    },
    indicator: (e) => {
      const indicator = e.target.closest('.indicator-wrapper > div')
      removeActive();
      
      indicator.classList.add('active');
      const index = indicatorsArray.findIndex(item => item.classList.contains('active'));

      carouselActive(index);
      setIndicator(index);
    }
  }
}