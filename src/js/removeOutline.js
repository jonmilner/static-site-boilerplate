import $ from 'jquery';

export default () => {
  $('body').on('mousedown', '*', function(e) {
    if (($(this).is(':focus') || $(this).is(e.target)) && $(this).css('outline-style') === 'none') {
      $(this).css('outline', 'none').on('blur', function() {
        $(this).off('blur').css('outline', '');
      });
    }
  });
};
