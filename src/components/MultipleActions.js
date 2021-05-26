import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function AppMultipleActions() {
  window.location.replace("#/solution");
  scroll.scrollTo(800);
}

function HardMultipleActions() {
  window.location.replace("#/solution");
  scroll.scrollTo(1200);
}
export default AppMultipleActions;
