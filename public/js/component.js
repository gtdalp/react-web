(function (React) {
  'use strict';

  var component = [];

  var _register = function (name, com) {
    component.push({name: name, component: com});
  };

  var _getComponent = function (name) {
    var _com = <div></div>;
    for (var i = 0; i < component.length; i++) {
      if (component[i].name === name) {
        _com = component[i];
        break;
      }
    }
    return _com.component;
  };

  React.registerComponent = _register;
  React.getComponent = _getComponent;

})(React);