import $ from 'jquery';

export default () => {
  $('a[data-target]').click(function(e) {
    const href = $(this).attr('data-target');
    const $container = $('.sg-main');

    $container.stop().animate({
      scrollTop: $container.scrollTop() + ( $(href).offset().top - $container.offset().top )
    }, 600, function() {
      window.location.hash = href;
    });

    e.preventDefault();
  });
};
