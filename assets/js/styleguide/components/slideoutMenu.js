import $ from 'jquery';

export default () => {
  const $slideoutToggle = $('.js-sg-slideout-toggle');
  const $slideoutMenu = $('.js-sg-slideout-menu');
  const $overlay = $('.js-sg-overlay');

  $slideoutToggle.on('click', function() {
    $slideoutToggle.toggleClass('is-active');
    $slideoutMenu.toggleClass('is-visible');
    $overlay.toggleClass('is-visible');
  });

  $overlay.on('click', function() {
    $overlay.removeClass('is-visible');
    $slideoutMenu.removeClass('is-visible');
    $slideoutToggle.removeClass('is-active');
  });

  $(window).resize(function() {
    $slideoutToggle.removeClass('is-active');
    $slideoutMenu.removeClass('is-visible');
    $overlay.removeClass('is-visible');
  });
};
