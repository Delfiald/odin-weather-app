import carouselHandlers from "./carouselHandlers";

export default () => {
  const body = document.querySelector('body')

  body.addEventListener('click', (e) => {
    const {target} = e;
    if(target.closest('.previous-btn')){
      carouselHandlers().previous();
    }else if(target.closest('.next-btn')){
      carouselHandlers().next();
    }else if(target.closest('.indicator-wrapper > div')){
      carouselHandlers().indicator(e);
    }
  })
}