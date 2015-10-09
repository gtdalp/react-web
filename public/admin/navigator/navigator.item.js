(function () {
  'use strict';

  var NavigatorItemSelector = React.createClass({
    render: function () {


      return <li>
        <a href="pages/calendar.html">
          <i className={this.props.icon}></i> <span>{this.props.name}</span>
          <small className="label pull-right bg-red">3</small>
        </a>
      </li>
    }
  });

  React.render(<NavigatorItemSelector />, document.getElementById('navigator-item'));
})();
