(function () {
  'use strict';

  var FooterSelector = React.createClass({
    render: function () {
      return <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 1.0.1
        </div>
        <strong>Copyright &copy; 2015-2016 <a href="https://github.com/microlv">Microlv</a>.</strong> All rights reserved. UI design by <strong>AdminLTE</strong>
      </footer>;
    }
  });

  React.render(<FooterSelector />, document.getElementById('frame-footer'));
})();