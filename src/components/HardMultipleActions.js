import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function HardMultipleActions() {
  if (window.innerWidth<1000) {
    window.location.replace("#/solution");
    scroll.scrollTo(4000);
  }
  else {
  window.location.replace("#/solution");
  scroll.scrollTo(1850);
}
}

export default HardMultipleActions;
