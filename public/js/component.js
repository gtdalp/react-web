(function (root) {
  'use strict';

  var component = [];

  var _register = function (name, component) {
    component.push({name: name, component: component});
  };

  var _getComponent = function (name) {
    for (var i = 0; i < component.length; i++) {
      if (component[i].name === name) {
        return component[i];
      }
    }
  };

  root.React.component = {
    registerComponent: _register,
    getComponent: _getComponent
  };

})(this);