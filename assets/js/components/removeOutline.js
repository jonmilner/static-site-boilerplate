import $ from 'jquery';

export default () => {
  $('body').on('mousedown', '*', function(e) {
    const $this = $(this);

    if (($this.is(':focus') || $this.is(e.target)) && $this.css('outline-style') === 'none') {
      $this.css('outline', 'none').one('blur', () => $this.css('outline', ''));
    }
  });
};
