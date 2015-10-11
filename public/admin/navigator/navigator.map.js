(function () {
  'use strict';

  var ContentMapSelector = React.createClass({
    render: function () {
      return <section className="content-header">
        <h1>
          User Profile
        </h1>
        <ol className="breadcrumb">
          <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
          <li><a href="#">Examples</a></li>
          <li className="active">User profile</li>
        </ol>
      </section>;
    }
  });

  React.render(<ContentMapSelector />, document.getElementById('navigator-map'));
})();