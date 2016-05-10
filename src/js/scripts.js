import $ from 'jquery';
import fastclick from 'fastclick';
import cqProlyfill from 'cq-prolyfill';
import removeOutline from './removeOutline';

var cq = require('cq-prolyfill')({
  postcss: true
});

$(document).ready(function() {
  removeOutline();
});
