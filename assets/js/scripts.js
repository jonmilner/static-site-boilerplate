import $ from 'jquery';
import fastclick from 'fastclick';
import cqProlyfill from 'cq-prolyfill';
import removeOutline from './components/removeOutline';

const cq = cqProlyfill({ postcss: true });

$(document).ready(function() {
  removeOutline();
});
