import Em from 'ember';

var oneWay = Em.computed.oneWay;

export default Em.Component.extend({
  classNames: ['flash'],
  classNameBindings: ['visible', 'type'],
  visible: oneWay('flash.visible'),
  type: oneWay('flash.type'),
  text: oneWay('flash.text')
});
