(function () {
  'use strict';

  String.prototype.toLocaleDateString = function () {
    if (typeof this === 'string') {
      return new Date(this).toLocaleDateString();
    }
    return this;
  };

  String.prototype.toLocaleTimeString = function () {
    if (typeof this === 'string') {
      return new Date(this).toLocaleTimeString();
    }
    return this;
  };

  React.component = {};

})();