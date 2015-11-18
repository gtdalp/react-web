'use strict';
var ReactDOM = require('react-dom');

var FooterSelector = ReactDOM.createClass({
  render: function () {
    return <footer className="main-footer">
      <div className="pull-right hidden-xs">
        <b>Version</b> 0.0.73
      </div>
      <strong>Copyright &copy; 2015-2016 <a href="https://github.com/microlv">Microlv</a>.</strong>
      All rights reserved. Design by
      <strong><a href="https://github.com/microlv">Microlv</a>.</strong>
    </footer>;
  }
});

//component.FooterSelector = FooterSelector;

module.exports = FooterSelector;