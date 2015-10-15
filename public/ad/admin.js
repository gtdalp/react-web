(function () {
  'use strict';
  var list = [];
  var obj = {
    api1: function () {
    },
    api2: function () {
    },
    api3: function () {
    },
    then: function (fn) {
      function cb(val) {
        var next = list.shift(0);
        next(val);
      }

      list.push(fn, cb);
      fn(cb)
      return this;
    }
  };

  obj.then(obj.api1).then(obj.api2).then(obj.api3);


  obj.api1(function (val1) {
    obj.api2(val1, function () {

    });
  });

})();
