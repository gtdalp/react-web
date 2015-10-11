(function () {
  'use strict';

  var ContentSelector = React.createClass({
    render: function () {
      return <div className="content-wrapper">
        <div id="navigator-map"></div>
        <div id="content"></div>
      </div>;
    }
  });

  React.render(<ContentSelector />, document.getElementById('frame-content'));
})();