export default () => {
  const carousels = document.querySelectorAll(
    '.today-weather > .weather-overview, .today-weather > .weather-details'
  );
  const indicators = document.querySelectorAll(
    '.indicator-container > .indicator'
  );
  const indicatorActive = document.querySelector(
    '.indicator-container .indicator-active'
  );

  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.previous-btn');

  let activeIndex = 0;
  const carouselsArray = [...carousels];
  const indicatorsArray = [...indicators];

  const arrowHandler = (index) => {
    if (index === 1) {
      prevBtn.classList.add('show');
      nextBtn.classList.remove('show');
    } else {
      nextBtn.classList.add('show');
      prevBtn.classList.remove('show');
    }
  };

  const removeActive = () => {
    activeIndex = carouselsArray.findIndex((item) =>
      item.classList.contains('active')
    );

    carouselsArray.forEach((item) => {
      item.classList.remove('active');
    });

    indicatorsArray.forEach((item) => {
      item.classList.remove('active');
    });
  };

  const setIndicator = (index) => {
    const isIndexZero = index === 0;
    const animationDirection = isIndexZero ? 'reverse' : 'forwards';
    const newLeft = isIndexZero ? '0' : 'calc(100% - 10px)';

    indicatorActive.style.animation = `indicator .5s ease ${animationDirection}`;

    const handleAnimationEnd = () => {
      indicatorActive.style.animation = '';
      indicatorActive.style.left = newLeft;
      indicatorActive.removeEventListener('animationend', handleAnimationEnd);
    };

    indicatorActive.addEventListener('animationend', handleAnimationEnd);

    indicators[index].classList.add('active');
  };

  const carouselActive = (index, prevIndex) => {
    if (index === 1) {
      carousels[index].style.animation = 'slide-left-show .5s ease forwards';
      carousels[prevIndex].style.animation =
        'slide-right-hide .5s ease forwards';
    } else {
      carousels[index].style.animation = 'slide-right-show .5s ease forwards';
      carousels[prevIndex].style.animation =
        'slide-left-hide .5s ease forwards';
    }

    const handleAnimationEnd = () => {
      carousels[index].style.animation = '';
      carousels[index].removeEventListener('animationend', handleAnimationEnd);
    };

    carousels[index].addEventListener('animationend', handleAnimationEnd);

    carousels[index].classList.add('active');

    arrowHandler(index);
  };

  return {
    next: () => {
      removeActive();

      let currentIndex = 0;
      if (activeIndex < carouselsArray.length - 1) {
        currentIndex = activeIndex + 1;
      } else {
        currentIndex = 0;
      }

      carouselActive(currentIndex, activeIndex);
      setIndicator(currentIndex);
    },
    previous: () => {
      removeActive();

      let currentIndex = 0;
      if (activeIndex > 0) {
        currentIndex = activeIndex - 1;
      } else {
        currentIndex = 1;
      }

      carouselActive(currentIndex, activeIndex);
      setIndicator(currentIndex);
    },
    indicator: (e) => {
      const indicator = e.target.closest('.indicator-container > .indicator');
      removeActive();

      indicator.classList.add('active');
      const index = indicatorsArray.findIndex((item) =>
        item.classList.contains('active')
      );

      carouselActive(index, activeIndex);
      setIndicator(index);
    },
  };
};
