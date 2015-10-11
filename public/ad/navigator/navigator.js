(function () {
  'use strict';

  var NavigatorItemSelector = React.createClass({
    handleRouter: function (name) {
      console.log('url-->' + name);
      React.render(React.getComponent('Timeline'), document.getElementById('content'));
    },
    render: function () {
      var that = this;
      var lis = this.props.items.map(function (item) {
        return <li><a href="#" onClick={that.handleRouter(item.name)}>
          <i className={item.icon}></i> <span>{item.name}</span>
          <small className="label pull-right bg-red">{item.count}</small>
        </a></li>;
      });
      return <ul className="sidebar-menu">
        {lis}

        <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
        <li className="header">LABELS</li>
        <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
      </ul>;
    }
  });

  var NavigatorSelector = React.createClass({
    getInitialState: function () {
      return {items: []};
    },
    componentDidMount: function () {
      this.fetchData();
    },
    fetchData: function () {
      var that = this;
      $.get('/api/getCategory').then(function (data) {
        that.setState({items: data.data});
      }.bind(this));
    },
    render: function () {
      return <NavigatorItemSelector items={this.state.items}/>;
    }
  });

  React.registerComponent('NavigatorItemSelector', <NavigatorItemSelector/>);
  React.render(<NavigatorSelector/>, document.getElementById('navigator'));
})();


