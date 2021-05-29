import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function AppMultipleActions() {
if (window.innerWidth<1000) {
  window.location.replace("#/solution");
  scroll.scrollTo(1900);
}
else {
window.location.replace("#/solution");
scroll.scrollTo(800);
}
}

export default AppMultipleActions;
