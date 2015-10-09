(function () {
  'use strict';
  var NavigatorSelector = React.createClass({
    getInitialState: function () {
      return {};
    },
    componentDidMount: function () {
      this.fetchData();
    },
    fetchData: function () {
      $.get('/api/getCategory').then(function (data) {


      });
    },
    render: function () {
      return <ul className="sidebar-menu">
        <li>
          <a href="pages/calendar.html">
            <i className="fa fa-calendar"></i> <span>Calendar</span>
            <small className="label pull-right bg-red">3</small>
          </a>
        </li>
        <li>
          <a href="pages/mailbox/mailbox.html">
            <i className="fa fa-envelope"></i> <span>Mailbox</span>
            <small className="label pull-right bg-yellow">12</small>
          </a>
        </li>

        <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
        <li className="header">LABELS</li>
        <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
      </ul>;
    }
  });

  React.render(<NavigatorSelector/>, document.getElementById('navigator'));
})();


