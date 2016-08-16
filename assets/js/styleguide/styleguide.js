import $ from 'jquery';
import 'prismjs';
import slideoutMenu from './components/slideoutMenu';
import smoothScroll from './components/smoothScroll';

$(document).ready(function() {
  slideoutMenu();
  smoothScroll();
});

$(window).resize(function() {
  smoothScroll();
});
