(function () {
  'use strict';

  var ContentSelector = React.createClass({
    render: function () {
      return <div id="profile" className="content-wrapper">
        <div id="content-map"></div>
        <div id="content"></div>
      </div>;
    }
  });

  React.render(<ContentSelector />, document.getElementById('frame-content'));
})();