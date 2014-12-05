'use strict';

module.exports = {
  name: 'ember-flash-message',

  included: function(app) {
    this._super.included(app);

    // ember-cli bug forces us to put styles in vendor folder for now
    app.import('vendor/ember-flash-message/app.css');
  }
};
