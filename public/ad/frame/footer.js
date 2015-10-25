(function () {
  'use strict';

  var FooterSelector = React.createClass({
    render: function () {
      return <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 0.0.73
        </div>
        <strong>Copyright &copy; 2015-2016 <a href="https://github.com/microlv">Microlv</a>.</strong> All rights reserved. UI design by <strong>AdminLTE</strong>
      </footer>;
    }
  });
  React.component.FooterSelector = FooterSelector;

})();