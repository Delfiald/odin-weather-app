import carouselHandlers from "./carouselHandlers";
import searchHandlers from "./searchHandlers";
import unitHandlers from "./unitHandlers";

export default () => {
  const body = document.querySelector('body')

  body.addEventListener('click', (e) => {
    const {target} = e;
    if(target.closest('.previous-btn')){
      carouselHandlers().previous();
    }else if(target.closest('.next-btn')){
      carouselHandlers().next();
    }else if(target.closest('.indicator-container > .indicator')){
      carouselHandlers().indicator(e);
    }else if(target.closest('#search-btn')){
      searchHandlers().search();
    }else if(target.closest('header .clear-btn')){
      searchHandlers().remove();
    }else if(target.closest('.toggler-wrapper')){
      unitHandlers();
    }
  })
}