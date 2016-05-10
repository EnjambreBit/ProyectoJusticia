import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$('#counter').countdown('2019/11/16 12:00:00').on('update.countdown', function(event) {
      $(this).html(event.strftime(`
        <div class="counter-container"><strong>Launching in...</strong><div class="counter-box first"><div class="number">%-D</div><span>Day%!d<span></div>
        <div class="counter-box second"><div class="number">%H</div><span>Hours</span></div>
        <div class="counter-box third"><div class="number">%M</div><span>Minutes</span></div>
        <div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>
      `));
    });
  }
});
