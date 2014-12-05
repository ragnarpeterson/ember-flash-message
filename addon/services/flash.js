import Em from 'ember';

var DURATION = 3000;

export default Em.Object.extend({
  visible: false,
  type: null,
  message: null,
  timeout: null,

  success: function(text, duration) {
    this._display('success', text, duration);
  },

  failure: function(text, duration) {
    this._display('failure', text, duration);
  },

  notice: function(text, duration) {
    this._display('notice', text, duration);
  },

  _display: function(type, text, duration) {
    Em.run.cancel(this.timeout);

    this.setProperties({
      visible: true,
      type: type,
      text: text
    });

    this.timeout = Em.run.later(this, this._clear, duration || DURATION);
  },

  _clear: function() {
    this.set('visible', false);
  }
});
