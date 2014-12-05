export default {
  name: 'flash',

  initialize: function(container, app) {
    container.typeInjection('route', 'flash', 'service:flash');
    container.typeInjection('controller', 'flash', 'service:flash');
    container.typeInjection('component', 'flash', 'service:flash');
  }
};
