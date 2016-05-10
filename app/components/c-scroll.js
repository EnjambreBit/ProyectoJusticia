import Ember from 'ember';

const DELAY = 2000;

export default Ember.Component.extend({
  didInsertElement() {
    this.hideLoadingInitialScreen();

    $('#multiscroll').multiscroll({
      sectionsColor: ['#2B2D35', '#F1E7C0', '#7BAABE'],
      anchors: ['first', 'second', 'third'],
      menu: '#menu',
      navigation: true,
      navigationTooltips: ['Home', 'About', 'Contact'],
      loopBottom: true,
      loopTop: true
    });

  },

  hideLoadingInitialScreen() {

    setTimeout(() => {
      $('.globload').fadeOut("slow");
    }, DELAY);

    setTimeout(() => {
      $("#logo").addClass("fadeIn").removeClass("opacity-0");
    }, DELAY + 800);

    setTimeout(() => {
      $("#counter").addClass("fadeIn").removeClass("opacity-0");
    }, DELAY + 1600);

    setTimeout(() => {
      $("#subscribe").addClass("fadeIn").removeClass("opacity-0");
    }, DELAY + 2400);

  }
});
